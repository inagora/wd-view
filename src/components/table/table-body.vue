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
                    :key="column.dataIndex || column.key">
            </colgroup>
            <tbody class="wd-table-tbody">
                <tr 
                    class="wd-table-row"
                    v-for="(row, index) in store.dataSource"
                    :key="index"
                >
                    <td
                        :class="[column.ellipsis ? 'wd-table-row-cell-ellipsis' : 'wd-table-row-cell-break-word', column.type === 'checkbox' ? 'wd-table-selection-column' : '']" 
                        v-for="column in store.columns"
                        :key="column.dataIndex || column.key"
                        :title="column.ellipsis ? row[column.dataIndex] : ''">
                        <template
                            v-if="column.type === 'checkbox'">
                            <div class="wd-table-header-column">
                                <span class="wd-table-column-title">
                                    <div class="wd-table-selection">
                                        <wd-checkbox 
                                            :checked="row.isSelected"
                                            @change="selectChangeHandler"></wd-checkbox>
                                    </div>
                                </span>
                            </div>
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
import { defineComponent, PropType } from 'vue';
import {StoreProps} from './table-type';
export default defineComponent({
    name: 'table-body',
    props: {
        store: Object as PropType<StoreProps>
    },
    setup() {
        const selectChangeHandler = val => {

        }
        return {
            
        }
    }
})
</script>