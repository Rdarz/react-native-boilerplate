module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          // _atoms: './src/components/atoms',
          // _molecules: './src/components/molecules',
          // _organisms: './src/components/organisms',
          _navigations: './src/navigations',
          _screens: './src/screens',
          _common: './src/common',
          _services: './src/services',
          _styles: './src/common/styles',
          _utils: './src/utils',
        },
      },
    },
  },
};
