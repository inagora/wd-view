// @ts-nocheck
import {createVNode, PropType, render} from 'vue'
import MessageConstructor from './message.vue';
type WdMessageOptions = {
  duration: number | string,
  message: string
}
const instances = [];
let seed = 1;
const elHeight = 42; // 元素高度，这里要动态获取
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
    // 销毁之后从队列中删除
    let currentId = instances.findIndex(vmItem => {
      return vmItem.vm.props.id = vm.props.id;
    });
    instances.splice(currentId, 1);
    const len = instances.length
    if (len < 1) return
    for (let i = currentId; i < len; i++) {
      const pos = parseInt(instances[i].vm.el.style['top']) - elHeight - 16
      instances[i].vm.component.props.offset = pos
    }
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