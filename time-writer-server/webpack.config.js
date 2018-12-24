const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: {
		'main': ['@babel/polyfill', './src/server.js']
	},
	target: 'node',
	externals: [nodeExternals()],
	mode: 'development',
	output: {
		path: path.resolve(__dirname),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env"]
					}
				},
				exclude: /node_modules/
			}
		]
	},
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
		ignored: /node_modules/
	},
};