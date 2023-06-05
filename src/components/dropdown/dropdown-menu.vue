<template>
	<ul class="wd-dropdown-content wd-dropdown-menu">
		<slot></slot>
	</ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'WdDropdownMenu',
	setup() {
		const menuItem = 'menuItem';
		return {
			menuItem
		};
	}
});
</script>
