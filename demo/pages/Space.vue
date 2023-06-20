<template>
	<div class="container">
		<!-- <wd-space
			wrap
			:size="[10, 20]"
			align="center"
			style="width: 100%"
			spacer="/"
		> -->
		<!-- <div v-for="(item, index) in 1" :key="item">
				<wd-button>{{ item }}</wd-button>
			</div> -->
		<wd-space spacer="/">
			<wd-button>33333</wd-button>
			<wd-button>33333</wd-button>
		</wd-space>
		<!-- <wd-button>last</wd-button> -->
		<!-- </wd-space> -->
	</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'Space',
});
</script>
