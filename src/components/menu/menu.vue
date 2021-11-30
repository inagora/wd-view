<template>
    <ul 
        class="wd-menu wd-menu-root wd-menu-inline"
        :class="['wd-menu-' + theme]" 
        style="width: 256px;"
    >
        <li 
            class="wd-menu-submenu wd-menu-submenu-inline"
            :class="[menu.selected ? 'wd-menu-submenu-selected' : '']"
            v-for="(menu, index) in _menuList"
            :key="index"
        >
            <div 
                class="wd-menu-submenu-title"
                style="padding-left: 24px;"
                @click="menuClickHandler(index)"
            >
                <span class="anticon anticon-mail wd-menu-item-icon">
                    <svg focusable="false" class="" data-icon="mail" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
                </span>
                <span class="wd-menu-title-content">{{menu.text}}</span>
                <i class="wd-menu-submenu-arrow"></i>
            </div>
            <sub-menu 
                :sub-menu-list="menu.submenu" 
                :show-sub-menu="menu.selected"
                @click="emitClick">
            </sub-menu>
        </li>
    </ul>
</template> 

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import './style/index';
import SubMenu from './sub-menu.vue';
export default defineComponent({
    name: 'wd-menu',
    props: {
        menuList: {
            type: Object
        },
        theme: {
            type: String,
            default: 'light'
        }
    },
    components: {
        SubMenu
    },
    emits: ['click'], // onchange
    setup(props, context) {
        const _menuList = props.menuList;
        const setMenuCount = (submenu, count) => {
            ++count;
            if(submenu) {
                submenu.forEach(menu => {
                    menu.index = count;
                    setMenuCount(menu.submenu, count);
                });
            }
        }
        _menuList.forEach(menu => {
            let menuCount = 0;
            if(menu.submenu.length > 0) {
                setMenuCount(menu.submenu, menuCount);
            }
        });

        // menu的点击，显示子menu
        const menuClickHandler = (currentIndex) => {
            _menuList.forEach((menu, index) => {
                if(index !== currentIndex) {
                  menu.selected = false;
                }
            });
            _menuList[currentIndex].selected = !_menuList[currentIndex].selected;
        }

        const emitClick = params => {
            context.emit('click', params);
        }
        
        return {
            _menuList,
            setMenuCount,
            menuClickHandler,
            emitClick
        }
    }
});
</script>