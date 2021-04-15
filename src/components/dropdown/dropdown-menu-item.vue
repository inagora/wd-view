<template>
    <li class="wd-dropdown-menu-item">
        <slot></slot>
    </li>
</template> 

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'WdDropdownMenuItem',
    setup() {
        const menuItem = 'menuItem';
        return {
            menuItem
        }
    }
});
</script>