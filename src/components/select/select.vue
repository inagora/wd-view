<template>
	<popper offset-distance="0" offsetSkid="0">
		<div
			ref="selectWrapper"
			class="wd-select"
			:class="[
				selectDisabled ? 'wd-select-disabled' : 'wd-select-enabled',
				'wd-select-' + inputSize,
				multiple ? ' wd-select-multiple' : ' wd-select-single',
			]"
		>
			<div class="select-trigger">
				<div
					v-if="multiple"
					tabindex="0"
					ref="selectSelector"
					class="wd-select-selector"
				>
					<div
						role="combobox"
						class="wd-select-selection wd-select-selection--multiple"
					>
						<span
							v-for="(selected, index) in selectedArray"
							:key="index"
							class="wd-select-selection-item"
						>
							<span class="wd-select-selection-item-content">
								{{ selectedItem.label }}
							</span>
							<span
								@click="removeSelectedItem(index)"
								class="wd-select-selection-item-remove"
								unselectable="on"
								aria-hidden="true"
								style="user-select: none"
								><span
									role="img"
									aria-label="close"
									class="anticon anticon-close"
									><svg
										focusable="false"
										class=""
										data-icon="close"
										width="1em"
										height="1em"
										fill="currentColor"
										aria-hidden="true"
										viewBox="64 64 896 896"
									>
										<path
											d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
										></path></svg></span
							></span>
						</span>
						<span class="wd-select-selection-item wd-select-selection-search">
							<input
								ref="searchInput"
								:style="{ opacity: isFocused ? 1 : 0 }"
								:placeholder="currentPlaceholder"
								class="wd-select-selection-search-input"
								@input="debouncedOnInputChange"
								@focus="handleSearchInputFocus"
								@blur="handleSearchInputBlur"
								@keydown="handleSearchInputKeydown"
							/>
							<span style="visibility: hidden">{{ searchKey }}</span>
						</span>
					</div>
					<span
						unselectable="on"
						class="wd-select-arrow"
						style="user-select: none"
					>
						<i
							aria-label="图标: down"
							class="anticon anticon-down wd-select-arrow-icon"
						>
							<svg
								viewBox="64 64 896 896"
								data-icon="down"
								width="1em"
								height="1em"
								fill="currentColor"
								aria-hidden="true"
								focusable="false"
								class=""
							>
								<path
									d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
								></path>
							</svg>
						</i>
					</span>
				</div>
				<div
					v-else
					tabindex="1"
					ref="selectSelector"
					class="wd-select-selector"
				>
					<!-- <span class="wd-select-selection-search">
          <input
            ref="searchInput"
            v-model="searchKey"
            :style="{ opacity: isFocused ? 1 : 0 }"
            :placeholder="currentPlaceholder"
            class="wd-select-selection-search-input"
            @input="handleSearchInputChange"
            @focus="handleSearchInputFocus"
            @keydown="handleSearchInputKeydown"
          />
        </span> -->
					<div
						role="combobox"
						class="wd-select-selection wd-select-selection--single"
					>
						<div
							class="wd-select-selection-item"
							v-if="selectedValue && !isFocused"
						>
							{{ selectedItem.label }}
						</div>
						<div v-else-if="!isFocused" class="wd-select-selection-placeholder">
							{{ placeholder }}
						</div>
						<span
							unselectable="on"
							class="wd-select-arrow"
							style="user-select: none"
						>
							<i
								aria-label="图标: down"
								class="anticon anticon-down wd-select-arrow-icon"
							>
								<svg
									viewBox="64 64 896 896"
									data-icon="down"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
									focusable="false"
									class=""
								>
									<path
										d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
									></path>
								</svg>
							</i>
						</span>
					</div>
				</div>
			</div>
		</div>
		<template #content="{ close }">
			<div class="wd-select-options" @click="close">
				<slot></slot>
			</div>
		</template>
	</popper>
</template>

