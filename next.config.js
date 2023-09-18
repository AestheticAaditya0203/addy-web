///** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
// /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   images: {
// //     domains: ['apex-strapi-dev.appiness.cc'],
// //   },
// // }
module.exports = {
    // Other configuration options...
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['addy-web.s3.ap-south-1.amazonaws.com'], // Add your domain(s) here
    },
  };
  
  
  