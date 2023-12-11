import {postGoods, deleteGoods} from './serviceAPI.js';
import {
  form,
  formOverlay,
  formCheckbox,
  formDiscount,
  formTotal,
  formError,
  tableBody,
  tableAddButton,
  modalErrorOverlay} from './getElements.js';
import {createSucsessModal} from './createElements.js';


// форма
const openFormModal = () => {
  formOverlay.classList.add('is-visible');
};

const closeFormModal = () => {
  formOverlay.classList.remove('is-visible');
  formDiscount.disabled = true;
  formTotal.textContent = '$ 0.00';
  formError.classList.remove('error-visible');
  formError.textContent = '';
  form.reset();
};

const controlFormModal = () => {
  tableAddButton.addEventListener('click', openFormModal);

  formOverlay.addEventListener('click', ({target}) => {
    if (target === formOverlay || target.closest('.modal__close-button')) {
      form.reset();
      closeFormModal();
    }
  });
};

// чекбокс
const controlCheckbox = () => {
  formCheckbox.addEventListener('click', ({target}) => {
    if (target.checked) {
      formDiscount.disabled = false;
    } else {
      formDiscount.value = '';
      formDiscount.disabled = true;
    }
  });
};

// окно ошибки, успешного добавления
const controlSucsessModal = () => {
  const modal = createSucsessModal();

  modal.classList.add('modal-visible');

  setTimeout(() => {
    modal.classList.remove('modal-visible');
    modal.remove();
  }, 2000);
};

const openErrorModal = () => {
  modalErrorOverlay.classList.add('modal-visible');
};

const closeErrorModal = () => {
  modalErrorOverlay.classList.remove('modal-visible');
};

const controlErrorModal = () => {
  modalErrorOverlay.addEventListener('click', ({target}) => {
    if (target === modalErrorOverlay ||
        target.closest('.error__close-button')) {
      closeErrorModal();
    }
  });
};

// добавление товара
const controlPostGoods = () => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const newGoods = Object.fromEntries(formData);

    postGoods(newGoods);
  });
};

// удаление товара
const controlDeleteGoods = () => {
  tableBody.addEventListener('click', ({target}) => {
    if (target.closest('.table-body__delete-button')) {
      const row = target.closest('.table-body__row');

      deleteGoods(row.dataset.id);
    }
  });
};

// окно с изображением
const controlImagePopup = () => {
  tableBody.addEventListener('click', ({target}) => {
    const tableRow = target.closest('.table-body__row');

    if (target.closest('.table-body__image-button')) {
      open(tableRow.dataset.pic, 'test', `
        width=600,
        height=600,
        left=${window.screen.width / 2 - 300},
        top=${window.screen.height / 2 - 300}
      `);
    }
  });
};


export {
  closeFormModal,
  controlFormModal,
  controlPostGoods,
  controlCheckbox,
  controlDeleteGoods,
  controlImagePopup,
  controlSucsessModal,
  openErrorModal,
  controlErrorModal};
