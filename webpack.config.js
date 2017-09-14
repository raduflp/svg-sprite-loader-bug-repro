const path = require('path');
const SpritePlugin = require('svg-sprite-loader/plugin');

const USE_ONEOF_SETUP = false;

const svgSpriteRule = {
  test: /\.svg$/,
  loader: 'svg-sprite-loader',
  options: {
    extract: true,
    spriteFilename: 'custom-sprite-name-[hash:8].svg'
  },
};

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
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
    new SpritePlugin()
  ]
};
