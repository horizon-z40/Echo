"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Users, ChevronLeft, AlertCircle, CheckCircle2 } from "lucide-react";
import { Test, TestCategory, TestDimension } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TestDetailClientProps {
  test: Test;
  category: TestCategory | undefined;
  dimensions: TestDimension[];
}

function formatCount(n: number) {
  if (n >= 10000) return `${(n / 10000).toFixed(1)}万`;
  return n.toLocaleString();
}

export function TestDetailClient({ test, category, dimensions }: TestDetailClientProps) {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero gradient */}
      <div className={cn("relative py-16 px-4 bg-gradient-to-br overflow-hidden", test.coverGradient)}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/tests"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> 返回测试列表
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {category && (
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-4">
                {category.icon} {category.name}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {test.title}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              {test.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-white/70 text-sm">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 约 {test.estimatedMinutes} 分钟
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" /> {formatCount(test.completionCount)} 人完成
              </span>
              <span className="flex items-center gap-1.5">
                📝 {test.questionCount} 道题目
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
            >
              <h2 className="text-lg font-semibold mb-4">测试介绍</h2>
              <p className="text-muted-foreground leading-relaxed">{test.description}</p>
            </motion.section>

            {/* Dimensions */}
            {dimensions.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
              >
                <h2 className="text-lg font-semibold mb-4">测试维度</h2>
                <div className="space-y-4">
                  {dimensions.map((dim) => (
                    <div key={dim.id} className="flex items-start gap-3">
                      <div
                        className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                        style={{ backgroundColor: dim.color }}
                      />
                      <div>
                        <div className="font-medium text-sm">{dim.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {dim.description} · {dim.minLabel} ↔ {dim.maxLabel}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Notice */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div className="text-sm leading-relaxed">
                <strong>温馨提示：</strong>本测试仅供自我探索和娱乐，结果不作医学、心理诊断或任何临床判断的依据。如有心理困扰，请寻求专业人士的帮助。
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
            >
              <h2 className="text-base font-semibold mb-4">测试信息</h2>
              <div className="space-y-3 text-sm">
                {[
                  { label: "题目数量", value: `${test.questionCount} 题` },
                  { label: "预计时长", value: `${test.estimatedMinutes} 分钟` },
                  { label: "测试维度", value: `${dimensions.length} 个维度` },
                  { label: "完成人数", value: formatCount(test.completionCount) },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                {test.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block mr-2 px-2.5 py-0.5 rounded-full text-xs bg-muted/60 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Suitable for */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
            >
              <h2 className="text-base font-semibold mb-4">适合人群</h2>
              <ul className="space-y-2">
                {[
                  "对自我认知感兴趣的人",
                  "希望了解自己行为模式的人",
                  "在人际关系或职业上感到困惑的人",
                  "任何想更了解自己的人",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Link
                href={`/quiz/${test.slug}`}
                className="group flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-xl shadow-violet-500/20 hover:-translate-y-0.5"
              >
                开始测试
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-xs text-muted-foreground text-center mt-3">
                无需注册，立即开始
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
