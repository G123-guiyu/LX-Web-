import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <nav className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex justify-between">
            <a href="/" className="text-xl font-bold">课程作业平台</a>
            <div className="space-x-6">
              <a href="/exercises" className="hover:text-blue-200">课程练习</a>
              <a href="/qanything" className="hover:text-blue-200">Q&A</a>
            </div>
          </div>
        </nav>
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}