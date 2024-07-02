/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/personal-site',
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
