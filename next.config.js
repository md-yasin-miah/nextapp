/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  images: {
    //for all domains
    domains: ['th.bing.com', '*'],
  },
  // webpack: (config) => {
  //   config.resolve.alias['@'] = path.join(__dirname, 'components');
  //   return config;
  // },
}

module.exports = nextConfig
