/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
  },

  images: {
    domains: [
      'upload.wikimedia.org',
      'drive.google.com'
    ],
  },

  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
        source: '/:path*',
      });
    }
    return headers;
  },
}