<template>
    <trigger>
        <a class="wd-dropdown-link">
            Hover me
            <DownOutlined />
        </a>
        <div class="wd-dropdown wd-dropdown-placement-bottomLeft">
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
    </trigger>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import './style/index';
import Trigger from '../trigger/trigger.vue';
import {DownOutlined} from '@ant-design/icons-vue';
export default defineComponent({
    name: 'wd-dropdown',
    props: {
        
    },
    components: {
        Trigger,
        DownOutlined
    },
    emits: ['click'],
    setup(props, context) {
        
        return  {
            
        };
    }
});
</script>