<template>
	<!-- <wd-space
			wrap
			:size="[10, 20]"
			align="center"
			style="width: 100%"
			spacer="/"
		> -->
	<!-- <div v-for="(item, index) in 1" :key="item">
				<wd-button>{{ item }}</wd-button>
			</div>
			<wd-button>last</wd-button>
		</wd-space> -->
	<!-- {{ value1 }} -->
	<!-- <wd-date-picker
					type="range"
					format="YYYY/MM/DD"
					value-format="YYYY-MM-DD"
					size="small"
					:placeholder="['开始入库时间', '结束入库时间']"
					v-model="searchParams.warehouseing_time"
				></wd-date-picker> -->
	<!-- :default-value="new Date(2010, 9, 1)" -->
	@@{{ value1 }}

	<!-- value-format="YYYY-MM-DD HH:mm:ss" -->
	<!-- value-format="YYYY-MM-DD" -->
	<!-- type="datetime-local" -->
	<!-- :disabled="true" -->
	<!-- disable -->
	<!-- type="datetime-local" -->
	<!-- <input type="date" id="datePicker" value="2422-11-21" /> -->
	<!-- <input
			type="date"
			id="start"
			name="trip-start"
			value="2018-07-22"
			min="2018-01-01"
			max="2018-12-31"
		/> -->
	<!-- type="date" type="datetime-local" type="month" type="week" type ="time"
		type ="week" -->
	<!-- type="datetime-local" -->
	<wd-date
		v-model="value1"
		type="datetime-local"
		format="YYYY-MM-DD HH:mm"
		value-format="YYYY-MM-DD HH:mm"
		size="small"
		@input="handleInput"
		@change="handleChange"
		@focus="handleFocus"
		@blur="handleBlur"
	></wd-date>
	<!-- :default-value="defaultValue" -->
	<!-- format="YYYY-MM-DD"
			value-format="YYYY-MM-DD" -->
	<!-- <input type="time" /> -->
	<!-- type="daterange" -->
	<!-- <wd-date
		v-model="rangeValue"
		type="datetimerange"
		format="YYYY-MM-DD HH:mm:ss"
		value-format="YYYY-MM-DD HH:mm:ss"
		size="small"
		@input="handleInput"
		@change="handleChange"
		@focus="handleFocus"
		@blur="handleBlur"
	></wd-date> -->
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
// import dayjs from 'dayjs';
// const value1 = ref();
// const value1 = ref('');
const value1 = ref(new Date(2023, 9, 1));
// const value1 = ref('2022-02-01');
const rangeValue = reactive([new Date(2023, 8, 4), new Date(2023, 8, 5)]);
const defaultValue = new Date(2025, 2, 1);
const handleChange = (event: Event) => {
	console.log('父组件change', event);
	console.log('父组件11', value1.value);
};
const handleInput = (event: Event) => {
	console.log('父组件input', event);
};
const handleFocus = (event: FocusEvent) => {
	console.log('父组件focus', event);
};
const handleBlur = (event: FocusEvent) => {
	console.log('父组件blur', event);
};
</script>
