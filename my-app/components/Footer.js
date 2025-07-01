import { useEffect, useState } from 'react';

export default function Footer() {
  const [codingHours, setCodingHours] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://wakatime.com/api/v1/users/current/stats?api_key=${process.env.NEXT_PUBLIC_WAKATIME_API_KEY}`
        );
        const data = await response.json();
        setCodingHours(data.data?.total_seconds ? (data.data.total_seconds / 3600).toFixed(1) : 0);
      } catch (error) {
        console.error('WakaTime API请求失败:', error);
      }
    };

    if (process.env.NEXT_PUBLIC_WAKATIME_API_KEY) {
      fetchData();
    }
  }, []);

  return (
    <footer className="mt-auto p-4 bg-gray-100 text-center">
      {codingHours !== null ? (
        `总编码时长: ${codingHours} 小时`
      ) : (
        <span className="text-red-500">API配置异常，请检查环境变量</span>
      )}
    </footer>
  );
}