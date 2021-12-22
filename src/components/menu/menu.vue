<template>
  <ul
    class="wd-menu wd-menu-root wd-menu-inline"
    :class="['wd-menu-' + theme]"
    style="width: 256px"
  >
    <li
      class="wd-menu-submenu wd-menu-submenu-inline"
      :class="[menu.selected ? 'wd-menu-submenu-selected' : '']"
      v-for="(menu, index) in originalMenuList"
      :key="index"
    >
      <div
        class="wd-menu-submenu-title"
        style="padding-left: 24px"
        @click="menuClickHandler(index)"
      >
        <span class="anticon anticon-mail wd-menu-item-icon">
          <BarsOutlined />
        </span>
        <span class="wd-menu-title-content">{{ menu.text }}</span>
        <i class="wd-menu-submenu-arrow"></i>
      </div>
      <sub-menu
        :sub-menu-list="menu.submenu"
        :show-sub-menu="menu.selected"
        @click="emitClick"
      >
      </sub-menu>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import "./style/index";
import SubMenu from "./sub-menu.vue";
import { BarsOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "wd-menu",
  props: {
    menuList: {
      type: Object,
    },
    theme: {
      type: String,
      default: "light",
    },
  },
  components: {
    SubMenu,
    BarsOutlined,
  },
  emits: ["click"], // onchange
  setup(props, context) {
    const originalMenuList = props.menuList;
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
      originalMenuList[currentIndex].selected = !originalMenuList[currentIndex].selected;
    };

    const emitClick = (params) => {
      context.emit("click", params);
    };

    return {
      originalMenuList,
      setMenuCount,
      menuClickHandler,
      emitClick,
    };
  },
});
</script>
