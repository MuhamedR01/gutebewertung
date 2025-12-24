import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export the app as static HTML
  output: "export",
  // Disable next/image optimization so images work with static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