<script lang="ts">
import Popper from 'vue3-popper';
import { defineComponent, reactive, ref, toRefs, provide, inject } from 'vue';
import {
	wdFormKey,
	wdFormItemKey,
	WdFormProps,
	WdFormItemProps,
} from '../form/props';
type optionType = {
	value: any;
	selected: boolean;
};
// import WdPopper from '../popper/index';
import WdInput from '../input/index';
export default defineComponent({
	name: 'wd-select',
	components: {
		WdInput,
		Popper,
	},
	props: {
		modelValue: [Array, String, Number, Boolean, Object],
		autocomplete: {
			type: String,
			default: 'off',
		},
		disabled: Boolean,
		clearable: Boolean,
		filterable: Boolean,
		allowCreate: Boolean, // 是否允许用户自己创建选项
		loading: Boolean, // 远程加载
		remote: Boolean, // 是否是远程加载
		loadingText: String,
		noDataText: String,
		remoteMethod: Function,
		multiple: Boolean, // 是否多选
		autoClose: {
			type: Boolean,
			default: true,
		}, // 选择后是否自动收起选项
		multipleLimit: {
			type: Number,
		},
		placeholder: {
			type: String,
		},
		clearIcon: {
			type: String,
			default: 'a-icon-circle-close',
		},
		visibleValue: {
			type: Boolean,
			default: false,
		},
		valueType: {
			// 选项是否是标签
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: 'small',
		},
	},
	emits: [
		'update:modelValue',
		'change',
		'remove-tag',
		'clear',
		'visibleChange',
		'focus',
		'blur',
	],
	setup(props, context) {
		const sizeMap = reactive({
			small: 'sm',
			large: 'lg',
			default: '',
		});
		const wdForm = inject(wdFormKey, {} as WdFormProps);
		const wdFormItem = inject(wdFormItemKey, {} as WdFormItemProps);
		let inputSize =
			sizeMap[props.size] || sizeMap[wdFormItem.size] || sizeMap[wdForm.size];
		let selectDisabled =
			props.disabled || wdFormItem.disabled || wdForm.disabled;
		const { emit } = context;
		const slots = context.slots;
		const selectSelector = ref(null);
		const selectWrapper = ref<HTMLElement | null>(null);
		const isMultiple = ref(props.multiple);
		const placeholder = ref(props.placeholder);
		const removeItem = ref(null); // 删除的元素
		const searchKey = ref(''); // 搜索关键词
		const searchInput = ref(null); // 搜索框
		let selectedValue = ref(props.modelValue);
		let selectedItem: any = ref({
			label: '',
			value: '',
		});
		let selectedArray = ref([]);
		let { visibleValue } = toRefs(props);
		let isFocused = ref(false);
		const optionsArray = slots.default().map((item) => {
			if (item.props.value === selectedValue.value) {
				selectedItem.value = item.props;
			}
			return item.props;
		});
		// 初始化input的placeholder
		let currentPlaceholder = ref(placeholder.value);
		const handleSearchInputFocus = () => {
			isFocused.value = true;
			setCurrentPlaceholder();
		};
		const handleSearchInputBlur = () => {
			isFocused.value = false;
			// searchKey.value = ''; // 失去焦点之后清空输入的key
			currentPlaceholder.value = '';
		};
		const setCurrentPlaceholder = () => {
			const selectedLabel: any = selectedValue && selectedValue.value;
			currentPlaceholder.value = selectedLabel && selectedLabel.label;
		};

		// 处理搜素
		const handleSearchInputChange = (val) => {
			searchKey.value = val;
		};

		// 多选删除
		const handleSearchInputKeydown = (e) => {
			if (selectedArray.value.length === 0) return;
			const keyCode = e.keyCode;
			if (keyCode === 8 && !searchKey.value) {
				removeSelectedItem(selectedArray.value.length - 1);
			}
		};
		// 选项显示与隐藏钩子
		const visibleChange = () => {
			context.emit('visibleChange', visibleValue.value);
		};
		// option item 点击
		const optionClickHandler = (value) => {
			setSelectedValue(value);
		};
		// 设置选择的值
		const setSelectedValue = (val: optionType) => {
			let options: any = slots.default();
			// if (options && options[0].children) options = options[0].children;
			if (isMultiple.value) {
				// 多选
				if (val.selected) {
					let selectedOption = options.filter((item) => {
						return item.props.value === val.value;
					})[0];
					selectedArray.value.push(selectedOption.props);
				} else {
					let removeIndex = -1;
					selectedArray.value.forEach((item, index) => {
						if (item.value === val.value) removeIndex = index;
					});
					if (removeIndex > -1) {
						selectedArray.value.splice(removeIndex, 1);
					}
				}
			} else {
				let selectedOption = options.filter((item) => {
					return item.props.value === val.value;
				})[0];
				selectedValue.value = selectedOption.props;
				selectedItem.value = selectedOption.props;
			}
			setCurrentPlaceholder();
			emit('update:modelValue', val.value);
			emit('change', val.value);
			// searchInput.value.focus();
		};
		const removeSelectedItem = (index) => {
			removeItem.value = selectedArray.value.splice(index, 1)[0];
		};
		provide('selectedItem', selectedValue);
		provide('removeItem', removeItem);
		provide('multiple', isMultiple.value);
		// vue3中没有$on，所以用provide方法将父组件的方法传给子组件，子组件直接调用
		provide('optionClickHandler', optionClickHandler);
		provide('selectedArray', selectedArray.value);
		provide('limitCount', props.multipleLimit);
		provide('searchKey', searchKey);
		provide('options', optionsArray);

		return {
			sizeMap,
			selectSelector,
			selectWrapper,
			visibleChange,
			selectedValue,
			optionClickHandler,
			selectedArray,
			removeSelectedItem,
			isFocused,
			currentPlaceholder,
			handleSearchInputFocus,
			handleSearchInputBlur,
			handleSearchInputChange,
			searchKey,
			handleSearchInputKeydown,
			searchInput,
			inputSize,
			selectDisabled,
			optionsArray,
			selectedItem,
		};
	},
});
</script>
<style lang="less">
@import url(./style/index);
// .wd-popper {
//     transform: translate3d(12px, 100px, 0) !important;
// }
</style>
