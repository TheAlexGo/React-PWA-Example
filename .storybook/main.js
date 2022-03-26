const configCraco = require('../craco.config');

module.exports = {
  "stories": [
    "../src/components/ui/**/*.stories.mdx",
    "../src/components/ui/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...configCraco.webpack.alias,
        },
      },
    };
  },
}