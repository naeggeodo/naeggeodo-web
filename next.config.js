const withPlugins = require('next-compose-plugins');
const images = require('next-images');
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
};

module.exports = withPlugins(
  [
    [
      images,
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
