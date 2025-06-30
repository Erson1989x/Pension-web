/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set the base URL for metadata
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://pensiuneavilcan.ro',
  },
  reactStrictMode: true,
  swcMinify: true,
  // Disable server-side rendering completely to prevent window errors
  output: 'export',
  // This disables SSR entirely and builds a fully static site
  // Note: This means all pages will be pre-rendered at build time
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
