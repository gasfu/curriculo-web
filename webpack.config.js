const path = require('path'),
      webpack = require('webpack');

module.exports = {
	entry: {
		app: path.join(__dirname, '/app/App.js')
	},

	output: {
		path: path.join(__dirname, '/public/dist'),
		filename: 'application.min.js'
	},

	devServer: {
	    inline: true,
	    contentBase: './public/',
	    port: 8081,
	    historyApiFallback: true
	},

	module: {
		loaders: [{
			test: /\.js(x)?$/,
			exclude: /node_module/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	watch: true
}