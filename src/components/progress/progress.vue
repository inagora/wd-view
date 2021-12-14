<template>
    <div class="wd-progress">
        <wd-line 
            v-if="type === 'line'"
            :progress="progress" 
        />
        <wd-circle 
            v-else
            :progress="progress" 
        />
    </div>
</template>

<script lang="ts">
import WdLine from './line/index.vue';
import WdCircle from './circle/index.vue';
/**
 * type: line 直线；circle 圆形
 * progress: 当前进度
 * progressColor: 进度条颜色
 */
export default ({
    name: 'wd-progress',
    components: {
        WdLine,
        WdCircle
    },
    props: {
        type: {
           type: String,
           default: 'line' 
        },
        progress: {
            type: Number,
            default: 0
        },
        progressColor: {
            type: String,
            default: 'green'
        }
    },
    setup() {

    }
})
</script>

<style lang="less">

</style>


