<template>
	<div>
		<h1>{{ message }}</h1>
		<button @click="handleButtonClick">Increment</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: 'Hello, World!',
			count: 0
		};
	},
	methods: {
		handleButtonClick() {
			this.count++;
		}
	}
};
</script>
