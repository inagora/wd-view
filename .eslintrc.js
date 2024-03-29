module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended', //vue3 https://eslint.vuejs.org/
		'plugin:@typescript-eslint/recommended',
		'@vue/typescript/recommended', // 校验.vue 里面的ts
	],
	parserOptions: {
		ecmaversion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		// 'vue/html-indent': ['error', 'tab'],
		'vue/no-setup-props-destructure': 'off',
		// 'vue/max-attributes-per-line': [
		// 	'error',
		// 	{
		// 		max: 1,
		// 		allowFirstLine: false,
		// 	},
		// ],
		'vue/html-indent': 'off',
		'vue/max-attributes-per-line': ['off'],
		'vue/html-self-closing': 'off',
		'vue/no-dupe-keys': 'off',
		'vue/prefer-import-from-vue': 'off',
	},
	globals: { defineProps: 'readonly' },
};
