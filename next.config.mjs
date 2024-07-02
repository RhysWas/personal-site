/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/personal-site',
    output: 'export',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
};

export default nextConfig;
