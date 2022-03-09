<template>
	<ul
		class="wd-pagination"
		:class="[
			disabled ? 'wd-pagination-disabled' : '',
			'wd-pagination-' + position,
		]"
	>
		<li class="wd-pagination-total-text" v-if="showTotal">{{ totalText }}</li>
		<li
			class="wd-pagination-prev"
			:class="{ 'wd-pagination-disabled': newCurrentPage === 1 }"
			:title="prevText || '上一页'"
			@click="prevPageClickHandler"
		>
			<span v-if="prevText">{{ prevText }}</span>
			<a v-else class="wd-pagination-item-link">
				<wd-icon icon="bi-chevron-left" />
			</a>
		</li>
		<li
			v-if="pageCount > 0"
			:class="{ 'wd-pagination-item-active': newCurrentPage === 1, disabled }"
			class="wd-pagination-item wd-pagination-item-1"
			@click="pageClickHandler(1)"
		>
			<a>1</a>
		</li>
		<li
			v-if="showPrevMore"
			class="wd-pagination-jump-prev wd-pagination-jump-prev-custom-icon"
			@mouseenter="onMouseenter('left')"
			@mouseleave="quickprevIconClass = 'icon-more'"
			@click="moreLeftClickHandler"
		>
			<a class="wd-pagination-item-link">
				<div class="wd-pagination-item-container">
					<wd-icon
						v-if="quickprevIconClass === 'arrow-left'"
						icon="bi-chevron-double-left"
					/>
					<span v-else class="wd-pagination-item-ellipsis">···</span>
				</div>
			</a>
		</li>
		<li
			class="wd-pagination-item"
			:class="[
				page === newCurrentPage ? 'wd-pagination-item-active' : '',
				'wd-pagination-item-' + page,
			]"
			v-for="page in pagers"
			:key="page"
			@click="pageClickHandler(page)"
		>
			<a>{{ page }}</a>
		</li>
		<li
			v-if="showNextMore"
			class="wd-pagination-jump-next wd-pagination-jump-next-custom-icon"
			@mouseenter="onMouseenter('right')"
			@mouseleave="quicknextIconClass = 'icon-more'"
			@click="moreRightClickHandler"
		>
			<a class="wd-pagination-item-link">
				<div class="wd-pagination-item-container">
					<wd-icon
						v-if="quicknextIconClass === 'arrow-right'"
						icon="bi-chevron-double-right"
					/>
					<span v-else class="wd-pagination-item-ellipsis">···</span>
				</div>
			</a>
		</li>
		<li
			v-if="pageCount > 1"
			:class="[
				newCurrentPage === pageCount ? 'wd-pagination-item-active' : '',
				'wd-pagination-item-' + pageCount,
			]"
			class="wd-pagination-item"
			@click="pageClickHandler(pageCount)"
		>
			<a>{{ pageCount }}</a>
		</li>
		<li
			class="wd-pagination-next"
			:class="{ 'wd-pagination-disabled': newCurrentPage === pageCount }"
			:title="nextText || '下一页'"
			@click="nextPageClickHandler"
		>
			<span v-if="nextText">{{ nextText }}</span>
			<a v-else class="wd-pagination-item-link">
				<wd-icon icon="bi-chevron-right" />
			</a>
		</li>
		<!-- <li class="wd-pagination-options">
            <wd-select size="default">
                <wd-option label="研究生" value="baidu">hhh</wd-option>    
                <wd-option label="本科" value="google">hhh</wd-option>    
                <wd-option label="专科" value="bing">hhh</wd-option> 
            </wd-select>
        </li> -->
	</ul>
</template>

<script lang="ts">
/**
 * pagesize选择
 */
