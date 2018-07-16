const config = require('./webpack.config.analyze.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

config.plugins.push(new BundleAnalyzerPlugin())

module.exports = config

