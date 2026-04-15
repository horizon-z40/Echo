// Types for the Echo personality test platform

export interface TestCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export interface Test {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  categoryId: string;
  category?: TestCategory;
  questionCount: number;
  estimatedMinutes: number;
  tags: string[];
  completionCount: number;
  isPopular: boolean;
  isFeatured: boolean;
  coverGradient: string;
  createdAt: string;
}

export interface TestDimension {
  id: string;
  testId: string;
  name: string;
  description: string;
  minLabel: string;
  maxLabel: string;
  color: string;
}

export interface TestQuestion {
  id: string;
  testId: string;
  text: string;
  order: number;
  dimensionId?: string;
}

export interface TestOption {
  id: string;
  questionId: string;
  text: string;
  value: number;
  dimensionScores: Record<string, number>;
}

export interface TestResult {
  id: string;
  testId: string;
  typeCode: string;
  typeName: string;
  summary: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  relationships: string;
  career: string;
  growth: string;
  minScore: number;
  maxScore: number;
  dimensionRanges?: Record<string, [number, number]>;
}

export interface UserTestSession {
  id: string;
  userId?: string;
  testId: string;
  test?: Test;
  status: 'in_progress' | 'completed';
  answers: Record<string, number>;
  resultId?: string;
  result?: TestResult;
  dimensionScores?: Record<string, number>;
  startedAt: string;
  completedAt?: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  createdAt: string;
}
