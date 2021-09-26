<template>
    <div class="wd-table-header">
        <table
            border="0"
            cellpadding="0"
            cellspacing="0">
            <colgroup>
                <col
                    v-for="column in store.columns"
                    :key="column.dataIndex || column.key"
                    width="100px">
            </colgroup>
            <thead class="wd-table-thead">
                <tr>
                    <th 
                        class="wd-table-row-cell-break-word" 
                        v-for="column in store.columns"
                        :key="column.dataIndex || column.key">
                        <div class="wd-table-header-column">
                            <span class="wd-table-column-title">{{column.title}}</span>
                        </div>
                    </th>
                </tr>
            </thead>
        </table>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType} from 'vue';
import {StoreProps} from './table-type';
export default defineComponent({
    name: 'table-header',
    props: {
        store: Object as PropType<StoreProps>
    },
    setup() {
        return {

        }
    }
})
</script>