<template>
  <div :class="['wd-table-header', fixed ? 'wd-table-fixed-header' : '']">
    <table border="0" cellpadding="0" cellspacing="0">
      <colgroup>
        <col
          v-for="column in store.columns"
          :width="column.width + 'px'"
          :key="column.dataIndex || column.key"
        />
      </colgroup>
      <thead class="wd-table-thead">
        <tr>
          <th
            class="wd-table-row-cell-break-word"
            v-for="(column, index) in store.columns"
            :key="column.dataIndex || column.key"
            :style="[filterColumnStyle(column, index), {textAlign: headerAlign}]"
            :class="[
              column.type === 'checkbox' || column.type === 'index'
                ? 'wd-table-selection-column'
                : '',
            ]"
          >
            <template v-if="column.type === 'checkbox'">
              <div class="wd-table-header-column">
                <span class="wd-table-column-title">
                  <div class="wd-table-selection">
                    <wd-checkbox
                      :checked="isSelectedAll"
                      @change="selectAllChangeHandler"
                    ></wd-checkbox>
                  </div>
                </span>
              </div>
            </template>
            <div class="wd-table-header-column" v-else>
              <span class="wd-table-column-title">{{ column.title }}</span>
            </div>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent, PropType, reactive, ref, watch } from "vue";
import WdCheckbox from '../checkbox/checkbox.vue';
import { StoreProps } from "./table-type";
export default defineComponent({
  name: "table-header",
  components: {WdCheckbox},
  props: {
    store: Object as PropType<StoreProps>,
    fixed: {
      type: Boolean,
    },
    headerAlign: String
  },
  emits: ["select-change"],
  setup(props, { emit }) {
    let isSelectedAll = ref(false);
    let { store } = props;
    const selectAllChangeHandler = (val) => {
      let dataSource: any = store.dataSource;
      dataSource.forEach((data) => {
        data.isSelected = val;
      });
      emit("select-change");
    };

    const filterColumnStyle = (column, index) => {
      if (column.fixed === "left") {
        return {
          position: column.fixed ? "sticky" : "",
          left: index * column.width + "px",
          zIndex: 1000 - index,
          backgroundColor: "#ffffff",
        };
      } else if (column.fixed === "right") {
        return {
          position: column.fixed ? "sticky" : "",
          right: index * column.width + "px",
          zIndex: 1000 - index,
          backgroundColor: "#ffffff",
        };
      } else {
        return {};
      }
    };

    watch(store.dataSource, (val) => {
      isSelectedAll.value = checkSelectedAll(val);
    });
    const checkSelectedAll = (data) => {
      return !data.some((item) => !item.isSelected); // 全选
    };
    return {
      isSelectedAll,
      selectAllChangeHandler,
      filterColumnStyle,
    };
  },
});
</script>
