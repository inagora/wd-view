import Space from '../space.vue';
import { shallowMount, mount } from '@vue/test-utils';
import { h, nextTick } from 'vue';
const AXIOM = 'Rem is the best girl';

describe('Space.vue', () => {
	it('space render', () => {
		// const wrapper = mount(<Space>{AXIOM}</Space>);
		const wrapper = mount(Space, {
			slots: {
				default: AXIOM,
			},
		});
		expect(wrapper.text()).toEqual(AXIOM);
	});
	it('slots', async () => {
		// const warnHandler = jest.fn();
		const vnode = h(
			Space,
			{ size: 'large' },
			{
				default: () =>
					Array.from({ length: 2 }).map((_, idx) => {
						return `test${idx}`;
					}),
			}
		);
		const wrapper = mount(vnode);
		console.log('wrapper', wrapper);
		await nextTick();
		expect(wrapper.find('.wd-space').attributes('style')).toContain(
			'gap: 16px'
		);

		await wrapper.setProps({
			size: 30,
		});

		await nextTick();
		expect(wrapper.find('.wd-space').attributes('style')).toContain(
			'gap: 30px'
		);

		await wrapper.setProps({
			size: [10, 20],
		});
		expect(wrapper.find('.wd-space').attributes('style')).toContain(
			'gap: 20px 10px'
		);

		await wrapper.setProps({
			size: 'unknown',
		});

		expect(wrapper.find('.wd-space').attributes('style')).toContain('gap: 8px');
		console.log('vnode', vnode);
	});
});
