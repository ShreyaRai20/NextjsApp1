// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
 distDir: 'dist',
 basePath: '/nextjsapp1', // 🔁 this must match your GitHub repo name
  images: {
    unoptimized: true,
  },
}
 
module.exports = nextConfig