"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Clock, Users, ArrowRight, Star, SlidersHorizontal, X } from "lucide-react";
import { tests, testCategories } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function formatCount(n: number) {
  if (n >= 10000) return `${(n / 10000).toFixed(1)}万`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

function TestsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<"popular" | "newest" | "completions">("popular");

  const filtered = useMemo(() => {
    let result = [...tests];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.shortDescription.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    if (category !== "all") {
      const cat = testCategories.find((c) => c.slug === category);
      if (cat) result = result.filter((t) => t.categoryId === cat.id);
    }

    if (sort === "popular") result.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    if (sort === "completions") result.sort((a, b) => b.completionCount - a.completionCount);
    if (sort === "newest") result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return result;
  }, [search, category, sort]);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold mb-3">探索测试</h1>
          <p className="text-muted-foreground text-lg">
            选择一个测试，开始你的自我探索之旅
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索测试名称或标签…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category tabs + sort */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory("all")}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                  category === "all"
                    ? "bg-primary text-primary-foreground"
                    : "border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                全部
              </button>
              {testCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.slug)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                    category === cat.slug
                      ? "bg-primary text-primary-foreground"
                      : "border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="bg-transparent border border-border/60 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-primary/50"
              >
                <option value="popular">热门优先</option>
                <option value="completions">完成数排序</option>
                <option value="newest">最新添加</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          找到 {filtered.length} 套测试
        </p>

        {/* Tests grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-medium mb-2">没有找到相关测试</h3>
            <p className="text-muted-foreground text-sm">试试其他关键词或清除筛选条件</p>
            <button
              onClick={() => { setSearch(""); setCategory("all"); }}
              className="mt-4 px-4 py-2 rounded-lg border border-border/60 text-sm hover:bg-muted/50 transition-colors"
            >
              清除筛选
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((test, i) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <TestCard test={test} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TestCard({ test }: { test: (typeof tests)[0] }) {
  return (
    <Link href={`/tests/${test.slug}`} className="group block h-full">
      <div className="h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
        {/* Cover */}
        <div className={cn("h-36 bg-gradient-to-br relative overflow-hidden flex-shrink-0", test.coverGradient)}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-end p-5">
            <div>
              {test.isPopular && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-2">
                  <Star className="w-3 h-3 fill-white" /> 热门
                </span>
              )}
              <h3 className="text-white font-bold text-xl leading-tight">{test.title}</h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-2">
            {test.shortDescription}
          </p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {test.estimatedMinutes} 分钟
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> {formatCount(test.completionCount)} 人完成
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {test.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-full text-xs bg-muted/60 text-muted-foreground">
                {tag}
              </span>
            ))}
            <span className="ml-auto flex items-center gap-1 text-primary text-xs font-medium">
              开始 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function TestsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>}>
      <TestsContent />
    </Suspense>
  );
}
