const config = require('./webpack.config.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

config.mode = 'production'
config.plugins = config.plugins || []
config.plugins.push(new BundleAnalyzerPlugin())

module.exports = config

