<template>
	<div class="container">
		<div class="component-box">
			<div class="component-box-top">
				<wd-radio v-model="isRadioChecked" name="color">
					红色(当前值：{{ isRadioChecked }})
				</wd-radio>
			</div>
			<div class="component-box-bottom">
				<div class="component-title">单选组件</div>
				<div class="component-desc">用于选择多个值中的一个；</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
	name: 'Radio',
	setup() {
		let isRadioChecked = ref(false);
		return {
			isRadioChecked,
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
