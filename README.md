# ESP32 Drone Website - Astro

基于 Astro 构建的 ESP32 无人机教育网站。

## 技术栈

- **框架**: [Astro](https://astro.build)
- **内容**: Markdown + Content Collections
- **样式**: 原生 CSS (极简灰白风格)
- **部署**: Vercel

## 项目结构

```
src/
├── content/           # 内容集合
│   └── tutorials/     # 教程内容
│       ├── en/        # 英文教程
│       └── zh/        # 中文教程
├── layouts/           # 页面布局
├── pages/             # 路由页面
│   ├── index.astro    # 英文首页
│   └── zh/            # 中文页面
└── components/        # 可复用组件

public/                # 静态资源
├── assets/
└── images/
```

## 开发命令

```bash
# 安装依赖
npm install

# 开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 内容管理

教程内容使用 Markdown 文件管理，位于 `src/content/tutorials/`。

### 创建新教程

1. 在 `src/content/tutorials/en/` 或 `zh/` 创建 `.md` 文件
2. 添加 front matter 元数据
3. 使用 Markdown 编写内容

### Front Matter 格式

```yaml
---
title: "教程标题"
description: "教程描述"
level: beginner | intermediate | advanced
order: 1
duration: "2 hours"
prerequisites: ["前置技能"]
draft: false
---
```

## 部署

推送到 GitHub 后，Vercel 自动部署。

```bash
git add -A
git commit -m "更新内容"
git push
```
