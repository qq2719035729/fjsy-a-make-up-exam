const {
	defineConfig
} = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		historyApiFallback: true,
		allowedHosts: "all",
		host: '0.0.0.0',
		// https:true,
		port: 8080,
		client: {
			webSocketURL: 'ws://0.0.0.0:8080/ws',
		},
		headers: {
			'Access-Control-Allow-Origin': '*',
		}
	},
	publicPath:"./",
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				moment: 'moment',
				'window.jQuery': 'jquery',
				Popper: ['popper.js', 'default']
			})
		]
	},
})
