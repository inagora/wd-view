<template>
	<teleport to="body" :disabled="!appendToBody">
		<transition
			:appear="appear"
			name="wd-drawer-fade"
			@before-leave="animaBeforeLeave"
			@before-enter="animaBeforeEnter"
			@after-enter="animaAfterEnter"
			@after-leave="animaAfterLeave"
		>
			<div
				v-show="visible"
				ref="drawerRef"
				:class="[
					'wd-drawer',
					'wd-drawer-' + placement,
					visible ? 'wd-drawer-open' : '',
					customClass
				]"
				@click.stop=""
				:style="{ zIndex }"
			>
				<div class="wd-drawer-mask" @click="maskClickHandler"></div>
				<div class="wd-drawer-content-wrapper" :style="style">
					<div class="wd-drawer-content">
						<div class="wd-drawer-wrapper-body">
							<div class="wd-drawer-header">
								<button
									v-if="showClose"
									@click="closeDrawer"
									class="wd-drawer-close"
								>
									<span class="wd-drawer-close-x">
										<i
											aria-label="图标: close"
											class="anticon anticon-close wd-drawer-close-icon"
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
								<slot name="title">
									<span class="wd-drawer-title">
										{{ title }}
									</span>
								</slot>
							</div>
							<template v-if="rendered">
								<div class="wd-drawer-body">
									<slot></slot>
								</div>
							</template>
							<div v-if="$slots.footer" class="wd-drawer-footer">
								<slot name="footer"></slot>
							</div>
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
} from 'vue';
export default defineComponent({
	name: 'WdDrawer',
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
			default: ''
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
			default: ''
		},
		modelValue: {
			type: Boolean,
			required: true
		},
		modalClass: String,
		width: {
			type: [String, Number],
			default: '50%'
		},
		zIndex: {
			type: Number
		},
		placement: {
			type: String,
			default: 'right'
		},
		appear: {
			type: Boolean,
			default: false
		},
		open: {
			// 使用open控制时，必须要调用close
			type: Boolean,
			default: false
		}
	},
	emits: ['close', 'open', 'before-close', 'before-open', 'update:modelValue'],
	setup(props, ctx) {
		const drawerRef = ref<HTMLElement>(null);
		const visible = ref(false);
		const closed = ref(false);
		const rendered = ref(false);
		const zIndex = ref(props.zIndex);

		// 关闭
		const closeDrawer = () => {
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
			let placement = props.placement;
			if (placement === 'left') {
				style.width = props.width;
				style.transform = visible.value ? 'translateX(0)' : 'translateX(-100%)';
			} else if (placement === 'right') {
				style.width = props.width;
				style.transform = visible.value ? 'translateX(0)' : 'translateX(100%)';
			} else if (placement === 'top') {
				style.height = props.width;
				style.transform = visible.value ? 'translateY(0)' : 'translateY(-100%)';
			} else if (placement === 'bottom') {
				style.height = props.width;
				style.transform = visible.value ? 'translateY(0)' : 'translateY(100%)';
			}
			return style;
		});
		const doOpen = () => {
			if (props.beforeOpen) {
				Promise.resolve(props.beforeOpen())
					.then((val) => {
						if (val) {
							visible.value = true;
						}
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				visible.value = true;
			}
		};
		const doClose = () => {
			if (props.beforeClose) {
				Promise.resolve(props.beforeClose())
					.then((val) => {
						if (val) {
							ctx.emit('update:modelValue', false);
							visible.value = false;
						}
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				ctx.emit('update:modelValue', false);
				visible.value = false;
			}
		};
		const animaAfterEnter = () => {
			ctx.emit('open');
		};
		const animaAfterLeave = () => {
			ctx.emit('close');
			if (props.destroyOnClose) {
				rendered.value = false;
			}
		};
		const animaBeforeLeave = () => {
			ctx.emit('before-close');
		};
		const animaBeforeEnter = () => {
			ctx.emit('before-open');
		};
		watch(
			() => props.modelValue,
			(val) => {
				openChange(val);
			}
		);
		watch(
			() => props.open,
			(val) => {
				openChange(val);
			}
		);
		const openChange = (val) => {
			if (val) {
				closed.value = false;
				doOpen();
				rendered.value = true; // enables lazy rendering
			} else {
				if (visible.value) {
					doClose();
				}
			}
		};
		onMounted(() => {
			if (props.modelValue || props.open) {
				closed.value = false;
				rendered.value = true;
				doOpen();
			}
		});
		return {
			closed,
			rendered,
			// eslint-disable-next-line vue/no-dupe-keys
			zIndex,
			visible,
			drawerRef,
			// eslint-disable-next-line vue/no-dupe-keys
			open,
			close,
			style,
			closeDrawer,
			maskClickHandler,
			animaBeforeLeave,
			animaBeforeEnter,
			animaAfterEnter,
			animaAfterLeave
		};
	}
});
</script>

<style lang="less">
@import url(./style/index);
</style>
