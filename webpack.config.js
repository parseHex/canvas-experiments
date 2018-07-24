const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		animations: './src/animations/index.ts',
		physics: './src/physics/index.ts',
	},

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			}
		],
	},

	devtool: 'source-map',
	mode: 'development',
	watch: true,

	resolve: {
		extensions: ['.ts', '.js'],
	},

	// plugins: [new UglifyJSPlugin()],
};
