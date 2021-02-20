<template>
    <div v-show="showToast">{{msg}}</div>
</template>

<script lang="ts">
enum POSITION {
    top,
    center,
    bottom
}
import {ref, watch} from 'vue';
export default {
    name: 'toast',
    props: {
        msg: String,
        visible: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
            default: 3000
        }
    },
    setup(props) {
        console.log(props);
        let showToast = ref(false);
        watch(props.visible, () => {
            showToast = ref(props.visible);
        });
        setTimeout(() => {
            showToast.value = false;
        }, props.duration);
        return {
            showToast
        }
    }
}
</script>

<style>

</style>


