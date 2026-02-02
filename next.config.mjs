import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'cataas.com' }, { hostname: 'picsum.photos' }],
  },
};

export default withMDX(config);