import {
	defineComponent,
	reactive,
	ref,
	computed,
	watchEffect,
	watch,
	PropType,
} from 'vue';
interface PropsType {
	pageSize: number;
	total: number;
	pageCount: number;
	currentPage: number;
	disabled: boolean;
	prevText: string;
	nextText: string;
	pagerCount: number;
	showTotal: any;
}
import WdIcon from '../icon/icon.vue';
export default defineComponent({
	name: 'wd-pagination',
	components: {
		WdIcon,
	},
	props: {
		pageSize: Number,
		total: Number,
		pageCount: {
			type: Number,
			default: 1,
		},
		currentPage: Number,
		disabled: {
			type: Boolean,
			default: false,
		},
		prevText: String,
		nextText: String,
		pagerCount: {
			type: Number,
			validator: (value: number) => {
				return (
					(value | 0) === value && value > 4 && value < 22 && value % 2 === 1
				);
			},
			default: 7,
		},
		position: {
			type: String,
			default: 'right',
		},
		showTotal: [Boolean, Object],
	},
	emits: ['current-change', 'prev-click', 'next-click'],
	setup(props: PropsType, { emit }) {
		const { currentPage, pageCount } = reactive(props);
		let prevDisabled = ref(false);
		let newCurrentPage = ref(currentPage);
		const showPrevMore = ref(false);
		const showNextMore = ref(false);
		const quicknextIconClass = ref('icon-more');
		const quickprevIconClass = ref('icon-more');
		const pagers = ref([]);
		watchEffect(() => {
			const pagerCount = props.pagerCount;
			const halfPagerCount = (pagerCount - 1) / 2;
			const currentPage = newCurrentPage.value;
			const pageCount = Number(props.pageCount);

			let showPrevMore = false;
			let showNextMore = false;
			if (pageCount > pagerCount) {
				if (currentPage > pagerCount - halfPagerCount) {
					showPrevMore = true;
				}
				if (currentPage < pageCount - halfPagerCount) {
					showNextMore = true;
				}
			}
			const array = [];
			if (showPrevMore && !showNextMore) {
				const startPage = pageCount - (pagerCount - 2);
				for (let i = startPage; i < pageCount; i++) {
					array.push(i);
				}
			} else if (!showPrevMore && showNextMore) {
				for (let i = 2; i < pagerCount; i++) {
					array.push(i);
				}
			} else if (showPrevMore && showNextMore) {
				const offset = Math.floor(pagerCount / 2) - 1;
				for (let i = currentPage - offset; i <= currentPage + offset; i++) {
					array.push(i);
				}
			} else {
				for (let i = 2; i < pageCount; i++) {
					array.push(i);
				}
			}
			pagers.value = array;
		});
		watchEffect(() => {
			const halfPagerCount = (props.pagerCount - 1) / 2;

			showPrevMore.value = false;
			showNextMore.value = false;

			if (props.pageCount > props.pagerCount) {
				if (newCurrentPage.value > props.pagerCount - halfPagerCount) {
					showPrevMore.value = true;
				}
				if (newCurrentPage.value < props.pageCount - halfPagerCount) {
					showNextMore.value = true;
				}
			}
		});

		watchEffect(() => {
			if (props.disabled) return;
			if (!showPrevMore.value) quickprevIconClass.value = 'icon-more';
		});
		watchEffect(() => {
			if (props.disabled) return;
			if (!showNextMore.value) quicknextIconClass.value = 'icon-more';
		});
		watch(
			() => newCurrentPage.value,
			(val) => {
				if (props.disabled) return;
				emit('current-change', val);
			}
		);

		function onMouseenter(direction: 'left' | 'right') {
			if (props.disabled) return;
			if (direction === 'left') {
				quickprevIconClass.value = 'arrow-left';
			} else {
				quicknextIconClass.value = 'arrow-right';
			}
		}

		const pageClickHandler = (page) => {
			if (newCurrentPage.value === page || props.disabled) return; // 同一页码点击
			newCurrentPage.value = page;
		};
		// 更多点击
		const moreLeftClickHandler = () => {
			if (props.disabled) return;
			const pageCountOffset = props.pagerCount - 2;
			newCurrentPage.value = newCurrentPage.value - pageCountOffset;
			if (newCurrentPage.value < 1) {
				newCurrentPage.value = 1;
			}
		};
		const moreRightClickHandler = () => {
			if (props.disabled) return;
			const pageCountOffset = props.pagerCount - 2;
			newCurrentPage.value = newCurrentPage.value + pageCountOffset;
			if (newCurrentPage.value > props.pageCount) {
				newCurrentPage.value = props.pageCount;
			}
		};
		// 上一页
		const prevPageClickHandler = () => {
			if (props.disabled) return;
			if (--newCurrentPage.value < 1) {
				prevDisabled.value = true;
				newCurrentPage.value = 1;
				return;
			}
			emit('prev-click', newCurrentPage.value);
		};
		// 下一页
		const nextPageClickHandler = () => {
			if (props.disabled) return;
			if (++newCurrentPage.value > props.pageCount) {
				prevDisabled.value = true;
				newCurrentPage.value = props.pageCount;
				return;
			}
			emit('next-click', newCurrentPage.value);
		};
		// 处理总数据
		let totalText = ref('');
		watchEffect(() => {
			if (props.showTotal) {
				if (typeof props.showTotal === 'function') {
					totalText.value = props.showTotal();
				} else {
					totalText.value = `共${props.total}条`;
				}
			}
		});

		return {
			pageClickHandler,
			prevPageClickHandler,
			nextPageClickHandler,
			onMouseenter,
			moreLeftClickHandler,
			moreRightClickHandler,
			newCurrentPage,
			pagers,
			showPrevMore,
			showNextMore,
			quickprevIconClass,
			quicknextIconClass,
			totalText,
		};
	},
});
</script>
<style lang="less">
@import url(./style/index);
</style>
