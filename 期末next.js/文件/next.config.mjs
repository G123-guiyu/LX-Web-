const wakatimeConfig = {
  env: {
    WAKATIME_API_KEY: process.env.WAKATIME_API_KEY
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ai.youdao.com'],
  },
  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: `frame-ancestors 'self' https://ai.youdao.com;`
        }
      ],
    },
  ],
};

export default {
  ...nextConfig,
  server: {
    port: 3000
  }
};
