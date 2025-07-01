# 课程作业集成平台

## 功能特性
- ✅ WakaTime编码时长统计
- 📚 课程练习导航系统
- ❓ QAnything问答服务集成

## QAnything集成实现
采用基础路径实现方案：
```javascript
// 通过iframe嵌入现有问答页面
<iframe src="YOUR_QANYTHING_URL" className="w-full h-screen" />
```

## WakaTime配置指南
1. 注册WakaTime账号
2. 获取API Key
3. 创建`.env.local`文件：
```env
NEXT_PUBLIC_WAKATIME_API_KEY=your_api_key_here
```

## 项目结构
```
my-app/
├── app/
│   ├── exercises/      # 课程练习导航
│   ├── qanything/      # 问答服务
│   └── layout.js       # 全局布局
├── components/
│   └── Footer.js       # 页脚统计
```

## 运行指南
```bash
npm install
npm run dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
