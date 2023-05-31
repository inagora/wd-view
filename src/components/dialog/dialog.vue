<template>
	<teleport to="body" :disabled="!appendToBody">
		<transition
			name="wd-dialog-fade"
			@before-leave="animaBeforeLeave"
			@before-enter="animaBeforeEnter"
			@after-enter="animaAfterEnter"
			@after-leave="animaAfterLeave"
		>
			<div
				:class="['wd-dialog-mask', centered ? 'wd-dialog-centered' : '']"
				v-show="visible"
				:style="{ zIndex }"
				@click="maskClickHandler"
			>
				<div
					ref="dialogRef"
					:class="['wd-dialog', customClass, type ? 'wd-dialog-' + type : '']"
					:style="style"
					@click.stop=""
				>
					<div class="wd-dialog-content">
						<div class="wd-dialog-header">
							<slot name="title">
								<span
									v-if="type === 'info'"
									role="img"
									aria-label="info-circle"
									class="anticon anticon-info anticon-info-circle"
									><svg
										focusable="false"
										class=""
										data-icon="info-circle"
										width="1em"
										height="1em"
										fill="currentColor"
										aria-hidden="true"
										viewBox="64 64 896 896"
									>
										<path
											d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
										></path></svg
								></span>
								<span
									v-else-if="type === 'success'"
									role="img"
									aria-label="check-circle"
									class="anticon anticon-success anticon-check-circle"
									><svg
										focusable="false"
										class=""
										data-icon="check-circle"
										width="1em"
										height="1em"
										fill="currentColor"
										aria-hidden="true"
										viewBox="64 64 896 896"
									>
										<path
											d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
										></path></svg
								></span>
								<span
									v-else-if="type === 'warning'"
									role="img"
									aria-label="exclamation-circle"
									class="anticon anticon-warning anticon-exclamation-circle"
									><svg
										focusable="false"
										class=""
										data-icon="exclamation-circle"
										width="1em"
										height="1em"
										fill="currentColor"
										aria-hidden="true"
										viewBox="64 64 896 896"
									>
										<path
											d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
										></path></svg
								></span>
								<span
									v-else-if="type === 'error'"
									role="img"
									aria-label="close-circle"
									class="anticon anticon-error anticon-close-circle"
									><svg
										focusable="false"
										class=""
										data-icon="close-circle"
										width="1em"
										height="1em"
										fill="currentColor"
										aria-hidden="true"
										viewBox="64 64 896 896"
									>
										<path
											d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
										></path></svg
								></span>
								<span class="wd-dialog-title">
									{{ title }}
								</span>
							</slot>
							<button
								v-if="showClose"
								@click="closeDialog"
								class="wd-dialog-close"
							>
								<span class="wd-dialog-close-x">
									<i
										aria-label="图标: close"
										class="anticon anticon-close wd-dialog-close-icon"
									>
										<svg
											viewBox="64 64 896 896"
											data-icon="close"
											width="1em"
											height="1em"
											fill="currentColor"
											aria-hidden="true"
											focusable="false"
											class=""
										>
											<path
												d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
											></path>
										</svg>
									</i>
								</span>
							</button>
						</div>
						<template v-if="rendered">
							<div class="wd-dialog-body" :style="bodyStyle" v-bind="$attrs">
								<slot></slot>
							</div>
						</template>
						<div v-if="$slots.footer" class="wd-dialog-footer">
							<slot name="footer"></slot>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<script lang="ts">
import {
	defineComponent,
	ref,
	watch,
	computed,
	CSSProperties,
	onMounted
} from "vue"
declare type TimeoutHandle = ReturnType<typeof global.setTimeout>

