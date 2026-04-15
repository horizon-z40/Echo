"use client";

import { motion } from "framer-motion";
import { tests, testCategories } from "@/lib/data";
import Link from "next/link";
import { BarChart2, Edit2, Eye, Plus, Settings, Users, BookOpen, Activity } from "lucide-react";

export default function AdminPage() {
  const totalTests = tests.length;
  const totalCategories = testCategories.length;
  const totalCompletions = tests.reduce((acc, t) => acc + t.completionCount, 0);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">后台管理</h1>
              <p className="text-muted-foreground">Echo 平台内容管理</p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium border border-amber-500/20">
              管理员模式
            </span>
          </div>
        </motion.div>

        {/* Stats overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "测试总数", value: totalTests, icon: BookOpen, color: "text-violet-500" },
            { label: "测试分类", value: totalCategories, icon: Settings, color: "text-blue-500" },
            { label: "总完成数", value: (totalCompletions / 10000).toFixed(1) + "万", icon: Activity, color: "text-green-500" },
            { label: "注册用户", value: "—", icon: Users, color: "text-pink-500" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className={`mb-3 ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tests management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden mb-6"
        >
          <div className="p-5 border-b border-border/50 flex items-center justify-between">
            <h2 className="font-semibold">测试管理</h2>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
              <Plus className="w-3.5 h-3.5" /> 添加测试
            </button>
          </div>
          <div className="divide-y divide-border/30">
            {tests.map((test) => (
              <div key={test.id} className="flex items-center justify-between p-4 hover:bg-muted/20 transition-colors">
                <div className="flex-1">
                  <div className="font-medium text-sm">{test.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {test.questionCount} 题 · {test.completionCount.toLocaleString()} 次完成
                    {test.isFeatured && <span className="ml-2 text-violet-400">★ 精选</span>}
                    {test.isPopular && <span className="ml-2 text-orange-400">🔥 热门</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/tests/${test.slug}`}
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                  <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                    <BarChart2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Categories management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
        >
          <div className="p-5 border-b border-border/50 flex items-center justify-between">
            <h2 className="font-semibold">分类管理</h2>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
              <Plus className="w-3.5 h-3.5" /> 添加分类
            </button>
          </div>
          <div className="divide-y divide-border/30">
            {testCategories.map((cat) => {
              const count = tests.filter((t) => t.categoryId === cat.id).length;
              return (
                <div key={cat.id} className="flex items-center justify-between p-4 hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{cat.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{cat.name}</div>
                      <div className="text-xs text-muted-foreground">{count} 套测试</div>
                    </div>
                  </div>
                  <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-6 p-4 rounded-xl bg-muted/30 border border-border/30 text-xs text-muted-foreground">
          💡 完整的后台管理功能（题目编辑、评分规则、结果文案管理）需要配置 Supabase 数据库后启用。详见 README.md。
        </div>
      </div>
    </div>
  );
}
