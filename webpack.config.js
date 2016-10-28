const express = require('express');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./client/index.jsx",
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				loader: 'babel',
				include: path.join(__dirname, 'client')
			}
		]
	},
	plugins: [
	// Automatically generate our html page
	// https://www.npmjs.com/package/html-webpack-plugin
		new htmlWebpackPlugin({
			// Define the starting point for our dynamic html creation
			template: path.join(__dirname, 'client/index.html'),
			appMountId: 'root',
			title: 'Hello',
		}),
	]
}
