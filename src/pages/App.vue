<template>
    <div>{{counter}}</div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';
export default {
    name: 'App',
    setup() {
        let counter = ref(1);
        // setInterval(() => {
        //     counter.value++;
        //     console.log(counter);
        // }, 1000);
        return {counter}
    }
}
</script>

