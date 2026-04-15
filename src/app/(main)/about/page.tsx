"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold">关于 Echo</h1>
          </div>
        </motion.div>

        <div className="space-y-8">
          {[
            {
              title: "我们是谁",
              content: "Echo 是一个专注于自我认知的在线性格测试平台。我们相信，了解自己是一切关系、选择和成长的起点。\n\nEcho 这个名字来自「回声」。你向世界发出的声音，会在内心深处产生回响。我们希望这个平台能成为你聆听内心的一面镜子。",
            },
            {
              title: "我们的理念",
              content: "我们不相信用一个标签定义一个人。性格测试是探索的工具，不是结论。每一个测试结果，都应该让你感到被理解，而不是被框住。\n\nEcho 的所有内容都力求温和、准确、有洞察力。我们希望你读完结果后的感受是：'对，就是这样。'而不是：'好吧，也许差不多。'",
            },
            {
              title: "关于测试设计",
              content: "Echo 平台上的所有测试题目均为原创设计，基于相关心理学理论框架，但不照搬任何受版权保护的官方量表。我们的目标是在保持心理学严谨性的同时，让测试体验更加自然和有趣。",
            },
            {
              title: "重要声明",
              content: "Echo 上的所有测试仅供自我探索和娱乐用途，不构成医学、心理诊断或任何临床建议。如果你正在经历心理困扰，请寻求专业心理咨询师或医疗专业人员的帮助。",
              highlight: true,
            },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border p-6 ${
                section.highlight
                  ? "border-amber-500/30 bg-amber-500/5"
                  : "border-border/50 bg-card/50 backdrop-blur-sm"
              }`}
            >
              <h2 className="text-lg font-semibold mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/tests"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition-all shadow-xl shadow-violet-500/20"
          >
            开始探索 <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
