module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
  },
  settings: {
    'import/resolver': {'babel-module': {}},
  },
  root: true,
  extends: '@react-native-community',
  plugins: ['module-resolver', 'import'],
  rules: {
    'module-resolver/use-alias': 2,
  },
};
