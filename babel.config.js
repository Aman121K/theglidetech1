module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset',
    { all: true }]
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        // extensions: [
        //   '.js',
        //   '.ios.js',
        //   '.android.js',
        //   '.windows.js',
        //   '.native.js',
        //   '.tsx',
        //   '.json',
        //   ''
        // ],
        alias: {
          '@components': ['./src/components'],
          '@constants': ['./src/constants'],
          '@images': ['./src/assets/images'],
          '@screens': ['./src/screens'],
          '@services': ['./src/services'],
          '@assets': ['./src/assets'],
          '@store': ['./src/store'],
          '@domain': ['./src/dataservice/domain'],
          '@data-services': ['./src/dataservice/']
        },
        cwd: 'packagejson',
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
    "transform-inline-environment-variables"
  ],
};