export default defineComponent({
	name: "WdDialog",
	inheritAttrs: false,
	props: {
		appendToBody: {
			type: Boolean,
			default: false
		},
		beforeClose: {
			type: Function
		},
		beforeOpen: {
			type: Function
		},
		customClass: {
			type: String,
			default: ""
		},
		closeOnClickModal: {
			type: Boolean,
			default: true
		},
		destroyOnClose: {
			type: Boolean,
			default: false
		},
		showClose: {
			type: Boolean,
			default: true
		},
		title: {
			type: String,
			default: ""
		},
		openDelay: {
			type: Number,
			default: 0
		},
		closeDelay: {
			type: Number,
			default: 0
		},
		top: {
			type: String,
			default: "15vh"
		},
		modelValue: {
			type: Boolean,
			required: true
		},
		modalClass: String,
		width: {
			type: [String, Number],
			default: "50%"
		},
		zIndex: {
			type: Number
		},
		type: {
			type: String,
			default: ""
		},
		open: {
			// 使用open控制时，必须要调用close
			type: Boolean,
			default: false
		},
		centered: {
			type: Boolean,
			default: false
		},
		bodyStyle: {
			type: Object,
			default: {}
		}
	},
	emits: ["close", "open", "before-close", "before-open", "update:modelValue"],
	setup(props, ctx) {
		const dialogRef = ref<HTMLElement>(null)
		const visible = ref(false)
		const closed = ref(false)
		const rendered = ref(false) // when desctroyOnClose is true, we initialize it as false vise versa
		const zIndex = ref(props.zIndex)
		const openTimer = ref<TimeoutHandle>(null)
		const closeTimer = ref<TimeoutHandle>(null)
		const normalizeWidth = () => {
			return props.width
		}

		// 关闭弹窗
		const closeDialog = () => {
			doClose()
		}

		// mask点击
		const maskClickHandler = () => {
			if (props.closeOnClickModal) {
				doClose()
			}
		}

		const style = computed(() => {
			const style = {} as CSSProperties
			style.marginTop = !props.centered && props.top
			if (props.width) {
				style.width = normalizeWidth()
			}
			return style
		})
		const open = () => {
			if (props.openDelay && props.openDelay > 0) {
				window.setTimeout(() => {
					openTimer.value = null
					doOpen()
				}, props.openDelay)
			} else {
				doOpen()
			}
		}
		const close = () => {
			if (props.closeDelay && props.closeDelay > 0) {
				window.setTimeout(() => {
					closeTimer.value = null
					doClose()
				}, props.closeDelay)
			} else {
				doClose()
			}
		}
		const doOpen = () => {
			if (props.beforeOpen) {
				Promise.resolve(props.beforeOpen())
					.then((val) => {
						if (val) {
							visible.value = true
						}
					})
					.catch((err) => {
						console.log(err)
					})
			} else {
				visible.value = true
			}
		}
		const doClose = () => {
			if (props.beforeClose) {
				Promise.resolve(props.beforeClose())
					.then((val) => {
						if (val) {
							ctx.emit("update:modelValue", false)
							visible.value = false
						}
					})
					.catch((err) => {
						console.log(err)
					})
			} else {
				ctx.emit("update:modelValue", false)
				visible.value = false
			}
		}
		const animaAfterEnter = () => {
			ctx.emit("open")
		}
		const animaAfterLeave = () => {
			ctx.emit("close")
			if (props.destroyOnClose) {
				rendered.value = false
			}
		}
		const animaBeforeLeave = () => {
			ctx.emit("before-close")
		}
		const animaBeforeEnter = () => {
			ctx.emit("before-open")
		}
		watch(
			() => props.modelValue,
			(val) => {
				openChange(val)
			}
		)
		watch(
			() => props.open,
			(val) => {
				openChange(val)
			}
		)
		// open或者modelValue变化
		const openChange = (val) => {
			if (val) {
				closed.value = false
				open()
				rendered.value = true // enables lazy rendering
			} else {
				// this.$el.removeEventListener('scroll', this.updatePopper
				if (visible.value) {
					close()
				}
			}
		}
		onMounted(() => {
			if (props.modelValue || props.open) {
				closed.value = false
				rendered.value = true
				doOpen()
			}
		})
		return {
			closed,
			rendered,
			// eslint-disable-next-line vue/no-dupe-keys
			zIndex,
			visible,
			dialogRef,
			// eslint-disable-next-line vue/no-dupe-keys
			open,
			close,
			style,
			closeDialog,
			maskClickHandler,
			animaBeforeLeave,
			animaBeforeEnter,
			animaAfterEnter,
			animaAfterLeave
		}
	}
})
</script>

<style lang="less">
@import url(./style/index);
</style>
