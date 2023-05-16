<template>
	<!-- <date-picker type="datetime-local" v-model="selectedDateTime"></date-picker> -->
	<!-- ISO 日期时间格式的字符串，例如 "2023-05-16T16:01"。这是 HTML5 标准指定的格式。
    
    T 字符表示日期与时间的分隔符，T 前面的部分是日期（年、月、日），后面的部分是时间（小时、分钟）。这个格式的好处是与其他国家的日期时间格式不会混淆，方便进行国际化处理。 -->
	<!-- {{ selectedDateRange }} -->

	<wd-date-range-picker
		type="datetime-local"
		v-model="selectedDateRange"
	></wd-date-range-picker>
	<br />
	<!-- 可以通过type设置不同的组件类型：date | mounth | range | time | week -->
</template>
<!-- WdDatePickerOrigin -->

<script>
import { reactive, defineComponent } from 'vue';
export default defineComponent({
	name: 'Daterangepicker',
	setup() {
		const selectedDateRange = reactive(['0', '0']);
	},
});
</script>

<style></style>
