<template>
	<wd-form
		ref="userInfoForm"
		label-width="100px"
		label-align="right"
		size="small"
		action="/login"
		method="post"
		:model="userInfo"
		:validate-on-rule-change="true"
		:rules="formRules"
		:show-message="true"
		label-position="top"
	>
		<wd-form-item label="姓名" prop="name">
			<wd-input type="text" placeholder="请输入姓名"></wd-input>
		</wd-form-item>
		<wd-form-item label="性别" prop="gender">
			<wd-radio :checked="isMale" name="color" @change="handleRadioChange">
				男
			</wd-radio>
			<wd-radio :checked="isFemale" name="color" @change="handleRadioChange">
				女
			</wd-radio>
		</wd-form-item>
		<wd-form-item label="婚姻状况" prop="isMerried">
			<wd-checkbox :checked="userInfo.isMerried" @change="handleCheckboxChange">
				已婚
			</wd-checkbox>
		</wd-form-item>
		<wd-form-item label="年龄" prop="age">
			<wd-input-number
				max="20"
				min="0"
				v-model="userInfo.age"
				@input="handleInputNumber"
				@change="handleChangeNumber"
				type="text"
			></wd-input-number>
		</wd-form-item>
		<wd-form-item label="学历" prop="degree">
			<wd-select
				@change="selectedChangeHandler"
				:disabled="disabled"
				placeholder="请选择学历"
			>
				<wd-option label="研究生" value="baidu"></wd-option>
				<wd-option label="本科" value="google"></wd-option>
				<wd-option label="专科" value="bing"></wd-option>
			</wd-select>
		</wd-form-item>
		<wd-form-item label="毕业日期" prop="date">
			<wd-date-picker
				type="date"
				:clearable="false"
				:disabled="false"
				default-value="2021-02-02 02:02:02"
				format="YYYY/MM/DD HH:mm:ss"
				value-format="YYYY-MM-DD HH-mm-ss"
				size="small"
				placeholder="请选择日期"
				@change="datepickerChange"
			></wd-date-picker>
		</wd-form-item>
		<wd-form-item>
			<wd-button-group>
				<wd-button size="small" nativeType="reset" type="danger"
					>重置</wd-button
				>
				<wd-button
					size="small"
					type="success"
					nativeType="submit"
					@click="regHandler"
					>提交</wd-button
				>
			</wd-button-group>
		</wd-form-item>
	</wd-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue';
import moment from 'moment';
export default defineComponent({
	name: 'Form',
	setup() {
		let datepickerValue = ref('2021-02-02 02:02:02');
		let userInfo = reactive({
			name: 'niu',
			age: '1',
			isMerried: '',
			date: datepickerValue.value,
			degree: 'bing',
		});
		const disabled = ref(false);
		setTimeout(() => {
			disabled.value = true;
		}, 1000);
		let userInfoForm = <any>ref();
		const checkAge = (rule, value) => {
			if (value < 18) {
				return Promise.reject('未成年');
			} else {
				return Promise.resolve('成年');
			}
		};
		const checkDate = (rule, value) => {
			if (value > moment(new Date()).format('YYYY-MM-DD HH-mm-ss')) {
				return Promise.reject('');
			} else {
				return Promise.resolve('');
			}
		};
		let formRules = {
			name: { required: true, message: '请填写姓名', trigger: 'change' },
			age: {
				message: 'age not right',
				trigger: 'change',
				validator: checkAge,
				required: true,
			},
			date: [
				{ message: '日期不能为空', trigger: 'change', required: true },
				{
					message: '所选日期不能大于当前日期',
					trigger: 'change',
					validator: checkDate,
				},
			],
			isMerried: {
				message: '请选择婚姻状况',
				trigger: 'change',
				required: true,
			},
		};

		const regHandler = () => {
			userInfoForm.value.validate((isValid) => {
				if (isValid) alert('提交成功');
			});
		};

		onMounted(() => {});
		return {
			datepickerValue,
			userInfo,
			formRules,
			userInfoForm,
			regHandler,
			disabled,
		};
	},
});
</script>

<style lang="less"></style>
