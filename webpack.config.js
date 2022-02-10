const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist')
	},
	mode: 'development',
  devServer: {
		static: {
			directory: path.resolve(__dirname, './dist')
		},
		port: 3002
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader', 'css-loader'
				]
			}
		]
	},
	"plugins": [
    new ModuleFederationPlugin({
      name: 'teamDs',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button',
        './Header': './src/components/Header',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html'
		})
	]
}