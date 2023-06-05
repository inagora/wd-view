<template>
	<ul class="wd-menu wd-menu-sub" data-menu-list="true">
		<li
			class="wd-menu-submenu-inline"
			:class="[
				submenu.selected ? 'wd-menu-submenu-selected wd-menu-submenu-open' : ''
			]"
			v-for="(submenu, subIndex) in menuList"
			:key="subIndex"
			:style="{
				paddingLeft: 24 + 'px',
				display: showSubMenu ? 'block' : 'none'
			}"
		>
			<div class="wd-menu-submenu-title" @click="submenuClickHandler(subIndex)">
				<span v-if="!submenu.icon" class="anticon"></span>
				<i
					v-if="submenu.icon"
					:class="['wd-icon', submenu.icon ? submenu.icon : '']"
				></i>
				<span class="wd-menu-title-content">{{ submenu.text }}</span>
				<i v-if="submenu.submenu" class="wd-menu-submenu-arrow"></i>
			</div>
			<wd-sub-menu
				:sub-menu-list="submenu.submenu"
				:show-sub-menu="submenu.selected"
				v-if="submenu.submenu"
				@click="emitClick"
			>
			</wd-sub-menu>
		</li>
	</ul>
</template>

<script lang="ts">
//
import { defineComponent } from 'vue';
import './style/index';
export default defineComponent({
	name: 'wd-sub-menu',
	props: {
		subMenuList: {
			type: Object
		},
		showSubMenu: {
			type: Boolean,
			default: false
		}
	},
	emits: ['click'], // onchange
	setup(props, context) {
		const menuList = props.subMenuList;
		const submenuClickHandler = (currentIndex) => {
			menuList.forEach((menu, index) => {
				if (index !== currentIndex) {
					menu.selected = false;
				}
			});
			menuList[currentIndex].selected = !menuList[currentIndex].selected;
			context.emit('click', { ...menuList[currentIndex] });
		};
		const emitClick = (params) => {
			context.emit('click', { ...params });
		};
		return {
			submenuClickHandler,
			menuList,
			emitClick
		};
	}
});
</script>
