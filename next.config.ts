import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "", // <----- THIS IS THE ISSUE
  },
};

export default nextConfig;
