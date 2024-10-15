/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.ketabrah.ir",
      },
    ],
  },
};

export default nextConfig;
