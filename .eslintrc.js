module.exports = {
	env: {
		// 环境
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		//继承了哪些规则，别人写好的，直接用
		"eslint:recommended",
		"plugin:vue/vue3-essential", // eslint vue
		"plugin:@typescript-eslint/recommended", // ts
		"@vue/prettier"
	],
	overrides: [],
	// 可以解析.vue文件
	parser: "vue-eslint-parser", // esprima babel-eslint
	// "parser": "@typescript-eslint/parser", ts
	parserOptions: {
		parser: "@typescript-eslint/parser", // 解析ts文件
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["vue", "@typescript-eslint"],
	// 自定义规则
	rules: {
		"no-async-promise-executor": "off", // promise async
		"vue/multi-word-component-names": "off", // 组件单名
		"vue/require-valid-default-prop": "off", // 传函数 =》 传对象
		"@typescript-eslint/no-empty-function": "off", //空箭头函数
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-inferrable-types": "off",
		"no-prototype-builtins": "off",
		"vue/no-setup-props-destructure": "off" // 解构props
	}
}
