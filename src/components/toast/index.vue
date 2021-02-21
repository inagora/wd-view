<template>
    <div class="wd-toast" v-show="showToast">{{msg}}</div>
</template>

<script lang="ts">
enum POSITION {
    top,
    center,
    bottom
}
import {ref, watch, toRefs} from 'vue';
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
        let {msg, visible, duration} = toRefs(props);
        let showToast = ref(true);
        watch(duration, () => {
            setTimeout(() => {
                showToast.value = false;
            }, duration.value);
        });
        watch(visible, () => {
            showToast.value = true;
        });
        return {
            showToast
        }
    }
}
</script>

<style>

</style>


