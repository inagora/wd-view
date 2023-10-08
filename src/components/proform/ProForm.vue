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
const props = defineProps(['config', 'model']);
const config = props.config;
provide('config', config);
provide('model', props.model);
</script>

<template>
	<div ref="wvProForm" class="wv-pro-form">
		<template v-for="(com, index) in components" :key="index">
			<component :ref="setItemRef" :is="com"><slot /></component>
		</template>
	</div>
</template>
