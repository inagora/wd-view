<template>
    <div
        ref="dropdown"
        class="wd-dropdown-trigger">
        <!-- <div :class="['wd-dropdown', visibleValue ? 'wd-dropdown-show' : '']"> -->
            <!-- <menu></menu> -->
            <!-- <component :is="menu">
                <slot></slot>
            </component> -->
            <!-- <component :is="menu"/>
            <slot class="wd-dropdown-content wd-dropdown-menu"></slot> -->
            
        <!-- </div> -->
        <a class="wd-dropdown-link">
            Hover me
            <DownOutlined />
        </a>
        <div :class="['wd-dropdown', visibleValue ? 'wd-dropdown-show' : '']">
            <ul role="menu" class="wd-dropdown-content wd-dropdown-menu-light wd-dropdown-menu-root wd-dropdown-menu wd-dropdown-menu-vertical">
                <li role="menuitem" class="wd-dropdown-menu-item">
                    <a href="javascript:;">1st menu item</a>
                </li>
                <li role="menuitem" class="wd-dropdown-menu-item">
                    <a href="javascript:;">2nd menu item</a>
                </li>
                <li role="menuitem" class="wd-dropdown-menu-item">
                    <a href="javascript:;">3rd menu item</a>
                </li>
            </ul>
        </div>
    </div>
</template> 

<script lang="ts">
import {defineComponent, watch, ref, toRefs, computed, onMounted, nextTick} from 'vue';
import './style/index';
import {DownOutlined} from '@ant-design/icons-vue';
import Menu from './dropdown-menu.vue';
interface WdDropdownProps {
    disabled: boolean,
    visible: boolean,
    trigger: string
}
export default defineComponent({
    name: 'wd-dropdown',
    props: {
        disabled: Boolean, // 是否可用
        visible: { // 显示与隐藏
            type: Boolean,
            default: false
        },
        trigger: { // 控制显示与隐藏的方法
            type: String,
            default: 'hover'
        } 
    },
    components: {
        DownOutlined,
        Menu
    },
    emits: ['visibleChange'],
    setup(props: WdDropdownProps, context) {
        let {visible} = toRefs(props);
        let visibleValue = ref(visible.value);
        let dropdown = ref(null);
        let menu = ref('menu');
        const visibleChange = () => {
            context.emit('visibleChange', visibleValue.value);
        }
        const clickHandler = (e) => {
            visibleValue.value = !visibleValue.value;
            visibleChange();
        }
        const showMenu = () => {
            visibleValue.value = true;
            visibleChange();
        }
        const hideMenu = () => {
            visibleValue.value = false;
            visibleChange();
        }
        if(props.trigger === 'hover') {
            if(props.disabled) return;
            nextTick(() => {
                dropdown.value.addEventListener('mouseenter', showMenu, false);
                dropdown.value.addEventListener('mouseleave', hideMenu, false);
            });
        } else if(props.trigger === 'click') {
            if(props.disabled) return;
            nextTick(() => {
                dropdown.value.addEventListener('click', clickHandler, false);
            });
        } 
        onMounted(() => {
            console.log(dropdown);
        });
        return  {
            visibleValue,
            clickHandler,
            dropdown,
            menu
        };
    }
});
</script>