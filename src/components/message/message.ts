// @ts-nocheck
import {createVNode, PropType, render} from 'vue'
import MessageConstructor from './message.vue';
type WdMessageOptions = {
  duration: number | string,
  message: string
}
const instances = [];
let seed = 1;
const Message = (options?: WdMessageOptions | string) => {
  if(typeof options === 'string') { // string直接作为内容
    options = {
      message: options
    }
  }
  let verticalOffset = options.offset || 20; // 多个message间距
  instances.forEach(({ vm }) => {
    verticalOffset += (vm.el.offsetHeight || 0) + 16;
  })
  verticalOffset += 16;
  const id = 'wd-message-' + seed++;
  options = {
    ...options,
    offset: verticalOffset,
    id,
    zIndex: 999
  }
  const container = document.createElement('div');
  container.className = `container_${id}`;
  const vm = createVNode(MessageConstructor, options);
  vm.props.onDestroy = () => {
    render(null, container);
  }
  render(vm, container);
  instances.push({vm});
  document.body.appendChild(container.firstElementChild);
}
['success', 'info', 'warning', 'error'].forEach(type => {
  Message[type] = options => {
    if(typeof options === 'string') {
      options = {
        message: options,
        type
      }
    } else {
      options.type = type
    }
    return Message(options);
  }
});
export default Message;