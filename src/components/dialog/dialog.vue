<template>
	<teleport to="body" :disabled="!appendToBody">
		<transition name="wd-dialog-fade">
			<div class="wd-dialog-mask" v-show="visible" @click="maskClickHandler">
				<div
					ref="dialogRef"
					:class="['wd-dialog', customClass]"
					:style="style"
					@click.stop=""
				>
					<div class="wd-dialog-content">
						<div class="wd-dialog-header">
							<slot name="title">
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
							<div class="wd-dialog-body">
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
import { defineComponent, ref, watch, computed, CSSProperties } from 'vue';
declare type TimeoutHandle = ReturnType<typeof global.setTimeout>;

export default defineComponent({
	name: 'WdDialog',
	props: {
		appendToBody: {
			type: Boolean,
			default: false,
		},
		customClass: {
			type: String,
			default: '',
		},
		closeOnClickModal: {
			type: Boolean,
			default: true,
		},
		showClose: {
			type: Boolean,
			default: true,
		},
		title: {
			type: String,
			default: '',
		},
		openDelay: {
			type: Number,
			default: 0,
		},
		closeDelay: {
			type: Number,
			default: 0,
		},
		top: {
			type: String,
			default: '15vh',
		},
		modelValue: {
			type: Boolean,
			required: true,
		},
		modalClass: String,
		width: {
			type: [String, Number],
			default: '50%',
		},
		zIndex: {
			type: Number,
		},
	},
	emits: ['close', 'open', 'update:modelValue'],
	setup(props, ctx) {
		const dialogRef = ref<HTMLElement>(null);
		const visible = ref(false);
		const closed = ref(false);
		const rendered = ref(false); // when desctroyOnClose is true, we initialize it as false vise versa
		const zIndex = ref(props.zIndex || 99);
		const openTimer = ref<TimeoutHandle>(null);
		const closeTimer = ref<TimeoutHandle>(null);
		const normalizeWidth = () => {
			return props.width;
		};

		// 关闭弹窗
		const closeDialog = () => {
			doClose();
		};

		// mask点击
		const maskClickHandler = () => {
			if (props.closeOnClickModal) {
				doClose();
			}
		};

		const style = computed(() => {
			const style = {} as CSSProperties;
			style.marginTop = props.top;
			if (props.width) {
				style.width = normalizeWidth();
			}
			return style;
		});
		const open = () => {
			if (props.openDelay && props.openDelay > 0) {
				window.setTimeout(() => {
					openTimer.value = null;
					doOpen();
				}, props.openDelay);
			} else {
				doOpen();
			}
		};
		const close = () => {
			if (props.closeDelay && props.closeDelay > 0) {
				window.setTimeout(() => {
					closeTimer.value = null;
					doClose();
				}, props.closeDelay);
			} else {
				doClose();
			}
		};
		const doOpen = () => {
			visible.value = true;
			ctx.emit('open');
		};
		const doClose = () => {
			visible.value = false;
			ctx.emit('close');
			ctx.emit('update:modelValue', false);
		};
		watch(
			() => props.modelValue,
			(val) => {
				if (val) {
					closed.value = false;
					open();
					rendered.value = true; // enables lazy rendering
					zIndex.value = props.zIndex ? zIndex.value++ : 99;
				} else {
					// this.$el.removeEventListener('scroll', this.updatePopper
					if (visible.value) {
						close();
					}
				}
			}
		);
		return {
			closed,
			rendered,
			zIndex,
			visible,
			dialogRef,
			open,
			close,
			style,
			closeDialog,
			maskClickHandler,
		};
	},
});
</script>

<style lang="less">
@import url(./style/index);
</style>
