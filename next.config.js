/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true,
        serverActions: true,
    },
    transpilePackages: ['@riziu-template/basic']
}

module.exports = nextConfig
