"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { mbtiResults, mbtiDimensions, sbtiResults, tests, temperamentResults, temperamentDimensions, introversionResults, introversionDimensions, loveStyleResults, loveStyleDimensions, communicationResults, conflictResults, empathyResults, teamworkResults, leadershipResults, decisionResults, executionResults, emotionSensitivityResults, resilienceResults, securityResults, socialEnergyResults, boundaryResults, pleasingResults, hiddenPersonalityResults, animalPersonalityResults, loveBrainResults, friendTypeResults, groupRoleResults, expressionResults, trustResults, attachmentResults, stressResults, emotionRecoveryResults } from "@/lib/data";
import { TestResult, TestDimension } from "@/lib/types";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Share2, RefreshCw, ArrowRight, ChevronDown, ChevronUp, Home } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ResultData {
  testId: string;
  testSlug: string;
  testTitle: string;
  answers: Record<string, string>;
  resultCode: string;
  dimensionScores: Record<string, number>;
  completedAt: string;
}

function DimensionBar({ label, score, color, minLabel, maxLabel }: {
  label: string;
  score: number;
  color: string;
  minLabel: string;
  maxLabel: string;
}) {
  // Normalize score to 0-100. MBTI: ~8 questions × ±2 pts = ±16 max
  const MAX = 16;
  const normalized = Math.max(0, Math.min(100, ((score + MAX) / (MAX * 2)) * 100));
  const isPositive = score >= 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground text-xs">
          {isPositive ? maxLabel : minLabel}
        </span>
      </div>
      <div className="relative h-3 bg-muted/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${normalized}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

export default function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const sessionId = params.sessionId as string;

  const [resultData, setResultData] = useState<ResultData | null>(null);
  const [result, setResult] = useState<TestResult | null>(null);
  const [dimensions, setDimensions] = useState<TestDimension[]>([]);
  const [expandedSection, setExpandedSection] = useState<string | null>("overview");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`echo-result-${sessionId}`);
    if (!stored) {
      router.push("/tests");
      return;
    }
    const data: ResultData = JSON.parse(stored);
    setResultData(data);

    if (data.testId === "test-mbti") {
      const r = mbtiResults.find((r) => r.typeCode === data.resultCode);
      setResult(r || mbtiResults[0]);
      setDimensions(mbtiDimensions);
    } else if (data.testId === "test-sbti") {
      const r = sbtiResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || mbtiResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-temperament") {
      const r = temperamentResults.find((r) => r.typeCode === data.resultCode);
      setResult(r || temperamentResults[0]);
      setDimensions(temperamentDimensions);
    } else if (data.testId === "test-introversion") {
      const r = introversionResults.find((r) => r.typeCode === data.resultCode);
      setResult(r || introversionResults[0]);
      setDimensions(introversionDimensions);
    } else if (data.testId === "test-love-style") {
      const r = loveStyleResults.find((r) => r.typeCode === data.resultCode);
      setResult(r || loveStyleResults[0]);
      setDimensions(loveStyleDimensions);
    } else if (data.testId === "test-communication") {
      const r = communicationResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || communicationResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-conflict") {
      const r = conflictResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || conflictResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-empathy") {
      const r = empathyResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || empathyResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-teamwork") {
      const r = teamworkResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || teamworkResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-leadership") {
      const r = leadershipResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || leadershipResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-decision") {
      const r = decisionResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || decisionResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-execution") {
      const r = executionResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || executionResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-emotion-sensitivity") {
      const r = emotionSensitivityResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || emotionSensitivityResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-resilience") {
      const r = resilienceResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || resilienceResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-security") {
      const r = securityResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || securityResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-social-energy") {
      const r = socialEnergyResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || socialEnergyResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-boundary") {
      const r = boundaryResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || boundaryResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-pleasing") {
      const r = pleasingResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || pleasingResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-hidden-personality") {
      const r = hiddenPersonalityResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || hiddenPersonalityResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-animal-personality") {
      const r = animalPersonalityResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || animalPersonalityResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-love-brain") {
      const r = loveBrainResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || loveBrainResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-friend-type") {
      const r = friendTypeResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || friendTypeResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-group-role") {
      const r = groupRoleResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || groupRoleResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-expression") {
      const r = expressionResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || expressionResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-trust") {
      const r = trustResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || trustResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-attachment") {
      const r = attachmentResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || attachmentResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-stress") {
      const r = stressResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || stressResults[0]);
      setDimensions([]);
    } else if (data.testId === "test-emotion-recovery") {
      const r = emotionRecoveryResults.find((r) => r.typeCode === data.resultCode);
      setResult(r as unknown as import("@/lib/types").TestResult || emotionRecoveryResults[0]);
      setDimensions([]);
    } else {
      // Fallback - 创建一个通用结果
      setResult({
        id: `${data.testId}-result`,
        testId: data.testId,
        typeCode: data.resultCode,
        typeName: data.resultCode,
        summary: '测试完成',
        description: '感谢完成测试！',
        strengths: [],
        weaknesses: [],
        relationships: '',
        career: '',
        growth: '',
        minScore: 0,
        maxScore: 100,
      });
      setDimensions([]);
    }
  }, [sessionId, router]);

  const handleShare = async () => {
    const text = `我在 Echo 完成了"${resultData?.testTitle}"，结果是：${result?.typeName}（${result?.typeCode}）\n\n${result?.summary}\n\n探索你自己的类型：`;
    if (navigator.share) {
      await navigator.share({ title: "我的 Echo 性格测试结果", text });
    } else {
      await navigator.clipboard.writeText(text + window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!resultData || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const radarData = dimensions.map((dim) => {
    const score = resultData.dimensionScores[dim.id] || 0;
    const MAX = 16;
    const normalized = Math.max(0, Math.min(100, ((score + MAX) / (MAX * 2)) * 100));
    return {
      subject: dim.name,
      value: Math.round(normalized),
      fullMark: 100,
    };
  });

  const sections = [
    { id: "overview", label: "性格概述", content: result.description },
    { id: "strengths", label: "优势", content: result.strengths, isList: true },
    { id: "weaknesses", label: "潜在弱点", content: result.weaknesses, isList: true },
    { id: "relationships", label: "关系模式", content: result.relationships },
    { id: "career", label: "职业建议", content: result.career },
    { id: "growth", label: "成长建议", content: result.growth },
  ];

  const test = tests.find((t) => t.id === resultData.testId);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Result Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-indigo-900/80 to-purple-900/70" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 pt-28 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm">
              {resultData.testTitle} · 测试完成
            </div>

            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-8xl sm:text-9xl font-black text-white/10 select-none absolute left-1/2 -translate-x-1/2 -top-4 pointer-events-none"
              >
                {result.typeCode}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl sm:text-7xl font-bold text-white tracking-tight relative z-10"
              >
                {result.typeCode}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl font-semibold text-white/80 mt-2"
              >
                {result.typeName}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              {result.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-8"
            >
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium transition-all"
              >
                <Share2 className="w-4 h-4" />
                {copied ? "已复制链接" : "分享结果"}
              </button>
              <Link
                href={`/quiz/${resultData.testSlug}`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                再测一次
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Dimension Chart */}
        {radarData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
          >
            <h2 className="text-lg font-semibold mb-6">维度分析</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Radar Chart */}
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    />
                    <Radar
                      name="你的得分"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.2}
                      dot={{ fill: "hsl(var(--primary))", r: 3 }}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Dimension bars */}
              <div className="space-y-4">
                {dimensions.map((dim) => (
                  <DimensionBar
                    key={dim.id}
                    label={dim.name}
                    score={resultData.dimensionScores[dim.id] || 0}
                    color={dim.color}
                    minLabel={dim.minLabel}
                    maxLabel={dim.maxLabel}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Accordion sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <h2 className="text-lg font-semibold">深度解读</h2>

          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full flex items-center justify-between p-5 hover:bg-muted/20 transition-colors"
              >
                <span className="font-medium">{section.label}</span>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>

              {expandedSection === section.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-5 pb-5 border-t border-border/30"
                >
                  <div className="pt-4">
                    {Array.isArray(section.content) ? (
                      <ul className="space-y-2">
                        {section.content.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6"
        >
          <h2 className="text-lg font-semibold mb-4">接下来，你可以…</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/tests", icon: "🧭", label: "探索更多测试", desc: "尝试其他维度的自我探索" },
              { href: `/quiz/${resultData.testSlug}`, icon: "🔄", label: "重新测试", desc: "用不同心态再试一次" },
              { href: "/tests/big-five", icon: "🌊", label: "大五人格测试", desc: "用科学维度了解自己" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-muted/20 transition-all"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border/60 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            <Home className="w-4 h-4" /> 返回首页
          </Link>
          <Link
            href="/tests"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium hover:opacity-90 transition-all shadow-md shadow-violet-500/20"
          >
            探索更多测试 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
