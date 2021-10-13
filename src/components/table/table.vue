<template>
    <div 
        class="wd-table" 
        :class="['wd-table-' + size, store.bordered ? 'wd-table-bordered' : '', tableLayoutFixed ? 'wd-table-layout-fixed' : '']">
        <div class="wd-table-content">
            <!-- table header -->
            <table-header
                v-if="showHeader"
                :store="store"
                @select-change="selectChangeHandler"></table-header>
            <!-- table body -->
            <table-body
                :store="store"
                :data-source="dataSource"
                @select-change="selectChangeHandler"
                @cell-click="cellClickHandler"
                @row-click="rowClickHandler"></table-body>
        </div>
        <wd-pagination
            class="wd-table-pagination"
            :page-size="20"
            :page-count="20"
            :pager-count="5"
            :total="100"
            :current-page="15"
            @current-change="pageChangeHandler"
            @prev-click="prevClickChangeHandler"
            @next-click="nextClickChangeHandler"></wd-pagination>
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
 *     (2) header、body显示; header固定
 *     (3) 列的显示：折行、省略; 省略情况下增加title属性
 * 2、操作
 * 3、分页
 * 4、固定列
 * 5、列的选择
 * 6、表头操作
 * ...
 * 
 * tr自定义class
 * 自定义单元格
 * 行号 done
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
    emits: ['page-change', 'select-change', 'cell-click', 'row-click'],
    setup(props, {emit}) {
        const store = {} as StoreProps;
        store.columns = reactive(props.columns);
        store.dataSource = reactive(props.dataSource);
        store.bordered = props.bordered;
        let dataSource: any = store.dataSource;
        let tableLayoutFixed = ref(true);

        // 页码变化
        const pageChangeHandler = page => {
            emit('page-change', page);
        }
        // select-change
        const selectChangeHandler = () => {
            emit('select-change', dataSource.filter(item => item.isSelected).map(item => {
                const selectedRow = {...item};
                delete selectedRow.isSelected;
                return selectedRow;
            }));
        }
        // 获取选中的项
        const getSelectedRows = () => {
            return dataSource.filter(item => item.isSelected).map(item => {
                const selectedRow = {...item};
                delete selectedRow.isSelected;
                return selectedRow;
            });
        }
        // 行点击
        const cellClickHandler = ({row, rowIndex, dataIndex, value}) => {
            emit('cell-click', {row, rowIndex, dataIndex, value});
        }
        const rowClickHandler = (row) => {
            emit('row-click', row);
        }
        return {
            store,
            tableLayoutFixed,
            pageChangeHandler,
            selectChangeHandler,
            getSelectedRows,
            cellClickHandler,
            rowClickHandler
        }
    }
});
</script>
<style lang="less">
@import url(./style/index);
</style>