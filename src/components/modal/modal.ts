import { createVNode, render, h} from "vue";
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
        Promise.resolve(options.onConfirm()).then((val) => {
          if(val !== false) {
            vm.component.props.modelValue = false;
          }
        })
      } else {
        vm.component.props.modelValue = false;
      }
    }}, {
      default: options.confirmButtonText || '确定'
    }));
  }
  if(options.isShowCancelButton) {
    footerSlots.push(createVNode(WdButton, { size: 'small', onClick: () => {
      // options.onCancel && options.onCancel();
      if(options.onCancel) {
        Promise.resolve(options.onCancel()).then((val) => {
          if(val !== false) {
            vm.component.props.modelValue = false;
          }
        }) 
      } else {
        vm.component.props.modelValue = false;
      }
    }}, {
      default: options.cancelButtonText || '取消'
    }));
  }
  // 自定义footer
  if(options.buttons && options.buttons.length > 0) {
    footerSlots.length = 0;
    options.buttons.forEach(button => {
      footerSlots.push(createVNode(WdButton, {...button, onClick: () => {
        Promise.resolve(button.click()).then((val) => {
          if(val !== false) {
            vm.component.props.modelValue = false;
          }
        }) 
      }}, {
        default: button.text
      }));
    });
  }
  const container = document.createElement('div');
  const vm = createVNode(WdDialog, options, {
    footer: footerSlots,
    default: typeof options.content === 'string' ? h('div', {innerHTML: options.content}) : options.content
  });
  render(vm, container);
  document.body.appendChild(container.firstElementChild);
  return {
    destroy: () => {
      vm.component.props.modelValue = false
    }
  };
}
['alert', 'confirm'].forEach(type => {
  Modal[type] = (options) => {
    if(type === 'confirm') {
      if(typeof options.isShowConfirmButton === 'undefined') {
        options.isShowConfirmButton = true;
      }
      if(typeof options.isShowCancelButton === 'undefined') {
        options.isShowCancelButton = true;
      }
    }
    return Modal(options);
  }
});
['success', 'error', 'warning', 'info'].forEach(type => {
  Modal[type] = (options) => {
    options.type = type;
    return Modal(options);
  }
});
export default Modal;