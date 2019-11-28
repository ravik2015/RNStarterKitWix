const commonPlugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      extensions: ['.ios.js', '.android.js', '.js', '.json'],
      root: ['./src'],
      alias: {
        '@components': './src/components',
        '@containers': './src/containers',
        '@config': './src/config',
        '@actions': './src/actions',
        '@constants': './src/constants',
        '@helpers': './src/helpers',
        '@images': './src/images',
        '@reducers': './src/reducers',
        '@store': './src/store',
        '@utils': './src/utils',
        '@hoc': './src/hoc',
      },
    },
  ],
  [
    '@babel/plugin-proposal-decorators',
    {
      legacy: true,
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...commonPlugins],
};
