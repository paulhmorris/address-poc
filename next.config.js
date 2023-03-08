/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors https://address-iframe.onrender.com/",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://address-iframe.onrender.com",
          },
          {
            key: "Vary",
            value: "Origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
