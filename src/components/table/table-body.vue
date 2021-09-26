<template>
    <div class="wd-table-body">
        <table
            border="0"
            cellpadding="0"
            cellspacing="0">
            <tbody class="wd-table-tbody">
                <tr class="wd-table-row">
                    <th 
                        class="wd-table-row-cell-break-word" 
                        v-for="column in columns"
                        :key="column.dataIndex || column.key">
                        {{column.title}}
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'table-body',
    props: {
        columns: Object
    },
    setup() {
        return {

        }
    }
})
</script>