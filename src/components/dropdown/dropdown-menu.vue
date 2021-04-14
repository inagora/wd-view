<template>
    <div class="wd-dropdown-content wd-dropdown-menu">
        <component :is="menuItem">
            <slot></slot>
        </component>
    </div>
</template> 

<script lang="ts">
import {defineComponent} from 'vue';
import MenuItem from './dropdown-menu-item.vue';
export default defineComponent({
    name: 'menu',
    components: {
        MenuItem
    },
    setup() {
        const menuItem = 'menuItem';
        return {
            menuItem
        }
    }
});
</script>