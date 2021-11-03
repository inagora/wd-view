<template>
    <div class="wd-table-body">
        <table
            border="0"
            cellpadding="0"
            cellspacing="0">
            <!-- 设置对齐 -->
            <colgroup>
                <col
                    v-for="column in store.columns"
                    :width="column.width + 'px'"
                    :key="column.dataIndex || column.key">
            </colgroup>
            <tbody class="wd-table-tbody">
                <tr 
                    class="wd-table-row"
                    v-for="(row, index) in dataSource"
                    :key="index"
                    @click="rowClickHandler(row)"
                >
                    <td
                        :class="[
                            column.ellipsis ? 'wd-table-row-cell-ellipsis' : 'wd-table-row-cell-break-word', 
                            column.type === 'checkbox' || column.type === 'index' ? 'wd-table-selection-column' : '',
                            column.leftLast ? 'wd-table-fixed-left-last' : ''
                        ]" 
                        v-for="(column, index) in store.columns"
                        :style="filterColumnStyle(column, index)"
                        :key="column.dataIndex || column.key"
                        :title="column.ellipsis ? row[column.dataIndex] : ''"
                        @click="cellClickHandler(column.type, row, index, column.dataIndex, row[column.dataIndex])">
                        <template
                            v-if="column.type === 'checkbox'">
                            <div class="wd-table-header-column">
                                <span class="wd-table-column-title">
                                    <div class="wd-table-selection">
                                        <wd-checkbox 
                                            :checked="row.isSelected"
                                            @change="selectChangeHandler($event, index)"></wd-checkbox>
                                    </div>
                                </span>
                            </div>
                        </template>
                        <template
                            v-else-if="column.type === 'index'">
                            <span class="wd-table-column-title">
                                <div class="wd-table-selection">
                                    {{rowNum(column, index)}}
                                </div>
                            </span>
                        </template>
                        <template
                            v-else-if="column.render">
                            <span class="wd-table-column-title">
                                <div class="wd-table-selection" v-html="renderColumn(column, row)"></div>
                            </span>
                        </template>
                        <span v-else>
                            {{row[column.dataIndex]}}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, toRefs, reactive } from 'vue';
import {StoreProps} from './table-type';
export default defineComponent({
    name: 'table-body',
    props: {
        store: Object as PropType<StoreProps>
    },
    emits: ['select-change', 'cell-click', 'row-click'],
    setup(props, {emit}) {
        const {dataSource} = toRefs(reactive(props.store));
        const selectChangeHandler = (val, index) => {
            const store: any = toRefs(reactive(props.store));
            store.dataSource.value[index].isSelected = val;
            emit('select-change');
        }
        const cellClickHandler = (type, row, rowIndex, dataIndex, value) => {
            if(type === 'checkbox') return; // 如果点击的是选择列则不处理
            const clickRow = {...row};
            emit('cell-click', {row: clickRow, rowIndex, dataIndex, value});
        }
        const rowClickHandler = (row) => {
            emit('row-click', {...row});
        }
        const rowNum = (column, index) => {
            if(column.index && column.index instanceof Function) {
                return column.index(index);
            }
            return index;
        }
        // 自定义列样式
        const renderColumn = (column, row) => {
            if(column.render && column.render instanceof Function) {
                return column.render(column, row);
            }
        }
        const filterColumnStyle = (column, index) => {
            if(column.fixed === 'left') {
                return {position: column.fixed ? 'sticky' : '', left: index * column.width + 'px', zIndex: 1000 - index, backgroundColor: '#ffffff'};
            } else if(column.fixed === 'right') {
                return {position: column.fixed ? 'sticky' : '', right: index * column.width + 'px', zIndex: 1000 - index, backgroundColor: '#ffffff'};
            } else {
                return {};
            }
        }
        return {
            selectChangeHandler,
            cellClickHandler,
            rowClickHandler,
            rowNum,
            dataSource,
            filterColumnStyle,
            renderColumn
        }
    }
})
</script>