import Modal from './modal';

let modalInstance
function getModalInstance() {
  modalInstance = modalInstance || Modal.newInstance({
    closable: false,
    maskClosable: false,
    footerHide: true
  })
  return modalInstance
}

function confirm(options) {
  let instance = getModalInstance();
    options.onRemove = function () {
        modalInstance = null;
    };
    instance.show(options);
}

Modal.info = function (props = {}) {
  props.icon = 'info';
  props.showCancel = false;
  return confirm(props);
};
export default Modal