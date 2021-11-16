<template>
    <div class="container">
        <wd-button @click="getTableRows" type="primary">获取选择项</wd-button>
        <wd-table
            ref="wdTable"
            :columns="tableColumns"
            :data-source="dataList"
            :show-header="true"
            size="small"
            bordered
            :sticky="true"
            @page-change="pageChangeHandler"
            @select-change="tableSelectChangeHandler"
            @cellClick="cellClickHandler"
            @rowClick="rowClickHandler"></wd-table>
    </div>
</template>

<script lang="ts">
import {ref, defineComponent, reactive, onMounted} from 'vue';
export default defineComponent({
    name: 'Table',
    setup() {

        // 获取table引用
        let wdTable = ref(null);
        
        const textData = ref('');

        // table数据
        const tableColumns = [
            // {
            //     title: '',
            //     dataIndex: '',
            //     key: '',
            //     type: 'checkbox'
            // },
            // {
            //     type: 'index',
            //     index: (index) => {
            //         return index * 2;
            //     }
            // },
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '商品名',
                dataIndex: 'goods_name',
                key: 'goods_name',
                ellipsis: true,
                fixed: 'left'
            },
            {
                title: '价格',
                dataIndex: 'price',
                key: 'price',
                fixed: 'left',
                render(column, row) {
                    return `<span style="color: red;">${row[column.dataIndex]}</span>`;
                }
            },
            {
                title: '生产日期',
                dataIndex: 'ctime',
                key: 'ctime'
            },
            {
                title: '产地',
                dataIndex: 'location',
                key: 'location'
            },
            {
                title: '更新时间',
                dataIndex: 'update_time',
                key: 'update_time'
            }
        ]

        let dataList: any = ref([]);

        for (let i = 0; i < 60; i++) {
            dataList.value.push({
                id: '' + (4 + i),
                goods_name: 'sk4',
                price: '1180',
                ctime: '2021-09-26',
                update_time: '2021-09-26',
                location: '中国'
            });
        }

        const pageChangeHandler = (page) => {
            setTableData(page);
        }
        const prevClickChangeHandler = page => {
            setTableData(page);
        }
        const nextClickChangeHandler = page => {
            setTableData(page);
        }
        const setTableData = page => {
            // dataList = dataList.substr(page * 15, 15);
            dataList.value.length = 0;
            for (let i = page * 60; i < (page + 1) * 15; i++) {
                dataList.value.push({
                    id: '' + (4 + i),
                    goods_name: 'sk4',
                    price: '1180',
                    ctime: '2021-09-26',
                    update_time: '2021-09-26',
                    location: '中国'
                });
            }
        }
        const tableSelectChangeHandler = selectedRows => {
            console.log(selectedRows);
        }
        const getTableRows = () => {
            console.log(wdTable.value.getSelectedRows());
        }
        const cellClickHandler = ({rowIndex, dataIndex, value}) => {
            console.log(dataIndex, value);
        }
        const rowClickHandler = (row) => {
            console.log(row);
        }
        let componentType = ref('');
        const changeContent = (type) => {
            componentType.value = type;
        }
        onMounted(() => {
            
        });
        return {
            textData,
            dataList,
            tableColumns,
            pageChangeHandler,
            prevClickChangeHandler,
            nextClickChangeHandler,
            tableSelectChangeHandler,
            wdTable,
            getTableRows,
            cellClickHandler,
            rowClickHandler,
            componentType,
            changeContent
        };
    }
})
</script>

<style lang="less">
</style>


