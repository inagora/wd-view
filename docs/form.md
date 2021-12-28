## Form 表单
表单组件包含数据录入，表单验证，样式

有两种排列模式：
1、垂直排列
2、行内排列
### 用法
#### 行内排列
<div class="component-box">
    <div class="component-box-top"><ClientOnly>
      <wd-form
        ref="userInfoForm"
        label-width="100px"
        label-align="right"
        size="small"
        inline
        :model="userInfo"
        :validate-on-rule-change="true"
        :rules="formRules"
        :show-message="true"
        label-position="left"
      >
        <wd-form-item label="姓名" prop="name">
          <wd-input
            type="text"
            placeholder="请输入姓名"
          ></wd-input>
        </wd-form-item>
        <wd-form-item label="性别" prop="gender">
          <wd-radio
            :checked="isMale"
            name="color"
            @change="handleRadioChange"
          >
            男
          </wd-radio>
          <wd-radio
            :checked="isFemale"
            name="color"
            @change="handleRadioChange"
          >
            女
          </wd-radio>
        </wd-form-item>
        <wd-form-item label="婚姻状况" prop="isMerried">
          <wd-checkbox
            :checked="true"
            @change="handleCheckboxChange"
          >
            已婚
          </wd-checkbox>
        </wd-form-item>
        <wd-form-item label="年龄" prop="age">
          <wd-input-number
            max="20"
            min="0"
            @input="handleInputNumber"
            @change="handleChangeNumber"
            type="text"
          ></wd-input-number>
        </wd-form-item>
        <wd-form-item label="学历">
          <wd-select
            v-model="selectedValue"
            @change="selectedChangeHandler"
            placeholder="请选择学历"
          >
            <wd-option label="研究生" value="baidu"></wd-option>
            <wd-option label="本科" value="google"></wd-option>
            <wd-option label="专科" value="bing"></wd-option>
          </wd-select>
        </wd-form-item>
      </wd-form>
    </ClientOnly></div>
    <div class="component-box-bottom">
        <div class="component-title">表单</div>
        <div class="component-desc">
            设置inline属性可以让表单项以行内样式排列
        </div>
    </div>
</div> 

::: details 点击查看代码 
```html
<wd-form
  ref="userInfoForm"
  label-width="100px"
  label-align="right"
  size="small"
  inline
  :model="userInfo"
  :validate-on-rule-change="true"
  :rules="formRules"
  :show-message="true"
  label-position="left"
>
  <wd-form-item label="姓名" prop="name">
    <wd-input
      type="text"
      placeholder="请输入姓名"
    ></wd-input>
  </wd-form-item>
  <wd-form-item label="性别" prop="gender">
    <wd-radio
      :checked="isMale"
      name="color"
      @change="handleRadioChange"
    >
      男
    </wd-radio>
    <wd-radio
      :checked="isFemale"
      name="color"
      @change="handleRadioChange"
    >
      女
    </wd-radio>
  </wd-form-item>
  <wd-form-item label="婚姻状况" prop="isMerried">
    <wd-checkbox
      @change="handleCheckboxChange"
    >
      已婚
    </wd-checkbox>
  </wd-form-item>
  <wd-form-item label="年龄" prop="age">
    <wd-input-number
      max="20"
      min="0"
      @input="handleInputNumber"
      @change="handleChangeNumber"
      type="text"
    ></wd-input-number>
  </wd-form-item>
  <wd-form-item label="学历">
    <wd-select
      v-model="selectedValue"
      @change="selectedChangeHandler"
      placeholder="请选择学历"
    >
      <wd-option label="研究生" value="baidu"></wd-option>
      <wd-option label="本科" value="google"></wd-option>
      <wd-option label="专科" value="bing"></wd-option>
    </wd-select>
  </wd-form-item>
  <wd-form-item>
    <wd-button size="small" type="danger">重置</wd-button>
    <wd-button size="small" type="success" @click="regHandler"
      >提交</wd-button
    >
  </wd-form-item>
</wd-form>
```
:::

#### 垂直排列
<div class="component-box">
    <div class="component-box-top"><ClientOnly>
      <wd-form
        ref="userInfoForm"
        label-width="100px"
        label-align="right"
        size="small"
        :model="userInfo"
        :validate-on-rule-change="true"
        :rules="formRules"
        :show-message="true"
        label-position="left"
      >
        <wd-form-item label="姓名" prop="name">
          <wd-input
            type="text"
            placeholder="请输入姓名"
          ></wd-input>
        </wd-form-item>
        <wd-form-item label="性别" prop="gender">
          <wd-radio
            :checked="isMale"
            name="color"
            @change="handleRadioChange"
          >
            男
          </wd-radio>
          <wd-radio
            :checked="isFemale"
            name="color"
            @change="handleRadioChange"
          >
            女
          </wd-radio>
        </wd-form-item>
        <wd-form-item label="婚姻状况" prop="isMerried">
          <wd-checkbox
            :checked="true"
            @change="handleCheckboxChange"
          >
            已婚
          </wd-checkbox>
        </wd-form-item>
      </wd-form>
    </ClientOnly></div>
    <div class="component-box-bottom">
        <div class="component-title">垂直表单</div>
        <div class="component-desc">
            设置inline为false或者不设置inline属性，每一个表单项单独一行排列
        </div>
    </div>
</div> 

::: details 点击查看代码 
```html
<wd-form
  ref="userInfoForm"
  label-width="100px"
  label-align="right"
  size="small"
  :model="userInfo"
  :validate-on-rule-change="true"
  :rules="formRules"
  :show-message="true"
  label-position="left"
>
  <wd-form-item label="姓名" prop="name">
    <wd-input
      type="text"
      placeholder="请输入姓名"
    ></wd-input>
  </wd-form-item>
  <wd-form-item label="性别" prop="gender">
    <wd-radio
      :checked="isMale"
      name="color"
      @change="handleRadioChange"
    >
      男
    </wd-radio>
    <wd-radio
      :checked="isFemale"
      name="color"
      @change="handleRadioChange"
    >
      女
    </wd-radio>
  </wd-form-item>
  <wd-form-item label="婚姻状况" prop="isMerried">
    <wd-checkbox
      @change="handleCheckboxChange"
    >
      已婚
    </wd-checkbox>
  </wd-form-item>
  <wd-form-item>
    <wd-button size="small" type="danger">重置</wd-button>
    <wd-button size="small" type="success" @click="regHandler"
      >提交</wd-button
    >
  </wd-form-item>
</wd-form>
```
:::

### Form 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| colon | 标签后面是否显示冒号 | boolean | true / false | true |
| disabled | 是否可用 | boolean | true / false | true |
| inline | 是否是行内模式 | boolean | true / false | false |
| inline-message | 验证提示文字 | string | - | - |
| label-align | 标签内文案位置 | string | left / center / right | left |
| label-position | 标签位置 | string | left / top | left |
| label-width | 标签大小 | string | - | 100px |
| rules | 表单验证规则 | object | - | 100px |
| size | 表单尺寸 | string | small / large | small |
| validate-on-rule-change | 验证规则改变之后是否立即执行一次验证 | boolean | true / false | false |

### FormItem 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :--: | :--: |
| label-position | 标签位置 | string | left / top | left |
| label-width | 标签大小 | string | - | 100px |
| rules | 表单验证规则 | object | - | 100px |
| size | 表单尺寸 | string | small / large | small |
| show-message | 是否展示验证信息 | boolean | true / false | true |