// next.config.mjs
const config = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'openweathermap.org',
            }
        ]
    }
};

export default config;
