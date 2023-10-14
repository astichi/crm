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
  const modalForm = document.querySelector('.modal__main-box');
  const modalCloseButton = document.querySelector('.modal__close-button');

  return {
    tableAddButton,
    modalOverlay,
    modalForm,
    modalCloseButton,
  };
};

const showCloseModal = () => {
  const elements = getModalCloseElements();

  const {tableAddButton, modalOverlay, modalForm, modalCloseButton} = elements;

  tableAddButton.addEventListener('click', () => {
    modalOverlay.classList.add('is-visible');
  });

  modalForm.addEventListener('click', event => {
    event.stopPropagation();
  });

  modalCloseButton.addEventListener('click', () => {
    modalOverlay.classList.remove('is-visible');
  });

  modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.remove('is-visible');
  });
};

showCloseModal();
