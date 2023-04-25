const path = require('path');
const { HotModuleReplacementPlugin, IgnorePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
	mode: 'development',
	entry: './demo/main.ts',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: false,
		// publicPath: './dist',
		hot: true,
		// host: '0.0.0.0',
		port: 8090,
		open: true,
		// hotOnly: true,
		compress: true,
		overlay: true,
	},
	cache: {
		type: 'filesystem',
		name: 'wdviewcache',
		buildDependencies: {
			config: [__filename],
		},
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Hot Module Replacement',
			template: 'index.html',
		}),
		new IgnorePlugin({
			resourceRegExp: /^\.\/locale$/,
			contextRegExp: /moment$/,
		}),
		new HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							// cacheDirectory: true,
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: [
								'@babel/plugin-transform-runtime',
								[
									'import',
									{
										libraryName: 'ant-design-vue',
										style: 'css', // or 'css'
									},
									'ant-design-vue',
								],
							],
						},
					},
				],
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: path.resolve(__dirname, './tsconfig.json'),
							appendTsSuffixTo: [/\.vue$/],
							transpileOnly: true,
						},
					},
				],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								modifyVars: {
									// 'primary-color': '#4608e2',
									// 'link-color': '#4608e2',
									// 'border-radius-base': '20px',
								},
								javascriptEnabled: true,
							},
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.ts', '.jsx'],
	},
};

module.exports = (env) => {
	return config;
};
