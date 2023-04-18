/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'scontent-ams2-1.cdninstagram.com',
            },
        ],
    },
};

module.exports = nextConfig;
