import Space from '../space.vue';
import { shallowMount, mount } from '@vue/test-utils';
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
		console.log('wrapper', wrapper);
	});
	it('slots', () => {
		// const wrapper = mount(<Space>{AXIOM}</Space>);
		const wrapper = mount(Space, {
			slots: {
				default: AXIOM,
			},
		});
		expect(wrapper.text()).toEqual(AXIOM);
		console.log('wrapper', wrapper);
	});
});
