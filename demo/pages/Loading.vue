<template>
	<div class="container">
		<wd-loading :loading="loading" text="加载中。。。">
			<wd-button>加载中。。。</wd-button>
		</wd-loading>
		<wd-button @click="toggleLoading">Loading</wd-button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
	name: 'Loading',
	setup() {
		let loading = ref(false);
		const toggleLoading = () => {
			loading.value = !loading.value;
		};
		return {
			loading,
			toggleLoading,
		};
	},
});
</script>
<style lang="less">
.component-box {
	width: 500px;
	min-height: 150px;
	border: 1px solid #f0f0f0;
	background: #ffffff;
	display: inline-block;
	margin-right: 10px;
}
.component-box-top {
	width: 100%;
	height: 80%;
	border-bottom: 1px solid #f0f0f0;
	padding: 10px 20px;
}
.component-box-bottom {
	position: relative;
	width: 100%;
	min-height: 50px;
}
.component-title {
	height: 30px;
	background: #ffffff;
	position: absolute;
	top: -11px;
	left: 20px;
	padding: 0 10px;
	color: #000000;
	font-weight: 500;
}
.component-desc {
	padding: 20px 10px 10px 10px;
}
</style>
