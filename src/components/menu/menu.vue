<template>
	<ul
		class="wd-menu wd-menu-root wd-menu-inline"
		:class="['wd-menu-' + theme]"
		style="width: 256px"
	>
		<li
			class="wd-menu-submenu-inline"
			:class="[
				menu.selected ? 'wd-menu-submenu-selected wd-menu-submenu-open' : '',
				menu.submenu ? 'wd-menu-submenu' : 'wd-menu-item',
			]"
			v-for="(menu, index) in originalMenuList"
			:key="index"
		>
			<div
				class="wd-menu-submenu-title"
				style="padding-left: 24px"
				@click="menuClickHandler(index)"
			>
				<wd-icon v-if="menu.icon" :icon="menu.icon" />
				<span class="wd-menu-title-content">{{ menu.text }}</span>
				<i class="wd-menu-submenu-arrow"></i>
			</div>
			<sub-menu
				:sub-menu-list="menu.submenu"
				:show-sub-menu="menu.selected"
				v-if="menu.submenu"
				@click="emitClick"
			>
			</sub-menu>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue';
import './style/index';
import SubMenu from './sub-menu.vue';
import WdIcon from '../icon/icon.vue';
export default defineComponent({
	name: 'wd-menu',
	props: {
		menuList: {
			type: Object,
		},
		theme: {
			type: String,
			default: 'light',
		},
	},
	components: {
		SubMenu,
		WdIcon,
	},
	emits: ['click'], // onchange
	setup(props, context) {
		let originalMenuList = reactive(props.menuList);
		const setMenuCount = (submenu, count, parentMenu) => {
			++count;
			if (submenu) {
				submenu.forEach((menu) => {
					menu.index = count;
					setMenuCount(menu.submenu, count, submenu);
					if (menu.open) {
						parentMenu.open = true;
					}
				});
			}
		};
		originalMenuList.forEach((menu) => {
			let menuCount = 0;
			if (menu.submenu.length > 0) {
				setMenuCount(menu.submenu, menuCount, menu);
			}
			if (menu.open) {
				menu.selected = true;
			}
		});

		// menu的点击，显示子menu
		const menuClickHandler = (currentIndex) => {
			originalMenuList.forEach((menu, index) => {
				if (index !== currentIndex) {
					menu.selected = false;
				}
			});
			originalMenuList[currentIndex].selected =
				!originalMenuList[currentIndex].selected;
		};

		const emitClick = (params) => {
			context.emit('click', params);
		};
		watchEffect(() => {
			originalMenuList = reactive(props.menuList);
			console.log(originalMenuList);
		});
		return {
			originalMenuList,
			setMenuCount,
			menuClickHandler,
			emitClick,
		};
	},
});
</script>
