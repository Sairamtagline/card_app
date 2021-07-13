const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.common.js');


module.exports = merge(baseConfig, {
	mode: 'production',
	entry: {
		bundle:[
			path.resolve(__dirname, 'src/index.js'),
		]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index_bundle.js',
	},
	// optimization: {
	// 	minimizer: [
	// 		// we specify a custom UglifyJsPlugin here to get source maps in production
	// 		new TerserPlugin({
	// 			cache: true,
	// 			parallel: true,
	// 			terserOptions: {
	// 				warnings: false,
	// 				compress: {
	// 					warnings: false,
	// 					unused: true, // tree shaking(export된 모듈 중 사용하지 않는 모듈은 포함하지않음)
	// 				},
	// 				ecma: 6,
	// 				mangle: true,
	// 				unused: true,
	// 			},
	// 			sourceMap: true,
	// 		}),
	// 	],
	// },
	plugins: [
		// new webpack.HotModuleReplacementPlugin(), // HMR을 사용하기 위한 플러그인
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'React Design Editor',
		}),
	],
});
