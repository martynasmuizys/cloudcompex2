import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://statcdn.fandango.com/**")]
    }
  /* config options here */
};

export default nextConfig;
