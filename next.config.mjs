/**
 * Next.js configuration for the CeremonyVerse website.
 *
 * This configuration re-enables TypeScript and ESLint error checking,
 * enables Next.js' built-in image optimization, and defines a list of
 * allowed external image domains. Removing the `unoptimized` flag
 * improves Core Web Vitals (LCP) by serving responsive images.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'cdn.ceremonyverse.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://ceremonyverse.com",
  },
};

export default nextConfig;

