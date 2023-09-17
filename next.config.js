const path = require('path')
const { withPlugins } = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-i18next']);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
};

module.exports = withPlugins(
  [
    [withTM],
    {
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.alias['@configs/i18n'] = require.resolve('./i18n');
        }

        return config;
      },
    },
  ],
  nextConfig
);