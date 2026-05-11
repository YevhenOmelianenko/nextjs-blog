import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `@use "@/styles/_variables.scss" as *;`,
  },
};

export default nextConfig;
