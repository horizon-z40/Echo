"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import Link from "next/link";
import { Clock, BarChart2, ArrowRight, Trash2, BookOpen } from "lucide-react";
import { tests } from "@/lib/data";

interface StoredResult {
  testId: string;
  testSlug: string;
  testTitle: string;
  resultCode: string;
  dimensionScores: Record<string, number>;
  completedAt: string;
  sessionId: string;
}

export default function ProfilePage() {
  const [history, setHistory] = useState<StoredResult[]>([]);

  useEffect(() => {
    const results: StoredResult[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("echo-result-")) {
        try {
          const data = JSON.parse(localStorage.getItem(key) || "");
          results.push({ ...data, sessionId: key.replace("echo-result-", "") });
        } catch {}
      }
    }
    results.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());
    setHistory(results);
  }, []);

  const handleDelete = (sessionId: string) => {
    localStorage.removeItem(`echo-result-${sessionId}`);
    setHistory((h) => h.filter((r) => r.sessionId !== sessionId));
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">我的测试记录</h1>
          <p className="text-muted-foreground">你做过的所有测试，都保存在这里</p>
        </motion.div>

        {history.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 rounded-2xl border border-border/50 bg-card/50"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-medium mb-2">还没有测试记录</h3>
            <p className="text-muted-foreground text-sm mb-6">完成一个测试，结果会自动保存在这里</p>
            <Link
              href="/tests"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:opacity-90 transition-all"
            >
              探索测试 <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {history.map((record, i) => {
              const test = tests.find((t) => t.id === record.testId);
              return (
                <motion.div
                  key={record.sessionId}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{record.testTitle}</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                          {record.resultCode}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {formatDistanceToNow(new Date(record.completedAt), {
                            addSuffix: true,
                            locale: zhCN,
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/result/${record.sessionId}`}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 text-xs hover:bg-muted/50 transition-colors"
                      >
                        <BarChart2 className="w-3.5 h-3.5" /> 查看结果
                      </Link>
                      <button
                        onClick={() => handleDelete(record.sessionId)}
                        className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <div className="text-center pt-4">
              <Link
                href="/tests"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <BookOpen className="w-4 h-4" /> 探索更多测试
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
