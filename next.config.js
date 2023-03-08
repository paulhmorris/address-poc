/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: {
    "Content-Security-Policy":
      "frame-ancestors https://address-iframe.onrender.com",
  },
};

module.exports = nextConfig;
