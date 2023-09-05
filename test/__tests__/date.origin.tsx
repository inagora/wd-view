import WdDate from '../../src/components/date-origin/src/date-origin.vue';
// import Space from '../space.vue';
import { shallowMount, mount } from '@vue/test-utils';
import { h, nextTick, ref } from 'vue';
import type { VNode } from 'vue';
const AXIOM = 'Rem is the best girl';
const _mount = (render: () => VNode) => {
	return mount(render, { attachTo: document.body });
};
describe('WdDate', () => {
	it('renders a single date input', async () => {
		const wrapper = shallowMount(WdDate, {
			props: {
				type: 'date',
			},
		});
		const input = wrapper.find('input');

		// 模拟用户输入并验证结果
		// await input.setValue('2023-09-05');
		// expect(wrapper.emitted('input')).toEqual([['2023-09-05']]);
		// expect(wrapper.emitted('update:modelValue')).toEqual([['2023-09-05']]);

		// 测试是否正确渲染disabled属性
		await wrapper.setProps({ disabled: true });
		expect(input.attributes('disabled')).toBe('disabled');
	});

	// it('renders a date range input', async () => {
	// 	const wrapper = mount(WdDate, {
	// 		props: {
	// 			type: 'daterange',
	// 		},
	// 		attrs: {
	// 			placeholder: ['Start Date', 'End Date'],
	// 		},
	// 	});
	// 	const startDateInput = wrapper.findAll('input').at(0);
	// 	const endDateInput = wrapper.findAll('input').at(1);

	// 	// 测试placeholder是否正确
	// 	expect(startDateInput.attributes('placeholder')).toBe('Start Date');
	// 	expect(endDateInput.attributes('placeholder')).toBe('End Date');

	// 	// 模拟用户输入并验证结果
	// 	await startDateInput.setValue('2023-09-05');
	// 	expect(wrapper.emitted('input')).toEqual([['2023-09-05', '']]);
	// 	expect(wrapper.emitted('update:modelValue')).toEqual([['2023-09-05', '']]);
	// 	await endDateInput.setValue('2023-09-06');
	// 	expect(wrapper.emitted('input')).toEqual([['2023-09-05', '2023-09-06']]);
	// 	expect(wrapper.emitted('update:modelValue')).toEqual([
	// 		['2023-09-05', '2023-09-06'],
	// 	]);

	// 	// 测试是否正确渲染disabled属性
	// 	await wrapper.setProps({ disabled: true });
	// 	expect(startDateInput.attributes('disabled')).toBe('disabled');
	// 	expect(endDateInput.attributes('disabled')).toBe('disabled');

	// 	// 测试日期范围是否正确
	// 	await startDateInput.setValue('2023-09-05');
	// 	await endDateInput.setValue('2023-09-04');
	// 	expect(wrapper.emitted('input')).toEqual([['2023-09-05', '2023-09-05']]);
	// 	expect(wrapper.emitted('update:modelValue')).toEqual([
	// 		['2023-09-05', '2023-09-05'],
	// 	]);
	// });

	// it('renders a clear button', async () => {
	// 	const wrapper = shallowMount(WdDate, {
	// 		props: {
	// 			type: 'date',
	// 		},
	// 		attrs: {
	// 			placeholder: 'Please enter a date',
	// 		},
	// 	});
	// 	const input = wrapper.find('input');
	// 	const clearButton = wrapper.find('.clear-button');

	// 	// 模拟用户输入并测试清除按钮功能
	// 	await input.setValue('2023-09-05');
	// 	await clearButton.trigger('click');
	// 	expect(wrapper.emitted('input')).toEqual([['']]);
	// 	expect(wrapper.emitted('update:modelValue')).toEqual([['']]);
	// 	expect(wrapper.emitted('change')).toEqual([['']]);
	// 	expect(wrapper.emitted('clear')).toBeTruthy();
	// });

	// it('emits focus and blur events', () => {
	// 	const wrapper = shallowMount(WdDate, {
	// 		props: {
	// 			type: 'date',
	// 		},
	// 		attrs: {
	// 			placeholder: 'Please enter a date',
	// 		},
	// 	});
	// 	const input = wrapper.find('input');

	// 	// 模拟获取和失去焦点
	// 	input.trigger('focus');
	// 	expect(wrapper.emitted('focus')).toBeTruthy();

	// 	input.trigger('blur');
	// 	expect(wrapper.emitted('blur')).toBeTruthy();
	// });
});
// it('both picker show correct value', async () => {
// 	const value = ref(new Date(2000, 9, 1, 10, 0, 1));
// 	const wrapper = _mount(() => (
// 		<DateOrigin v-model={value.value} type="datetime" />
// 	));

// 	const input = wrapper.find('input');
// 	input.trigger('blur');
// 	input.trigger('focus');
// 	await nextTick();
// 	const dateInput: HTMLInputElement = document.querySelector(
// 		'.el-date-picker__time-header > span:nth-child(1) input'
// 	)!;
// 	const timeInput: HTMLInputElement = document.querySelector(
// 		'.el-date-picker__time-header > span:nth-child(2) input'
// 	)!;
// 	timeInput.focus();
// 	await nextTick();
// 	// both input shows correct value
// 	expect(dateInput.value).toBe('2000-10-01');
// 	expect(timeInput.value).toBe('10:00:01');
// 	// time spinner highlight is correct
// 	let spinners = document.querySelectorAll(
// 		'.el-time-spinner ul li.is-active'
// 	) as NodeListOf<HTMLElement>;
// 	expect(spinners[0].textContent).toBe('10');
// 	expect(spinners[1].textContent).toBe('00');
// 	expect(spinners[2].textContent).toBe('01');
// 	value.value = new Date(2001, 10, 2, 11, 1, 2);

