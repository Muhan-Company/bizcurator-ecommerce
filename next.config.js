/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-ebnatural.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
