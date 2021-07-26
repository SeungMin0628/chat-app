module.exports = {
  presets: [
    require.resolve('next/babel'),
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      require.resolve('babel-plugin-styled-components')
    ]
  ]
}
