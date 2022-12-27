<template>
	<div class="container">
		<div class="component-box">
			<div class="component-box-top">
				<wd-switch
					v-model="isSwitchChecked"
					:loading="isSwitchLoading"
					@change="handleSwitchChange"
				/>
				<wd-switch
					disabled
					size="large"
					:loading="true"
					v-model="isSwitchChecked"
				/>
			</div>
			<div class="component-box-bottom">
				<div class="component-title">开关组件</div>
				<div class="component-desc">
					开关组件可以控制一个状态，当异步切换状态的时候可以显示loading状态；
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
	name: 'Switch',
	setup() {
		let isSwitchChecked = ref(true);
		let isSwitchLoading = ref(false);
		const handleSwitchChange = () => {};
		return {
			isSwitchChecked,
			isSwitchLoading,
			handleSwitchChange,
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
