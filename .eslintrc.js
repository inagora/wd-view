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
		'vue/html-indent': ['error', 'tab'],
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 5, // 允许最多5个属性放在同一行上
				multiline: {
					max: 1, // 多行时，每个属性占据一行
				},
			},
		],
	},
	globals: { defineProps: 'readonly' },
};
