<template>
	{{ selectedDateTime }}
	12
	<!-- <date-picker type="datetime-local" v-model="selectedDateTime"></date-picker> -->
	<!-- ISO 日期时间格式的字符串，例如 "2023-05-16T16:01"。这是 HTML5 标准指定的格式。
    
    T 字符表示日期与时间的分隔符，T 前面的部分是日期（年、月、日），后面的部分是时间（小时、分钟）。这个格式的好处是与其他国家的日期时间格式不会混淆，方便进行国际化处理。 -->
	{{ selectedDateRange }}
	<wd-date-picker-origin></wd-date-picker-origin>
	<!-- <date-range-picker
		type="datetime-local"
		v-model="selectedDateRange"
	></date-range-picker> -->
</template>
<!-- WdDatePickerOrigin -->

<script>
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'DatePickerOrigin',
	setup() {},
});
import { ref } from 'vue';
const selectedDateRange = ref(['', '']);
</script>

<style></style>
