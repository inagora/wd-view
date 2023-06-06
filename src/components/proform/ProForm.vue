<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'pro-form',
	setup() {},
});
</script>

<script setup>
import './style.css';
import { provide, onUnmounted, ref } from 'vue';
import mitt from 'mitt';
const emitter = mitt();
import Form from './components/Form.vue';
// 支持的组件
const components = [Form];
const props = defineProps(['config']);
const config = props.config;
const conf = Object.assign(
	{
		searchFilters: [],
	},
	config
);
provide('config', conf);
provide('emitter', emitter);
emitter.on('*', (type, e) => {
	if (conf.listeners && conf.listeners[type]) {
		conf.listeners[type](e);
	}
});
// table组件
const itemRefs = [];
const setItemRef = (el) => {
	if (el) {
		itemRefs.push(el);
	}
};
const getSearchParams = () => {
	let searchParams = {};
	itemRefs.forEach((item) => {
		if (item.getSearchParams) {
			searchParams = item.getSearchParams();
		}
	});
	return searchParams;
};
const setSearchParams = (data) => {
	itemRefs.forEach((item) => {
		if (item.setSearchParams) {
			item.setSearchParams(data);
		}
	});
};
defineExpose({
	getSearchParams,
	setSearchParams,
});
onUnmounted(() => {
	emitter.all.clear();
});
</script>

<template>
	<div ref="wvProForm" class="wv-pro-form">
		<template v-for="(com, index) in components" :key="index">
			<component :ref="setItemRef" :is="com"></component>
		</template>
	</div>
</template>
