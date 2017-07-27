const { resolve } = require('path')

module.exports = {
  devtool: 'source-map',
  entry: [
    resolve(__dirname, 'src/index.js'),
  ],
  output: {
    publicPath: 'dist/',
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules)/,
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    inline: true,
    port: 8081,
    historyApiFallback: true,
  },
}
