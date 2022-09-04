const bgImage = document.getElementById('bgImage');
const modal = document.getElementById('modalPane');
const modalLink = document.getElementById('modalId');
const modalExit = document.getElementById('modalExit');

const addModal = function () {
  modal.style['opacity'] = '0.85';
  bgImage.classList.add('modal-blur');
};
const closeModal = function () {
  modal.style['opacity'] = '0';
  bgImage.classList.remove('modal-blur');
};

const viewModal = function () {
  let currentOpacity = modal.style['opacity'];
  currentOpacity === '0' ? addModal() : closeModal();
};

modalLink.addEventListener('click', viewModal);
modalExit.addEventListener('click', closeModal);
