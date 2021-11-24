const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const production = {
	mode: 'production',
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
}
module.exports = merge(common, production)
