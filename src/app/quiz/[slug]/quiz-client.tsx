"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { tests, mbtiQuestions, mbtiOptions, bigFiveQuestions, bigFiveOptionsTemplate, calculateMbtiResult, sbtiQuestions, calculateSbtiResult } from "@/lib/data";
import { TestQuestion, TestOption } from "@/lib/types";
import { cn } from "@/lib/utils";

interface QuizClientProps {
  slug: string;
}

function getTestQuestions(testId: string): TestQuestion[] {
  if (testId === "test-mbti") return mbtiQuestions;
  if (testId === "test-bigfive") return bigFiveQuestions;
  if (testId === "test-sbti") {
    return sbtiQuestions.map(q => ({ id: q.id, testId: q.testId, text: q.text, order: q.order }));
  }
  return [];
}

function getOptions(testId: string, questionId: string): TestOption[] {
  if (testId === "test-mbti") {
    return mbtiOptions[questionId] || [];
  }
  if (testId === "test-bigfive") {
    return bigFiveOptionsTemplate.map((o, i) => ({
      ...o,
      id: `${questionId}-${i + 1}`,
      questionId,
    }));
  }
  if (testId === "test-sbti") {
    const q = sbtiQuestions.find(q => q.id === questionId);
    if (!q) return [];
    return q.options.map(o => ({ id: o.id, questionId, text: o.text, value: 0, dimensionScores: o.scores as unknown as Record<string, number> }));
  }
  return [];
}

