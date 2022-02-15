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
				<i
					v-if="menu.icon"
					:class="['wd-icon', menu.icon ? menu.icon : '']"
				></i>
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
		const iconLinks = document.querySelector('link[data-extra="wd-icon"]');
		if (!iconLinks) {
			// 动态加载css
			const linkUrl =
				'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css';
			const linkEl = document.createElement('link');
			linkEl.setAttribute('rel', 'stylesheet');
			linkEl.setAttribute('type', 'text/css');
			linkEl.setAttribute('data-extra', 'wd-icon');
			linkEl.setAttribute('href', linkUrl);
			document.getElementsByTagName('head')[0].appendChild(linkEl);
		}
		return {
			originalMenuList,
			setMenuCount,
			menuClickHandler,
			emitClick,
		};
	},
});
</script>
