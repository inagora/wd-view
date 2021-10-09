<template>
    <div class="wd-table-header">
        <table
            border="0"
            cellpadding="0"
            cellspacing="0">
            <colgroup>
                <col
                    v-for="column in store.columns"
                    :key="column.dataIndex || column.key">
            </colgroup>
            <thead class="wd-table-thead">
                <tr>
                    <th 
                        class="wd-table-row-cell-break-word" 
                        v-for="column in store.columns"
                        :key="column.dataIndex || column.key"
                        :class="[column.type === 'checkbox' ? 'wd-table-selection-column' : '']">
                        <template
                            v-if="column.type === 'checkbox'">
                            <div class="wd-table-header-column">
                                <span class="wd-table-column-title">
                                    <div class="wd-table-selection">
                                        <wd-checkbox
                                            @change="selectAllChangeHandler"></wd-checkbox>
                                    </div>
                                </span>
                            </div>
                        </template>
                        <div class="wd-table-header-column" v-else>
                            <span class="wd-table-column-title">{{column.title}}</span>
                        </div>
                    </th>
                </tr>
            </thead>
        </table>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, ref, watch} from 'vue';
import {StoreProps} from './table-type';
export default defineComponent({
    name: 'table-header',
    props: {
        store: Object as PropType<StoreProps>
    },
    setup(props) {
        let isSelectedAll = ref(false);
        let {store} = props;
        const selectAllChangeHandler = (val) => {
            let dataSource: any = store.dataSource;
            dataSource.forEach(data => {
                data.isSelected = val;
            });
        }
        watch(store.dataSource, (val) => {
            console.log(val);
        });
        return {
            isSelectedAll,
            selectAllChangeHandler
        }
    }
})
</script>