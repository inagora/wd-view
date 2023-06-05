<template>
	<div
		v-if="!slotDefault"
		:class="[
			'wd-spin',
			loading ? 'wd-spin-spinning' : '',
			text ? 'wd-spin-show-text' : ''
		]"
	>
		<span class="wd-spin-dot wd-spin-dot-spin">
			<i class="wd-spin-dot-item"></i>
			<i class="wd-spin-dot-item"></i>
			<i class="wd-spin-dot-item"></i>
			<i class="wd-spin-dot-item"></i>
		</span>
		<div class="wd-spin-text" v-if="text">{{ text }}</div>
	</div>
	<div class="wd-spin-nested-loading">
		<div>
			<div
				v-if="loading"
				:class="[
					'wd-spin',
					loading ? 'wd-spin-spinning' : '',
					text ? 'wd-spin-show-text' : ''
				]"
			>
				<span class="wd-spin-dot wd-spin-dot-spin">
					<i class="wd-spin-dot-item"></i>
					<i class="wd-spin-dot-item"></i>
					<i class="wd-spin-dot-item"></i>
					<i class="wd-spin-dot-item"></i>
				</span>
				<div class="wd-spin-text" v-if="text">{{ text }}</div>
			</div>
		</div>
		<div :class="['wd-spin-container', loading ? 'wd-spin-blur' : '']">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, useSlots } from 'vue';

interface WdLoadingProps {
	loading: boolean;
	text: string;
}

export default defineComponent({
	name: 'wd-loading',
	props: {
		loading: {
			type: Boolean,
			default: false
		},
		text: {
			type: String,
			default: ''
		}
	},
	emits: [],
	setup(props: WdLoadingProps, ctx) {
		const slotDefault = !!useSlots().default;
		return {
			slotDefault
		};
	}
});
</script>

<style lang="less">
@import url(./style/index);
</style>
