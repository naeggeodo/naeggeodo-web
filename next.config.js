module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ttf|woff|woff2|svg)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]',
      },
    });

    return config;
  },
};
