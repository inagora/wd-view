<template>
	<div class="container">
		<!-- 默认水平 horizontal -->
		<!-- 垂直 vertical -->
		<!-- column row -->
		<!-- direction="column" -->
		<!-- <wd-space alignment="flex-start" style="width: 100%" wrap :size="[30, 50]">
			<div v-for="i in 20" :key="i">
				<el-button text> Text button </el-button>
			</div>
		</wd-space> -->
		<!-- <div v-for="i in 20" :key="i">
				<wd-button text> Text button </wd-button>
			</div> -->

		<!-- :size="[30, 50]" size="small"  size="20" -->
		<!-- row <-> column -->
		<!-- direction="column" -->
		<!-- direction="row" -->
		<!-- <wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button> -->
		<wd-space wrap :size="[30]" alignment="flex-start" style="width: 100%">
			<div>
				<div>
					123
					<div>456</div>
				</div>
			</div>
			<wd-button text> Text button </wd-button>
			<wd-button text> Text button </wd-button>
		</wd-space>
	</div>
</template>
  
  <script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
	name: 'Space',
	setup() {
		return {};
	},
});
</script>
  <style lang="less">
</style>
  