const path = require('path');

console.log(path.resolve(__dirname, 'vendor/flat-ui'));

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'app/index.js'),
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(scss|sass)$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: [path.resolve(__dirname, 'vendor')]
          }
        }
      ]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-class-properties'
          ]
        }
      }
    }]
  }
};