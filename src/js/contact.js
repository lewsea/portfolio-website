// contact modal

const closeBtnModal = document.querySelector('#closeBtnModal');

closeBtnModal.addEventListener('click', function (e) {
  const btnModal = e.target.parentElement;
  btnModal.parentNode.removeChild(btnModal);
});
