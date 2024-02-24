/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'links.papareact.com',
          },
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
          },
          {
            protocol: 'https',
            hostname: 'i5.walmartimages.com',
          },
          {
            protocol: 'http',
            hostname: 'tinyurl.com',
          },
        ],
    },
};

export default nextConfig;
