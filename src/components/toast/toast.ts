/* eslint-disable @typescript-eslint/ban-types */
//
import { createVNode, render } from 'vue';
import ToastConstructor from './toast.vue';
type WdToast = {};
type WdToastOptions = {
	duration: number | string;
	message: string;
};
const Toast: WdToast = (options?: WdToastOptions) => {
	const container = document.createElement('div');
	const vm = createVNode(ToastConstructor, options);
	render(vm, container);
	document.body.appendChild(container.firstElementChild);
};
export default Toast;
