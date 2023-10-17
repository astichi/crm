'use strict';

// const modalTitle = document.querySelector('.form__title-text');
// console.log(modalTitle);
// const modalIdNumber = document.querySelector('.form__id-number');
// console.log(modalIdNumber);
// const modalFormCheckbox = document.querySelector('.form__input-checkbox');
// console.log(modalFormCheckbox);
// const modalFormDiscountInput = document.querySelector('.form__input-discount');
// console.log(modalFormDiscountInput);
// const modalTotalPriceNumber = document.querySelector('.total__sum');
// console.log(modalTotalPriceNumber);


const getModalCloseElements = () => {
  const tableAddButton = document.querySelector('.tools-panel__submit-button');
  const modalOverlay = document.querySelector('.modal__main_overlay');

  return {
    tableAddButton,
    modalOverlay,
  };
};

const showCloseModal = () => {
  const elements = getModalCloseElements();

  const {tableAddButton, modalOverlay} = elements;

  tableAddButton.addEventListener('click', () => {
    modalOverlay.classList.add('is-visible');
  });

  modalOverlay.addEventListener('click', e => {
    const target = e.target;

    if (target === modalOverlay || target.closest('.modal__close-button')) {
      modalOverlay.classList.remove('is-visible');
    }
  });
};

showCloseModal();

