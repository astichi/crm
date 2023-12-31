import {goods} from './data.js';
import {calculateTableTotal} from './calculate.js';
import {deleteGoods} from './goodsControl.js';
import {renderId} from './render.js';


const controlModal = (
    tableAddButton,
    modalOverlay,
    form,
    formDiscount,
    formTotal) => {
  const openModal = () => {
    modalOverlay.classList.add('is-visible');
    renderId();
  };

  const closeModal = () => {
    modalOverlay.classList.remove('is-visible');
    formDiscount.disabled = true;
    formTotal.textContent = '$ 0.00';
  };

  tableAddButton.addEventListener('click', openModal);

  modalOverlay.addEventListener('click', e => {
    const target = e.target;

    if (target === modalOverlay || target.closest('.modal__close-button')) {
      form.reset();
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

const controlCheckbox = (formCheckbox, formDiscount) => {
  formCheckbox.addEventListener('click', e => {
    const target = e.target;

    if (target.checked) {
      formDiscount.disabled = false;
    } else {
      formDiscount.value = '';
      formDiscount.disabled = true;
    }
  });
};

const controlDelete = (tableBody, tableTotalPrice) => {
  tableBody.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.table-body__delete-button')) {
      const row = target.closest('.table-body__row');
      const id = +row.firstElementChild.innerText;

      row.remove();
      deleteGoods(id);
      console.log(goods);
      calculateTableTotal(tableTotalPrice);
    }
  });
};


export {controlModal, controlCheckbox, controlDelete};
