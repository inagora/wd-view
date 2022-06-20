import { createVNode, render } from "vue";
import WdDialog from "../dialog";
const Modal = (options) => {
  console.log(options);
  const container = document.createElement('div');
  const vm = createVNode(WdDialog, options);
  render(vm, container);
  document.body.appendChild(container.firstElementChild);
}
export default Modal;