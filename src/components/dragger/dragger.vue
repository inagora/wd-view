<template>
	<div ref="dropArea" class="wd-upload-drag">
		<wd-upload :file-list="fileList" @change="changeHandler" v-bind="$attrs">
			<slot></slot>
		</wd-upload>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue"
import WdUpload from "../upload"
export default defineComponent({
	name: "wd-upload-dragger",
	inheritAttrs: false,
	components: { WdUpload },
	props: {},
	emits: ["change"],
	setup(props, { emit }) {
		let fileList = ref([])
		const dropArea = ref(null)

		const dropEvent = (e) => {
			e.stopPropagation()
			e.preventDefault()
			fileList.value = e.dataTransfer.files
		}

		const changeHandler = (val) => {
			emit("change", val)
		}

		onMounted(() => {
			dropArea.value.addEventListener("drop", dropEvent, false)
			dropArea.value.addEventListener("dragleave", (e) => {
				e.stopPropagation()
				e.preventDefault()
			})
			dropArea.value.addEventListener("dragenter", (e) => {
				e.stopPropagation()
				e.preventDefault()
			})
			dropArea.value.addEventListener("dragover", (e) => {
				e.stopPropagation()
				e.preventDefault()
			})
		})
		return {
			fileList,
			dropArea,
			changeHandler
		}
	}
})
</script>
