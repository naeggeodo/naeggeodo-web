const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withImages({
    swcMinify: true,
    compiler: {
      styledComponents: true,
    },
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
  }),
);
