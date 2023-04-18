<template>
	<div class="container">
		<wd-space wrap :size="12" align="center" style="width: 100%" spacer="/">
			<div v-for="(item, index) in 20">
				<wd-button>{{ item }}</wd-button>
			</div>
			<wd-space>
				<wd-button>33333</wd-button>
			</wd-space>
		</wd-space>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'Space',
});
</script>
