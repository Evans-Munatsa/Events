// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['utfs.io'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'utfs.io',
//         port: ''
//       }
//     ]
//   }
// }


const nextConfig = {
  experimental: {
  serverActions: {
    allowedOrigins: ["localhost:3000"]
    
    },
}
}  

module.exports = nextConfig

