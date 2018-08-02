const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      Src: path.resolve(__dirname, './src'),
      Common: path.resolve(__dirname, './src/common'),
      Components: path.resolve(__dirname, './src/components'),
      Assets: path.resolve(__dirname, './src/assets')
    },
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [{
      test: /\.js$|\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
  },
  devServer: {
    historyApiFallback: true,
  }
};
