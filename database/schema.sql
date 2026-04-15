-- Echo Database Schema
-- Compatible with Supabase / PostgreSQL

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- Test Categories
-- ============================================
CREATE TABLE test_categories (
  id          UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  slug        VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  icon        VARCHAR(50),
  color       VARCHAR(200),
  sort_order  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Tests
-- ============================================
CREATE TABLE tests (
  id                UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title             VARCHAR(200) NOT NULL,
  slug              VARCHAR(200) UNIQUE NOT NULL,
  description       TEXT,
  short_description VARCHAR(500),
  category_id       UUID REFERENCES test_categories(id) ON DELETE SET NULL,
  question_count    INTEGER DEFAULT 0,
  estimated_minutes INTEGER DEFAULT 10,
  tags              TEXT[],
  completion_count  INTEGER DEFAULT 0,
  is_popular        BOOLEAN DEFAULT FALSE,
  is_featured       BOOLEAN DEFAULT FALSE,
  cover_gradient    VARCHAR(300),
  is_published      BOOLEAN DEFAULT TRUE,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Test Dimensions (measurement axes)
-- ============================================
CREATE TABLE test_dimensions (
  id          UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  test_id     UUID REFERENCES tests(id) ON DELETE CASCADE NOT NULL,
  name        VARCHAR(100) NOT NULL,
  description TEXT,
  min_label   VARCHAR(100),
  max_label   VARCHAR(100),
  color       VARCHAR(50),
  sort_order  INTEGER DEFAULT 0
);

-- ============================================
-- Test Questions
-- ============================================
CREATE TABLE test_questions (
  id           UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  test_id      UUID REFERENCES tests(id) ON DELETE CASCADE NOT NULL,
  dimension_id UUID REFERENCES test_dimensions(id) ON DELETE SET NULL,
  text         TEXT NOT NULL,
  sort_order   INTEGER DEFAULT 0,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Test Options (answers per question)
-- ============================================
CREATE TABLE test_options (
  id               UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  question_id      UUID REFERENCES test_questions(id) ON DELETE CASCADE NOT NULL,
  text             TEXT NOT NULL,
  value            INTEGER DEFAULT 0,
  dimension_scores JSONB DEFAULT '{}',
  sort_order       INTEGER DEFAULT 0
);

-- ============================================
-- Test Results (type definitions + interpretation)
-- ============================================
CREATE TABLE test_results (
  id               UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  test_id          UUID REFERENCES tests(id) ON DELETE CASCADE NOT NULL,
  type_code        VARCHAR(20) NOT NULL,
  type_name        VARCHAR(100) NOT NULL,
  summary          TEXT,
  description      TEXT,
  strengths        TEXT[],
  weaknesses       TEXT[],
  relationships    TEXT,
  career           TEXT,
  growth           TEXT,
  min_score        INTEGER DEFAULT 0,
  max_score        INTEGER DEFAULT 100,
  dimension_ranges JSONB DEFAULT '{}',
  created_at       TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(test_id, type_code)
);

-- ============================================
-- Users (managed by Supabase Auth + profile)
-- ============================================
CREATE TABLE user_profiles (
  id         UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  name       VARCHAR(200),
  avatar_url TEXT,
  bio        TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- User Test Sessions
-- ============================================
CREATE TABLE user_test_sessions (
  id               UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id          UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  test_id          UUID REFERENCES tests(id) ON DELETE SET NULL NOT NULL,
  status           VARCHAR(20) DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed')),
  result_id        UUID REFERENCES test_results(id) ON DELETE SET NULL,
  dimension_scores JSONB DEFAULT '{}',
  started_at       TIMESTAMPTZ DEFAULT NOW(),
  completed_at     TIMESTAMPTZ
);

-- ============================================
-- User Answers
-- ============================================
CREATE TABLE user_answers (
  id          UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  session_id  UUID REFERENCES user_test_sessions(id) ON DELETE CASCADE NOT NULL,
  question_id UUID REFERENCES test_questions(id) ON DELETE CASCADE NOT NULL,
  option_id   UUID REFERENCES test_options(id) ON DELETE CASCADE NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(session_id, question_id)
);

-- ============================================
-- Saved Reports
-- ============================================
CREATE TABLE saved_reports (
  id         UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id    UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  session_id UUID REFERENCES user_test_sessions(id) ON DELETE CASCADE NOT NULL,
  title      VARCHAR(200),
  notes      TEXT,
  is_public  BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Feedback
-- ============================================
CREATE TABLE feedback (
  id         UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id    UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  test_id    UUID REFERENCES tests(id) ON DELETE SET NULL,
  rating     INTEGER CHECK (rating BETWEEN 1 AND 5),
  comment    TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Indexes for performance
-- ============================================
CREATE INDEX idx_tests_category ON tests(category_id);
CREATE INDEX idx_tests_slug ON tests(slug);
CREATE INDEX idx_test_questions_test ON test_questions(test_id);
CREATE INDEX idx_test_options_question ON test_options(question_id);
CREATE INDEX idx_sessions_user ON user_test_sessions(user_id);
CREATE INDEX idx_sessions_test ON user_test_sessions(test_id);
CREATE INDEX idx_answers_session ON user_answers(session_id);

-- ============================================
-- Row Level Security (RLS)
-- ============================================
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_test_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_reports ENABLE ROW LEVEL SECURITY;

-- Users can only see/edit their own data
CREATE POLICY "Users view own profile" ON user_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON user_profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users insert own profile" ON user_profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users view own sessions" ON user_test_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own sessions" ON user_test_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own sessions" ON user_test_sessions FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users view own answers" ON user_answers FOR SELECT USING (
  session_id IN (SELECT id FROM user_test_sessions WHERE user_id = auth.uid())
);
CREATE POLICY "Users insert own answers" ON user_answers FOR INSERT WITH CHECK (
  session_id IN (SELECT id FROM user_test_sessions WHERE user_id = auth.uid())
);

-- Public read for tests, categories, questions, options, results
CREATE POLICY "Public read tests" ON tests FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Public read categories" ON test_categories FOR SELECT USING (TRUE);
CREATE POLICY "Public read questions" ON test_questions FOR SELECT USING (TRUE);
CREATE POLICY "Public read options" ON test_options FOR SELECT USING (TRUE);
CREATE POLICY "Public read results" ON test_results FOR SELECT USING (TRUE);
CREATE POLICY "Public read dimensions" ON test_dimensions FOR SELECT USING (TRUE);

ALTER TABLE tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_dimensions ENABLE ROW LEVEL SECURITY;
