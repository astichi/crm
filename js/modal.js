'use strict';

import {goods, renderNewProduct, calculateTableTotalPrice} from '../js/table.js';

// const modalTitle = document.querySelector('.form__title-text');
// console.log(modalTitle);


// открыть, закрыть модальное окно
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

  const openModal = () => {
    modalOverlay.classList.add('is-visible');
  };

  const closeModal = () => {
    modalOverlay.classList.remove('is-visible');
    modalFormDiscountInput.disabled = true;
    modalTotalPriceNumber.textContent = '$ 0.00';
  };

  tableAddButton.addEventListener('click', openModal);

  modalOverlay.addEventListener('click', e => {
    const target = e.target;

    if (target === modalOverlay || target.closest('.modal__close-button')) {
      modalForm.reset();
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

// переключение чекбокса
const modalFormCheckbox = document.querySelector('.form__input-checkbox');
const modalFormDiscountInput = document.querySelector('.form__input-discount');

modalFormCheckbox.addEventListener('click', e => {
  const target = e.target;

  if (target.checked) {
    modalFormDiscountInput.disabled = false;
    // modalFormDiscountInput.removeAttribute('disabled');
  } else {
    modalFormDiscountInput.value = '';
    modalFormDiscountInput.disabled = true;
    // modalFormDiscountInput.setAttribute('disabled', 'true');
  }
});

// получаем новый продукт из модального
const modalForm = document.querySelector('.modal__form');
const newId = document.querySelector('.form__id-number');

const getNewProduct = (closeModal) => {
  modalForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData);

    newProduct.id = newId.innerText;
    newProduct.title = modalForm.name.value;
    if (!modalForm.discont.value) {
      newProduct.discont = false;
    }
    newProduct.images = {};

    goods.push(newProduct);
    renderNewProduct(newProduct);
    calculateTableTotalPrice();
    modalForm.reset();    
    closeModal();
  });
};

const {closeModal} = showCloseModal();
getNewProduct(closeModal);

// сумма в модальном окне с учетом скидки
const modalTotalPriceNumber = document.querySelector('.total__sum');

modalForm.addEventListener('change', () => {
  let total;
  total = modalForm.price.value * modalForm.count.value;

  if (modalForm.discount.value) {
    total -= modalForm.price.value * modalForm.count.value * modalForm.discount.value / 100;
  }

  modalTotalPriceNumber.textContent = '$ ' + total.toFixed(2);
});
