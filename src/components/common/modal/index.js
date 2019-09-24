import Modal from './modal';

let modalInstance
function getModalInstance() {
  modalInstance = modalInstance || Modal.newInstance({
    closable: false,
    maskClosable: false
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
  return confirm(props);
};

Modal.remove = function() {
  if (!modalInstance) { // at loading status, remove after Cancel
    return false;
  }
  const instance = getModalInstance();
  instance.remove();
}
export default Modal