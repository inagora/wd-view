<template>
    <div class="container">
        <div class="component-box">
          <div class="component-box-top">
            <wd-dropdown
                :visible="false"
                trigger="hover"
                @visibleChange="visibleChangeHandler">
                <a class="wd-dropdown-link">
                    下拉菜单
                    <down-outlined></down-outlined>
                </a>
                <template #dropdown>
                    <wd-dropdown-menu>
                        <wd-dropdown-menu-item>
                            <a href="https://www.baidu.com">百度</a>
                        </wd-dropdown-menu-item>
                        <wd-dropdown-menu-item disabled>
                            <a href="https://www.baidu.com">百度</a>
                        </wd-dropdown-menu-item>
                        <wd-dropdown-menu-item>
                            <a href="javascript:;">1st menu item</a>
                        </wd-dropdown-menu-item>
                    </wd-dropdown-menu>
                </template>
            </wd-dropdown>
          </div>
          <div class="component-box-bottom">
            <div class="component-title">下拉组件</div>
            <div class="component-desc">
              点击或者鼠标移到组件上可以出现下拉的选项，每个选项可以自定义样式；
            </div>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
export default defineComponent({
    name: 'Dropdown',
    setup() {
        
        return {
          
        }
    }
})
</script>
<style lang="less">
.component-box {
  width: 500px;
  min-height: 150px;
  border: 1px solid #f0f0f0;
  background: #ffffff;
  display: inline-block;
  margin-right: 10px;
}
.component-box-top {
  width: 100%;
  height: 80%;
  border-bottom: 1px solid #f0f0f0;
  padding: 10px 20px;
}
.component-box-bottom {
  position: relative;
  width: 100%;
  min-height: 50px;
}
.component-title {
  height: 30px;
  background: #ffffff;
  position: absolute;
  top: -11px;
  left: 20px;
  padding: 0 10px;
  color: #000000;
  font-weight: 500;
}
.component-desc {
  padding: 20px 10px 10px 10px;
}
</style>


