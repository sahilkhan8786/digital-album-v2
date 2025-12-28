import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "digital-album.b-cdn.net"
      },
      {
        protocol: 'https',
        hostname: "storage.bunnycdn.com"
      },
    ]
  }
};

export default nextConfig;
