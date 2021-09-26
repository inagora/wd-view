<template>
    <div class="wd-table" :class="['wd-table-' + size]">
        <div class="wd-table-content">
            <!-- table header -->
            <table-header
                :columns="columns"></table-header>
            <!-- table body -->
            <table-body
                :columns="columns"></table-body>
        </div>
    </div>
</template> 

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import TableHeader from './table-header.vue';
import TableBody from './table-body.vue';

export default defineComponent({
  components: { TableHeader, TableBody },
    name: 'wd-table',
    props: {
        dataSource: {
            type: Object,
            default: () => {
                return {}
            }
        },
        columns: Object,
        size: {
            type: String,
            default: 'default'
        }
    },
    setup(props, {emit}) {
        return {
            
        }
    }
});
</script>
<style lang="less">
@import url(./style/index);
</style>