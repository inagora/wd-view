<template>
    <div class="wd-table" :class="['wd-table-' + size, store.bordered ? 'wd-table-bordered' : '', tableLayoutFixed ? 'wd-table-layout-fixed' : '']">
        <div class="wd-table-content">
            <!-- table header -->
            <table-header
                v-if="showHeader"
                :store="store"></table-header>
            <!-- table body -->
            <table-body
                :store="store"
                :data-source="dataSource"></table-body>
        </div>
    </div>
</template> 

<script lang="ts">
import {defineComponent, reactive, ref} from 'vue';
import TableHeader from './table-header.vue';
import TableBody from './table-body.vue';
import { StoreProps } from './table-type';

/**
 * 1、table基本功能：数据展示
 *     (1) bordered
 *     (2) header、body显示
 *     (3) 列的显示：折行、省略; 省略情况下增加title属性
 * 2、操作
 * 3、分页
 * 4、固定列
 * 5、列的选择
 * 6、表头操作
 * ...
 */
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
        columns: Array,
        size: {
            type: String,
            default: 'default'
        },
        bordered: {
            type: Boolean,
            default: false
        },
        showHeader: {
            type: Boolean,
            default: true
        }
    },
    setup(props, {emit}) {
        const store = {} as StoreProps;
        store.columns = reactive(props.columns);
        store.dataSource = reactive(props.dataSource);
        store.bordered = props.bordered;
        let tableLayoutFixed = ref(true);
        // const _columns = props.columns;
        // _columns.some(column as PropType<Column> => {
        //     return column.ellipsis;
        // });
        return {
            store,
            tableLayoutFixed
        }
    }
});
</script>
<style lang="less">
@import url(./style/index);
</style>