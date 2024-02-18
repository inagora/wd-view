<template>
	<wd-image
		src="https://oss1.52ritao.cn/ad3dec1e3d86a60be30573e19b92886e.png"
		width="200"
		height="200"
		object-fit="fill"
		close-on-press-escape="true"
		fallback="https://oss.wandougongzhu.cn/5db8429cb0e8b6a8a22b18a707093d64.png"
		:preview-src-list="[
			'https://oss.wandougongzhu.cn/5db8429cb0e8b6a8a22b18a707093d64.png',
			'https://oss4.wandougongzhu.cn/09a897d1c903bef4fcecb6db528419c7.png?x-oss-process=image/resize,w_900,h_4000/format,webp',
		]"
		@error="errorHandler"
	>
		<template #placeholder> hhh </template>
		<template #toolbar>
			<wd-button>自定义按钮</wd-button>
		</template>
	</wd-image>
</template>
<script setup>
import { ref } from 'vue';
const errorHandler = (e) => {
	console.log(e);
};
</script>
