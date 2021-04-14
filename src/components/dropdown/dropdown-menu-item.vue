<template>
    <div>
        <slot></slot>
    </div>
</template> 

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'menuItem',
    setup() {
        const menuItem = 'menuItem';
        return {
            menuItem
        }
    }
});
</script>