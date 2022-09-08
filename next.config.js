/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        emotions: true,
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination:
                    'https://here-your-duckdam-mc4mu29lp-duckdam-trio.vercel.app/:path*',
            },
        ];
    },
};

module.exports = nextConfig;
