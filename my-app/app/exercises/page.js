const exercises = [
  { id: 'week1', name: '第一次作业', path: '/exercises/week1' },
  // 添加更多练习...
]

import Link from 'next/link';

export default function Exercises() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">课程练习导航</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/exercises/week1" className="p-4 bg-white rounded shadow hover:bg-gray-50">
          第一次作业
        </Link>
      </div>
    </div>
  )
}