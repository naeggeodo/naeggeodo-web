const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ttf|woff|woff2|png)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]',
      },
    });

    // 절대경로
    config.resolve.modules.push(__dirname);

    return config;
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withPlugins(
  [
    [
      withImages,
      {
        swcMinify: true,
        compiler: {
          styledComponents: true,
        },
      },
    ],
    [bundleAnalyzer],
  ],
  nextConfig,
);
