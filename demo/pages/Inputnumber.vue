<template>
	<div class="container">
		<div class="component-box">
			<div class="component-box-top">
				<wd-input-number
					v-model="inputNum"
					max="20"
					min="0"
					step="0.1"
					size="small"
					@input="handleInputNumber"
					@change="handleChangeNumber"
					type="text"
				></wd-input-number>
			</div>
			<div class="component-box-bottom">
				<div class="component-title">数字输入框</div>
				<div class="component-desc">
					数字输入框只能输入数字，可以设置数值的最大值和最小值；
					并且可以通过上下按钮增加或者减小数值
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
	name: 'inputnumber',
	setup() {
		const inputNum = ref(0);
		const handleInputNumber = () => {};
		const handleChangeNumber = () => {};
		return {
			inputNum,
			handleInputNumber,
			handleChangeNumber,
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
