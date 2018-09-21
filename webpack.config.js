const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');

// if you change it to false, project will be built 
const USE_ONEOF_SETUP = true;

const src = path.resolve(__dirname, './src');
const svgSpriteRule = {
  test: /\.svg$/,
  use: [
    {
      loader: 'svg-sprite-loader',
      options: {
        extract: true
      }
    }
  ]
};

module.exports = {
  entry: path.join(src, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      USE_ONEOF_SETUP ? { oneOf: [svgSpriteRule] } : svgSpriteRule,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(src, 'index.html'),
    }),
    new SpritePlugin()
  ]
};