// 	await nextTick();
// 	spinners = document.querySelectorAll(
// 		'.el-time-spinner ul li.is-active'
// 	) as NodeListOf<HTMLElement>;
// 	expect(dateInput.value).toBe('2001-11-02');
// 	expect(timeInput.value).toBe('11:01:02');
// 	expect(spinners[0].textContent).toBe('11');
// 	expect(spinners[1].textContent).toBe('01');
// 	expect(spinners[2].textContent).toBe('02');
// });

// it('time-picker select && input time && input date', async () => {
// 	const value = ref('');
// 	const wrapper = _mount(() => (
// 		<DateOrigin v-model={value.value} type="datetime" />
// 	));

// 	expect(value.value).toBe('');
// 	const input = wrapper.find('input');
// 	input.trigger('blur');
// 	input.trigger('focus');
// 	await nextTick();
// 	const input_ = document.querySelectorAll(
// 		'.el-date-picker__editor-wrap input'
// 	)[1] as HTMLElement;
// 	input_.focus();
// 	await nextTick();
// 	const timePanel = document.querySelector('.el-time-panel');
// 	expect(
// 		timePanel!.querySelector('.el-time-spinner')!.innerHTML
// 	).not.toBeNull();
// 	const button: HTMLElement = document.querySelector(
// 		'.el-time-panel .confirm'
// 	)!;
// 	button.click();
// 	await nextTick();
// 	expect(value.value).not.toBe('');
// 	const timeInput = document.querySelectorAll(
// 		'.el-date-picker__editor-wrap input'
// 	)[1] as HTMLInputElement;
// 	timeInput.value = '20:30:33';
// 	timeInput.dispatchEvent(new Event('change'));
// 	await nextTick();
// 	const valueResult = dayjs(value.value);
// 	expect(valueResult.hour()).toBe(20);
// 	expect(valueResult.minute()).toBe(30);
// 	expect(valueResult.second()).toBe(33);
// 	const dateInput: HTMLInputElement = document.querySelector(
// 		'.el-date-picker__editor-wrap input'
// 	)!;
// 	dateInput.value = '2017-02-02';
// 	dateInput.dispatchEvent(new Event('change'));
// 	await nextTick();
// 	const valueResult2 = dayjs(value.value);
// 	expect(valueResult2.year()).toBe(2017);
// 	expect(valueResult2.month()).toBe(1);
// 	expect(valueResult2.date()).toBe(2);
// });

// it('defaultTime takes effect when the type is datetime', async () => {
// 	const value = ref('');
// 	const defaultTime = ref(new Date(2000, 1, 1, 12, 24, 48));
// 	const wrapper = _mount(() => (
// 		<DateOrigin
// 			v-model={value.value}
// 			type="datetime"
// 			default-time={defaultTime.value}
// 		/>
// 	));

// 	const input = wrapper.find('input');
// 	input.trigger('blur');
// 	input.trigger('focus');
// 	await nextTick();
// 	const someDateTd: HTMLElement = document.querySelector(
// 		'.el-picker-panel__content tr:nth-child(3) td:nth-child(4)'
// 	)!;
// 	const timeInput: HTMLInputElement = document.querySelector(
// 		'.el-date-picker__time-header > span:nth-child(2) input'
// 	)!;
// 	someDateTd.click();
// 	timeInput.focus();
// 	await nextTick();
// 	expect(timeInput.value).toBe('12:24:48');
// 	// time spinner highlight is correct
// 	const spinners = document.querySelectorAll(
// 		'.el-time-spinner ul li.is-active'
// 	) as NodeListOf<HTMLElement>;
// 	expect(spinners[0].textContent).toBe('12');
// 	expect(spinners[1].textContent).toBe('24');
// 	expect(spinners[2].textContent).toBe('48');
// });

// it('defaultTime only takes effect when time is not selected', async () => {
// 	const value = ref('');
// 	const defaultTime = ref(new Date(2000, 1, 1, 12, 0, 0));
// 	const wrapper = _mount(() => (
// 		<DateOrigin
// 			v-model={value.value}
// 			type="datetime"
// 			default-time={defaultTime.value}
// 		/>
// 	));

// 	const input = wrapper.find('input');
// 	input.trigger('blur');
// 	input.trigger('focus');
// 	await nextTick();
// 	const cells = document.querySelectorAll('.available .el-date-table-cell');
// 	(cells[0] as HTMLElement).click();
// 	await nextTick();
// 	const timeInput: HTMLInputElement = document.querySelector(
// 		'.el-date-picker__time-header > span:nth-child(2) input'
// 	)!;
// 	expect(timeInput.value).toBe('12:00:00');
// 	timeInput.focus();
// 	await nextTick();
// 	const spinner: HTMLElement = document.querySelector(
// 		'.el-time-spinner ul li.is-active'
// 	)!;
// 	(spinner.nextSibling as HTMLElement).click();
// 	await nextTick();
// 	expect(timeInput.value).toBe('13:00:00');
// });
