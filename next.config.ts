import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {},
  devServer: {
    allowedDevOrigins: [
      'https://6000-firebase-studio-1758413954783.cluster-lr6dwlc2lzbcctqhqorax5zmro.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
