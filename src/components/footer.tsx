import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Echo</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Echo 是一个现代的在线性格测试平台，帮助你通过科学的心理测试深入了解自我，探索内心的回声。
            </p>
            <p className="text-xs text-muted-foreground/60 mt-4">
              ⚠️ 本平台测试仅供自我探索，不作医学或临床诊断依据。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">探索</h3>
            <ul className="space-y-2">
              {[
                { href: "/tests", label: "所有测试" },
                { href: "/tests?category=personality", label: "人格类型" },
                { href: "/tests?category=relationship", label: "情感关系" },
                { href: "/tests?category=career", label: "职业发展" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">关于</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "关于 Echo" },
                { href: "/privacy", label: "隐私政策" },
                { href: "/terms", label: "使用条款" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Echo. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> for self-discovery
          </p>
        </div>
      </div>
    </footer>
  );
}
