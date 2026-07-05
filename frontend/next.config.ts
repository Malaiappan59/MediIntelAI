import type { NextConfig } from "next";

//const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://127.0.0.1:8000";

const nextConfig: NextConfig = {
  //output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/backend/:path*",
        destination: "http://127.0.0.1:8000/api/:path*", // proxied to local backend
      },
    ];
  },
  async redirects() {
    return [
      { source: "/", destination: "/login", permanent: false },
    ];
  },
};

export default nextConfig;




