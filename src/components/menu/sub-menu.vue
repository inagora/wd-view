<template>
  <ul
    class="wd-menu-sub"
    v-for="(submenu, subIndex) in menuList"
    :style="{
      paddingLeft: submenu.index * 12 + 'px',
      display: showSubMenu ? 'block' : 'none',
    }"
    data-menu-list="true"
    :key="subIndex"
  >
    <li class="wd-menu-item-group wd-menu-submenu-inline">
      <div
        class="wd-menu-item-group-title wd-menu-submenu-title"
        :class="[submenu.selected ? 'wd-menu-submenu-selected' : '']"
        @click="submenuClickHandler(subIndex)"
      >
        {{ submenu.text
        }}<i v-if="submenu.submenu" class="wd-menu-submenu-arrow"></i>
      </div>
      <wd-sub-menu
        :sub-menu-list="submenu.submenu"
        :show-sub-menu="submenu.selected"
        @click="emitClick"
      >
      </wd-sub-menu>
    </li>
  </ul>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent } from "vue";
import "./style/index";
export default defineComponent({
  name: "wd-sub-menu",
  props: {
    subMenuList: {
      type: Object,
    },
    showSubMenu: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"], // onchange
  setup(props, context) {
    const menuList = props.subMenuList;
    const submenuClickHandler = (currentIndex) => {
      menuList.forEach((menu, index) => {
        if (index !== currentIndex) {
          menu.selected = false;
        }
      });
      menuList[currentIndex].selected = !menuList[currentIndex].selected;
      context.emit("click", { ...menuList[currentIndex] });
    };
    const emitClick = (params) => {
      context.emit("click", { ...params });
    };
    return {
      submenuClickHandler,
      menuList,
      emitClick,
    };
  },
});
</script>