export function QuizClient({ slug }: QuizClientProps) {
  const router = useRouter();
  const test = tests.find((t) => t.slug === slug);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [showExit, setShowExit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Keep a ref of currentIndex for use inside setTimeout (avoids stale closure)
  const currentIndexRef = useRef(currentIndex);
  useEffect(() => { currentIndexRef.current = currentIndex; }, [currentIndex]);

  // Track pending auto-advance timer so we can cancel it on fast clicks
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const questions = test ? getTestQuestions(test.id) : [];
  const progress = ((currentIndex) / questions.length) * 100;
  const currentQuestion = questions[currentIndex];
  const options = test && currentQuestion ? getOptions(test.id, currentQuestion.id) : [];

  // Auto-save to localStorage
  useEffect(() => {
    if (!test) return;
    const key = `echo-quiz-${test.id}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        const { answers: savedAnswers, index } = JSON.parse(saved);
        setAnswers(savedAnswers);
        setCurrentIndex(Math.min(index, questions.length - 1));
      } catch {}
    }
  }, [test, questions.length]);

  useEffect(() => {
    if (!test) return;
    const key = `echo-quiz-${test.id}`;
    localStorage.setItem(key, JSON.stringify({ answers, index: currentIndex }));
  }, [answers, currentIndex, test]);

  const handleSelect = (optionId: string) => {
    if (!currentQuestion) return;

    // Record the answer using functional update (always has latest state)
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));

    // Cancel any pending auto-advance from a previous click
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }

    // Auto-advance using ref so we always read the latest index
    autoAdvanceTimer.current = setTimeout(() => {
      const idx = currentIndexRef.current;
      if (idx < questions.length - 1) {
        setDirection("forward");
        setCurrentIndex(idx + 1);
      }
      autoAdvanceTimer.current = null;
    }, 350);
  };

  const handlePrev = () => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }
    if (currentIndex > 0) {
      setDirection("backward");
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleNext = () => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }
    if (currentIndex < questions.length - 1) {
      setDirection("forward");
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleSubmit = async () => {
    if (!test) return;
    setIsSubmitting(true);

    // Calculate result
    let resultCode = "INTJ";
    let dimensionScores = {};

    if (test.id === "test-mbti") {
      const calc = calculateMbtiResult(answers);
      resultCode = calc.typeCode;
      dimensionScores = calc.dimensionScores;
    } else if (test.id === "test-sbti") {
      const calc = calculateSbtiResult(answers);
      resultCode = calc.typeCode;
      dimensionScores = calc.dimensionScores;
    }

    // Save result to localStorage
    const resultData = {
      testId: test.id,
      testSlug: test.slug,
      testTitle: test.title,
      answers,
      resultCode,
      dimensionScores,
      completedAt: new Date().toISOString(),
    };
    const sessionId = `${test.id}-${Date.now()}`;
    localStorage.setItem(`echo-result-${sessionId}`, JSON.stringify(resultData));

    // Clear quiz progress
    localStorage.removeItem(`echo-quiz-${test.id}`);

    router.push(`/result/${sessionId}`);
  };

  if (!test) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">测试未找到</p>
      </div>
    );
  }

  const answeredCount = Object.keys(answers).length;
  const isLastQuestion = currentIndex === questions.length - 1;
  // Allow submit when on last question and it has been answered
  // (some earlier questions may have been skipped by fast clicking, that's OK)
  const lastQuestionAnswered = currentQuestion ? !!answers[currentQuestion.id] : false;
  const canSubmit = isLastQuestion && lastQuestionAnswered;
  const currentAnswered = currentQuestion ? !!answers[currentQuestion.id] : false;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 glass-strong border-b border-border/50">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setShowExit(true)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" /> 退出测试
            </button>
            <span className="text-sm font-medium text-muted-foreground">
              {currentIndex + 1} / {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {test.title}
            </span>
          </div>
          {/* Progress bar */}
          <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center pt-28 pb-24 px-4">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction === "forward" ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === "forward" ? -40 : 40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Question number badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  问题 {currentIndex + 1}
                </span>
              </div>

              {/* Question text */}
              <h2 className="text-xl sm:text-2xl font-semibold leading-relaxed mb-8 text-foreground">
                {currentQuestion?.text}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {options.map((option, i) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleSelect(option.id)}
                    className={cn(
                      "w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 group",
                      answers[currentQuestion?.id || ""] === option.id
                        ? "border-primary bg-primary/10 shadow-md shadow-primary/10"
                        : "border-border/50 bg-card/50 hover:border-primary/40 hover:bg-card/80"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
                          answers[currentQuestion?.id || ""] === option.id
                            ? "border-primary bg-primary"
                            : "border-border/60 group-hover:border-primary/60"
                        )}
                      >
                        {answers[currentQuestion?.id || ""] === option.id && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed">{option.text}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 glass-strong border-t border-border/50">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border/60 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-muted/50 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> 上一题
          </button>

          <span className="text-xs text-muted-foreground">
            已完成 {answeredCount} / {questions.length}
          </span>

          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              disabled={!canSubmit || isSubmitting}
              className={cn(
                "flex items-center gap-1.5 px-6 py-2.5 rounded-xl font-medium text-sm transition-all",
                canSubmit
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 shadow-md shadow-violet-500/20"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              )}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  计算中…
                </>
              ) : (
                <>查看结果 <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!currentAnswered && currentIndex < questions.length - 1}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border/60 text-sm font-medium disabled:opacity-40 hover:bg-muted/50 transition-all"
            >
              下一题 <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Exit confirmation modal */}
      <AnimatePresence>
        {showExit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm p-6 rounded-2xl border border-border/50 bg-card shadow-2xl"
            >
              <h3 className="text-lg font-semibold mb-2">确定要退出吗？</h3>
              <p className="text-sm text-muted-foreground mb-6">
                你的答题进度已自动保存，下次可继续作答。
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowExit(false)}
                  className="flex-1 py-2.5 rounded-xl border border-border/60 text-sm font-medium hover:bg-muted/50 transition-colors"
                >
                  继续测试
                </button>
                <button
                  onClick={() => router.push(`/tests/${slug}`)}
                  className="flex-1 py-2.5 rounded-xl bg-muted text-sm font-medium hover:bg-muted/80 transition-colors"
                >
                  退出
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
