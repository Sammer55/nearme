module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@components': './src/components',
            '@icons': './src/assets/icons',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@ts': './src/@types',
            '@hooks': './src/hooks',
            '@utils': './src/utils',
            '@api': './src/services/useApi',
            '@services': './src/services/',
          },
        },
      ],
      'transform-inline-environment-variables',
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
