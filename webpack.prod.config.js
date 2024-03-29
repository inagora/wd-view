const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
	mode: 'production',
	entry: './src/index.ts',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: 'WdView',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Hot Module Replacement',
			template: 'index.html',
		}),
		// new CopyWebpackPlugin({
		//     patterns: [
		//         {
		//             from: 'src/assets',
		//             to: 'assets'
		//         },
		//     ]
		// }),
		new MiniCssExtractPlugin({
			filename: './index.css',
		}),
		new VueLoaderPlugin(),
		new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
	],
	module: {
		rules: [
			// {
			//     test: /\.js$/,
			//     exclude: /node_modules/,
			//     use: [{
			//         loader: 'babel-loader',
			//         options: {
			//             cacheDirectory: true,
			//             presets: ['@babel/preset-env'],
			//             plugins: [
			//                 ['import', {
			//                     "libraryName": "ant-design-vue",
			//                     "libraryDirectory": "es",
			//                     "style": "css"
			//                 }]
			//             ]
			//         }
			//     }],
			// },
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
						},
					},
				],
			},
			{
				test: /\.vue$/,
				use: ['vue-loader'],
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
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
		extensions: ['.js', '.ts'],
	},
	optimization: {
		minimizer: ['...', new CssMinimizerPlugin()],
		minimize: true,
	},
	externals: {
		vue: {
			root: 'Vue',
			commonjs2: 'vue',
			commonjs: 'vue',
			amd: 'vue',
		},
		'ant-design-vue': 'ant-design-vue',
	},
};

module.exports = (env) => {
	return config;
};
