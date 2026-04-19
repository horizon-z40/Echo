# Echo App 启动指南

## 项目概述
Echo App 是一个基于 Next.js 16 的全栈应用，使用 Supabase 作为后端服务（数据库和认证）。前端采用 React 19、Tailwind CSS 4 和 Framer Motion 构建。

## 快速启动

### 步骤 1：配置环境变量

复制环境变量模板并根据你的 Supabase 项目配置：

```bash
cp .env.example .env
```

编辑 `.env` 文件，填入你的 Supabase 凭证：
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase 项目 URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase 匿名密钥
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase 服务角色密钥

### 步骤 2：安装依赖

```bash
npm install
```

### 步骤 3：启动开发服务器

```bash
npm run dev
```

**启动后访问**：http://localhost:3000

```yaml
subProjectPath: .
command: npm run dev
cwd: .
port: 3000
previewUrl: http://localhost:3000
description: Next.js 开发服务器，热重载模式
```

## 生产环境部署

```bash
npm run build
npm start
```

## 数据库初始化

项目包含数据库初始化脚本：
- `database/schema.sql` - 数据库表结构
- `database/seed.sql` - 初始数据

请在 Supabase 控制台的 SQL 编辑器中执行这些脚本。

## 技术栈

- **前端框架**：Next.js 16 + React 19
- **样式**：Tailwind CSS 4
- **动画**：Framer Motion
- **图表**：Recharts
- **后端服务**：Supabase（数据库 + 认证）
