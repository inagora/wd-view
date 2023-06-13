// import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
// import { describe, expect, it, vi } from 'vitest';
import Space from '../space.vue';
const AXIOM = 'Rem is the best girl';

describe('Space.vue', () => {
	it('render test', async () => {
		// console.log('2');
		const wrapper = mount(<Space>{AXIOM}</Space>);
		console.log('wd', wrapper);
		// expect(wrapper.text()).toEqual(AXIOM);
		// await wrapper.setProps({
		// 	direction: 'vertical',
		// 	wrap: true,
		// });
		// expect(wrapper.find('.el-space--vertical').exists()).toBe(true);
		// expect(wrapper.find('.el-space').attributes('style')).toContain(
		// 	'flex-wrap: wrap'
		// );
	});
});
