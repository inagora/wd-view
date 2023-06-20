<template>
	<div class="container">
		<wd-space
			wrap
			:size="[10, 20]"
			align="center"
			style="width: 100%"
			spacer="/"
		>
			<div v-for="(item, index) in 20" :key="item">
				<wd-button>{{ item }}</wd-button>
			</div>
			<wd-space>
				<wd-button>33333</wd-button>
			</wd-space>
			<wd-button>last</wd-button>
		</wd-space>
	</div>
</template>

<script setup>
export default {
	name: 'Space',
};
</script>
