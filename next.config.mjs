import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/introduction',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/:path*.md',
        destination: '/llms.md/:path*',
      },
    ];
  },
};

export default withMDX(config);
