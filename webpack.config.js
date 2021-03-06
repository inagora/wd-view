const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const WebpackBar = require('webpackbar');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const babelConfig = {
	cacheDirectory: true,
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: [
						'last 2 versions',
						'Firefox ESR',
						'> 1%',
						'ie >= 11',
						'iOS >= 8',
						'Android >= 4',
					],
				},
			},
		],
		'@babel/preset-typescript',
	],
	plugins: [
		// [
		//   'babel-plugin-import',
		//   {
		//     libraryName: 'ant-design-vue',
		//     libraryDirectory: 'es', // default: lib
		//     style: 'css',
		//   },
		// ],
		['@vue/babel-plugin-jsx', { mergeProps: false }],
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-transform-object-assign',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-proposal-class-properties',
	],
};

module.exports = {
	mode: 'development',
	entry: {
		app: './demo/main.ts',
	},
	module: {
		rules: [
			{
				test: /\.(vue|md)$/,
				loader: 'vue-loader',
				exclude: /\.(en-US.md|zh-CN.md)$/,
			},
			{
				test: /\.(en-US.md|zh-CN.md)$/,
				use: [{ loader: 'vue-loader' }, { loader: './loader.js' }],
			},
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: babelConfig,
					},
					{
						loader: 'ts-loader',
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /pickr.*js/,
				options: babelConfig,
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]',
				},
			},
			{
				test: /\.less$/,
				use: [
					// { loader: 'style-loader' },
					// {
					//   loader: 'css-loader',
					//   options: { sourceMap: true },
					// },
					// {
					//   loader: 'less-loader',
					//   options: {
					//     lessOptions: {
					//       sourceMap: true,
					//       javascriptEnabled: true,
					//     },
					//   },
					// },
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader',
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: true,
						},
					},
					'css-loader',
				],
			},
		],
	},
	// resolve: {
	//   alias: {
	//     'ant-design-vue/es': path.join(__dirname, './components'),
	//     'ant-design-vue': path.join(__dirname, './components'),
	//     vue$: 'vue/dist/vue.esm-bundler.js',
	//   },
	//   extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.md'],
	// },
	optimization: {
		minimizer: [new CssMinimizerPlugin()],
		minimize: true,
	},
	devServer: {
		historyApiFallback: {
			rewrites: [{ from: /./, to: '/index.html' }],
		},
		disableHostCheck: true,
		hot: true,
		open: true,
	},
	devtool: 'cheap-module-eval-source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new HtmlWebpackPlugin({
			template: 'examples/index.html',
			filename: 'index.html',
			inject: true,
		}),
		new VueLoaderPlugin(),
		new WebpackBar(),
	],
};
