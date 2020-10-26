'use strict'

const path = require('path');
const process = require('process');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const conf_mode = process.env.NODE_ENV;

module.exports = {
  target: 'node',
  mode: conf_mode,
  entry: './src/brawler-dps-script.js',
  output: {
    path: path.resolve(__dirname, 'dist/brawler-dps-script'),
    filename: 'bundle.js',
	libraryTarget: 'commonjs2'
  },
  plugins: [
    new BundleAnalyzerPlugin({
		analyzerMode: 'disabled',
		//generateStatsFile: conf_mode === 'development' ? true : false
	}),
	new CopyPlugin({
		patterns: [
		    { from: 'src/sys', to: '' }
		]
    })
  ],
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader'
      },
	  {
        test: /\.node$/,
        loader: 'node-loader'
      }
    ]
  }
};