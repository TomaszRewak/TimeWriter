const path = require('path');

module.exports = {
	entry: {
		'main': ['@babel/polyfill', './src/index.js']
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
		ignored: /node_modules/
	},
};