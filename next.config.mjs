/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [   
            {
            protocol: 'https',
            hostname: 'i.giphy.com',
            port: ''
            }
        ]
    }
};

export default nextConfig;
