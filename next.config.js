/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.apple.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.lge.co.kr',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'gdimg.gmarket.co.kr',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'm.ylshop.co.kr',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'sitem.ssgcdn.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'mall.ourhome.co.kr',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
