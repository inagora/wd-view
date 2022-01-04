<template>
  <div class="container">
    <!-- <div class="component-box">
      <div class="component-box-top">
        <wd-form></wd-form>
        <wd-table
          ref="wdTable"
          :columns="tableColumns"
          :data-source="dataList"
          :show-header="true"
          size="small"
          bordered
          :sticky="true"
          page-count="3"
          current-page="1"
          height="100%"
          pagination-position="center"
          @current-change="pageChangeHandler"
          @prev-click="prevClickChangeHandler"
          @next-click="nextClickChangeHandler"
          @select-change="tableSelectChangeHandler"
          @cellClick="cellClickHandler"
          @rowClick="rowClickHandler"
        ></wd-table>
      </div>
      <div class="component-box-bottom">
        <div class="component-title">列表组件</div>
        <div class="component-desc">
          该组件主要是显示一个列表，并且在列表底部可以显示分页；
        </div>
      </div>
    </div> -->
    <!-- <wd-form></wd-form> -->
    <wd-table
      ref="wdTable"
      :columns="tableColumns"
      :data-source="dataList"
      :page-count="3"
    ></wd-table>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted } from "vue";
import WdForm from "./Form.vue";
export default defineComponent({
  name: "Table",
  components: {
    WdForm,
  },
  setup() {
    // 获取table引用
    let wdTable = ref(null);

    const textData = ref("");

    // table数据
    const tableColumns = [
      {
          title: '',
          dataIndex: '',
          key: '',
          type: 'checkbox'
      },
      // {
      //     type: 'index',
      //     index: (index) => {
      //         return index * 2;
      //     }
      // },
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "商品名",
        dataIndex: "goods_name",
        key: "goods_name",
        ellipsis: true,
        fixed: "left",
      },
      {
        title: "价格",
        dataIndex: "price",
        key: "price",
        fixed: "left",
        render(column, row) {
          return `<span style="color: red;">${row[column.dataIndex]}</span>`;
        },
      },
      {
        title: "生产日期",
        dataIndex: "ctime",
        key: "ctime",
      },
      {
        title: "产地",
        dataIndex: "location",
        key: "location",
      },
      {
        title: "更新时间",
        dataIndex: "update_time",
        key: "update_time",
      },
    ];

    let dataList: any = ref([]);

    setTimeout(() => {
      for (let i = 0; i < 60; i++) {
        dataList.value.push({
          id: "" + (4 + i),
          goods_name: "sk4",
          price: "1180",
          ctime: "2021-09-26 2021-09-26 2021-09-26 2021-09-26 2021-09-26",
          update_time: "2021-09-26",
          location: "中国",
        });
      }
    }, 2000);
    const pageChangeHandler = (page) => {
      // setTableData(page);
      console.log("11111");
    };
    const prevClickChangeHandler = (page) => {
      console.log(page);
    };
    const nextClickChangeHandler = (page) => {
      console.log(page);
    };
    const setTableData = (page) => {
      // dataList = dataList.substr(page * 15, 15);
      dataList.value.length = 0;
      for (let i = page * 60; i < (page + 1) * 15; i++) {
        dataList.value.push({
          id: "" + (4 + i),
          goods_name: "sk4",
          price: "1180",
          ctime: "2021-09-26",
          update_time: "2021-09-26",
          location: "中国",
        });
      }
    };
    const tableSelectChangeHandler = (selectedRows) => {
      console.log(selectedRows);
    };
    const getTableRows = () => {
      console.log(wdTable.value.getSelectedRows());
    };
    const cellClickHandler = ({ rowIndex, dataIndex, value }) => {
      console.log(dataIndex, value);
    };
    const rowClickHandler = (row) => {
      console.log(row);
    };
    let componentType = ref("");
    const changeContent = (type) => {
      componentType.value = type;
    };
    onMounted(() => {});
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
      changeContent,
    };
  },
});
</script>
<style lang="less">
.component-box {
  width: 1000px !important;
}
</style>
