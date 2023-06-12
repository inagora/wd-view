import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('Hello World View', () => {
	it('renders message', () => {
		const wrapper = shallowMount(HelloWorld);
		expect(wrapper.text()).toContain('Hello, World!');
	});

	it('increments count', async () => {
		const wrapper = shallowMount(HelloWorld);
		const button = wrapper.find('button');

		await button.trigger('click');

		expect(wrapper.vm.count).toBe(1);
	});
});
