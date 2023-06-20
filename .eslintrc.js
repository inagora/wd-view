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
	rules: {
		'vue/html-self-closing': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/multi-word-component-names': 'off',
	},
	globals: { defineProps: 'readonly' },
};
