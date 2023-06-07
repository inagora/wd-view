module.exports = {
	env: {
		// 环境: 全局对象
		browser: true,
		es2021: true,
		node: true
	},
	// extends = plugins + rules
	extends: [
		//继承了哪些规则，别人写好的，直接用
		'eslint:recommended',
		'plugin:vue/vue3-essential', // eslint vue
		'plugin:@typescript-eslint/recommended', // ts
		'plugin:vue/vue3-recommended',
		'plugin:prettier/recommended'
	],
	overrides: [],
	// 可以解析.vue文件 解析器
	parser: 'vue-eslint-parser', // esprima babel-eslint
	// "parser": "@typescript-eslint/parser", ts
	// 描述语法
	parserOptions: {
		parser: '@typescript-eslint/parser', // 解析ts文件
		ecmaVersion: 'latest', // es6
		sourceType: 'module' // import
		// ecmaFeatures: {
		// 	jsx: true
		// }
	},
	plugins: ['vue', '@typescript-eslint'],
	// 自定义规则
	rules: {
		// 0 off 2 warn error
		//Prettier 和 ESLint 同时作用 ,防止冲突 ,覆盖
		'prettier/prettier': [
			'error',
			{
				// singleQuote: true, //使用单号
				semi: true, //末尾添加分号
				tabwidth: 2,
				trailingComma: 'none',
				useTabs: true,
				endofLine: 'auto'
			}
		],
		'no-async-promise-executor': 'off', // promise async
		'vue/multi-word-component-names': 'off', // 组件单名
		'vue/require-valid-default-prop': 'off', // 传函数 =》 传对象
		'@typescript-eslint/no-empty-function': 'off', //空箭头函数
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'no-prototype-builtins': 'off',
		'vue/no-setup-props-destructure': 'off' // 解构props
	}
	// globals: {
	// 	custom: 'readonly'
	// 	custom: 'writeable'
	// }
};
