<template>
    <div class="wd-table-header">
        <table
            border="0"
            cellpadding="0"
            cellspacing="0">
            <thead class="wd-table-thead">
                <tr>
                    <th 
                        class="wd-table-row-cell-break-word" 
                        v-for="column in columns"
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
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'table-header',
    props: {
        columns: Object
    },
    setup() {
        return {

        }
    }
})
</script>