const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(gif|png|jpe?g|svg)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });

    return config;
  },
};

module.exports = nextConfig;
