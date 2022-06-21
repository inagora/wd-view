import { createVNode, render } from "vue";
import WdDialog from "../dialog";
import WdButton from '../button/index';
const Modal = (options) => {
  options.modelValue = true;
  options.destroy = () => {
    vm.component.props.modelValue = false;
  }
  if(typeof options.isShowConfirmButton === 'undefined') {
    options.isShowConfirmButton = true;
  }
  if(typeof options.width === 'undefined') {
    options.width = '250px';
  }
  // footer操作按钮
  const footerSlots = [];
  if(options.isShowConfirmButton) {
    footerSlots.push(createVNode(WdButton, {type: 'primary', size: 'small', onClick: () => {
      if(options.onConfirm) {
        options.onConfirm();
      } else {
        vm.component.props.modelValue = false;
      }
    }}, {
      default: options.confirmButtonText || '确定'
    }));
  }
  if(options.isShowCancelButton) {
    footerSlots.push(createVNode(WdButton, { size: 'small', onClick: () => {
      options.onCancel && options.onCancel();
      vm.component.props.modelValue = false;
    }}, {
      default: options.cancelButtonText || '取消'
    }));
  }
  const container = document.createElement('div');
  const vm = createVNode(WdDialog, options, {
    footer: footerSlots,
    default: options.content
  });
  render(vm, container);
  document.body.appendChild(container.firstElementChild);
}
['alert', 'confirm'].forEach(type => {
  Modal[type] = (options) => {
    return Modal(options);
  }
});
export default Modal;