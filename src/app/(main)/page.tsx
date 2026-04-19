"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Clock, Users, ChevronRight, Star, Sparkles, Brain, Heart, Briefcase, Waves, Shuffle } from "lucide-react";
import { tests, testCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

function formatCount(n: number) {
  if (n >= 10000) return `${(n / 10000).toFixed(1)}万`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

const categoryIcons: Record<string, React.ElementType> = {
  "cat-1": Brain,
  "cat-2": Heart,
  "cat-3": Briefcase,
  "cat-4": Waves,
  "cat-5": Users,
  "cat-6": Sparkles,
};

const testimonials = [
  {
    name: "小竹",
    avatar: "小",
    text: "做完 MBTI 测试后看到结果页，突然觉得自己被理解了。那种感觉很奇妙，像是有人一直在旁边观察自己，然后帮你把那些说不清楚的感受都说出来了。",
    type: "INFJ",
  },
  {
    name: "林远",
    avatar: "林",
    text: "职业倾向测试结果让我重新审视了自己一直以来的职业选择。不是说要改行，而是让我更清楚地知道，我真正享受的是工作中的哪些部分。",
    type: "ENTP",
  },
  {
    name: "苏晴",
    avatar: "苏",
    text: "大五人格的图表做得真好看，每个维度都有很详细的解读，不是那种机械的总结，读起来很自然，像是一个懂你的朋友在说话。",
    type: "ISFP",
  },
];

const features = [
  {
    icon: "🔬",
    title: "科学设计",
    desc: "基于心理学理论原创题目，结构清晰，测量维度独立",
  },
  {
    icon: "✨",
    title: "深度解读",
    desc: "不只是标签，每个结果都有温暖、准确、有洞察力的详细解析",
  },
  {
    icon: "🔒",
    title: "隐私保护",
    desc: "你的答案只属于你，我们不会将数据用于任何商业目的",
  },
  {
    icon: "📱",
    title: "流畅体验",
    desc: "沉浸式作答流程，支持手机、平板和桌面，随时随地探索",
  },
];

export default function HomePage() {
  const router = useRouter();
  const featuredTests = tests.filter((t) => t.isFeatured);
  const popularTests = tests.filter((t) => t.isPopular);

  const handleRandomExplore = () => {
    const randomTest = tests[Math.floor(Math.random() * tests.length)];
    router.push(`/tests/${randomTest.slug}`);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600/8 blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center px-4 pt-20">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-violet-500/30 bg-violet-500/10 text-violet-400">
              <Sparkles className="w-3.5 h-3.5" />
              现在已有 {tests.length} 套测试可供探索
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            <span className="gradient-text">听见</span>
            <br />
            <span className="text-foreground">内心深处的回声</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Echo 是一个关于自我认知的地方。不评判，不说教，只是帮你更清楚地看见那个已经存在的自己。
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/tests"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
            >
              开始测试
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={handleRandomExplore}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm text-foreground font-medium text-lg hover:bg-card/80 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <Shuffle className="w-5 h-5" />
              随机探索
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto"
          >
            {[
              { label: "可用测试", value: String(tests.length) },
              { label: "完成次数", value: formatCount(tests.reduce((sum, t) => sum + t.completionCount, 0)) + "+" },
              { label: "测试维度", value: "20+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <div className="w-5 h-8 rounded-full border-2 border-border/50 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">探索测试分类</h2>
            <p className="text-muted-foreground">选择你感兴趣的方向，开始自我探索之旅</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {testCategories.map((cat, i) => {
              const Icon = categoryIcons[cat.id] || Brain;
              const testCount = tests.filter((t) => t.categoryId === cat.id).length;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/tests?category=${cat.slug}`}
                    className="group flex flex-col items-center p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    <div className={cn("w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300", cat.color)}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{testCount} 套测试</p>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tests */}
      <section id="featured" className="py-20 px-4 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-2">热门测试</h2>
              <p className="text-muted-foreground">最多人选择的探索起点</p>
            </div>
            <Link
              href="/tests"
              className="hidden sm:flex items-center gap-1 text-sm text-primary hover:underline"
            >
              查看全部 <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTests.map((test, i) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TestCard test={test} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Echo */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">为什么选择 Echo</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              我们相信自我认知是一种旅程，不是答案。Echo 是你在这趟旅程中的同伴。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feat.icon}</div>
                <h3 className="font-semibold mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">他们的感受</h2>
            <p className="text-muted-foreground">来自真实用户的分享</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-primary">{t.type}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-violet-600/20 via-indigo-600/15 to-cyan-600/10 border border-violet-500/20 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                准备好开始了吗？
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                你的内心一直都在说话。<br />也许，现在是听一听的好时机。
              </p>
              <Link
                href="/tests"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-xl shadow-violet-500/30 hover:-translate-y-0.5"
              >
                立即开始测试
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function TestCard({ test }: { test: (typeof tests)[0] }) {
  const category = testCategories.find((c) => c.id === test.categoryId);
  return (
    <Link href={`/tests/${test.slug}`} className="group block">
      <div className="h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
        {/* Cover */}
        <div className={cn("h-32 bg-gradient-to-br relative overflow-hidden", test.coverGradient)}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
            <div>
              {test.isPopular && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-2">
                  <Star className="w-3 h-3 fill-white" /> 热门
                </span>
              )}
              <h3 className="text-white font-bold text-lg leading-tight">{test.title}</h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {test.shortDescription}
          </p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {test.estimatedMinutes} 分钟
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" /> {formatCount(test.completionCount)} 人完成
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {test.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-xs bg-muted/60 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            <span className="ml-auto text-primary text-xs font-medium group-hover:gap-1 flex items-center gap-0.5 transition-all">
              开始 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
