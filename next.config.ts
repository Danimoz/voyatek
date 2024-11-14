import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'q-xx.bstatic.com',
        port: '',
        pathname: '/xdata/**',
      },
    ],
  },
};

export default nextConfig;
