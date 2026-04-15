# Echo — 探索你内心的回响

![Echo](https://img.shields.io/badge/Echo-性格测试平台-7c3aed)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)

Echo 是一个现代、简约、具有轻心理学风格的在线性格测试平台。

---

## 项目特色

- 🎨 **精致视觉** — 深蓝紫渐变、玻璃拟态、柔和动效，支持深色/浅色模式
- 🧪 **多套测试** — 内置16型人格、大五人格、职业倾向等原创测试
- 📊 **深度解读** — 雷达图 + 维度条形图 + 详细文字解析
- 📱 **全响应式** — 完美适配手机、平板、桌面
- ⚡ **沉浸体验** — 单题逐步作答，平滑动画，自动保存进度
- 🔒 **隐私安全** — 游客模式本地存储，可选 Supabase 用户系统
- 🌐 **SEO 就绪** — Open Graph、sitemap、语义化 HTML

---

## 技术栈

| 技术 | 用途 |
|------|------|
| Next.js 16 (App Router) | 全栈框架 |
| React 19 | UI 框架 |
| TypeScript 5 | 类型安全 |
| Tailwind CSS v4 | 样式 |
| Framer Motion | 动画 |
| Recharts | 数据可视化 |
| Supabase | 数据库 + 认证（可选） |
| Vercel | 部署推荐 |

---

## 目录结构

```
echo-app/
├── src/
│   ├── app/
│   │   ├── (main)/          # 带导航栏的页面组
│   │   │   ├── layout.tsx   # 主布局（Navbar + Footer）
│   │   │   ├── page.tsx     # 首页
│   │   │   ├── about/       # 关于页
│   │   │   ├── tests/       # 测试列表 + 详情
│   │   │   └── result/      # 测试结果页
│   │   ├── quiz/            # 作答页（无导航栏，沉浸模式）
│   │   ├── globals.css      # 全局样式
│   │   └── layout.tsx       # 根布局
│   ├── components/
│   │   ├── navbar.tsx       # 顶部导航
│   │   ├── footer.tsx       # 页脚
│   │   ├── theme-provider.tsx
│   │   └── ui/              # 基础 UI 组件
│   └── lib/
│       ├── types.ts         # 全局类型定义
│       ├── data.ts          # 测试数据（题目、选项、结果）
│       ├── utils.ts         # 工具函数
│       └── supabase/        # Supabase 客户端
├── database/
│   ├── schema.sql           # 完整数据库 Schema
│   └── seed.sql             # 初始种子数据
├── public/
├── .env.example
└── README.md
```

---

## 本地运行

### 1. 克隆并安装依赖

```bash
git clone <your-repo>
cd echo-app
npm install
```

### 2. 环境变量（可选，游客模式无需配置）

```bash
cp .env.example .env.local
```

编辑 `.env.local`，填入 Supabase 项目信息（如需用户系统）：

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

---

## 数据库设置（Supabase）

1. 在 [Supabase Dashboard](https://supabase.com) 创建新项目
2. 进入 **SQL Editor**，依次执行：
   - `database/schema.sql` — 创建所有表、索引、RLS 策略
   - `database/seed.sql` — 插入初始分类和测试数据
3. 在项目设置中获取 URL 和 Anon Key，填入 `.env.local`

---

## 部署到 Vercel

```bash
npm install -g vercel
vercel
```

或在 Vercel Dashboard 中导入 GitHub 仓库，设置环境变量后自动部署。

---

## 内置测试

| 测试名称 | 维度 | 题目数 |
|---------|------|--------|
| 16型人格风格测试 | E/I, N/S, T/F, J/P | 30 题 |
| 大五人格测试 | O, C, E, A, N | 25 题 |
| 职业倾向测试 | R, I, A, S, E, C | 28 题 |
| 爱情依恋风格测试 | 安全/焦虑/回避 | 20 题 |
| 压力应对风格测试 | 战斗/逃跑/冻结 | 22 题 |
| 九型人格测试 | 9种类型 | 36 题 |

> ⚠️ 所有测试题目均为原创，不照搬任何受版权保护的官方量表。

---

## 扩展新测试

1. 在 `src/lib/data.ts` 中添加新测试的 `Test` 对象
2. 添加对应的 `TestDimension[]`、`TestQuestion[]` 和 `TestOption[]`
3. 在 `getTestData()` 函数中添加新 case
4. 实现计算逻辑函数（参考 `calculateMbtiResult`）

---

## 免责声明

本平台上的所有测试仅供自我探索和娱乐目的，结果**不构成医学、心理诊断或任何临床建议**。如有心理健康方面的困扰，请寻求专业人士帮助。
