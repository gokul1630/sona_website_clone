const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const dev = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		port: 3000,
	},
}
module.exports = merge(common, dev)
