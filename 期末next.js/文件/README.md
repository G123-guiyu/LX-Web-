# LX-Web 学习项目

## 功能特性

🟢 QAnything问答集成  
🕒 WakaTime编码时长统计  
📚 课程练习导航系统

## 运行截图
| QAnything界面 | 编码统计 | 练习导航 |
|--------------|---------|---------|
| ![QAnything](qanything-preview.png) | ![WakaTime](wakatime-preview.png) | ![Exercises](exercises-preview.png) |

## 项目结构
```
web-app/
├── src/app/
│   ├── qanything/      # 智能问答页面
│   ├── exercises/     # 课程练习导航系统
│   └── layout.js      # 全局布局配置
└── public/exercises/  # 课程练习HTML文件
```

## 快速开始
```bash
npm install
npm run dev
```
访问 http://localhost:3000 查看功能

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
