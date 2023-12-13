import {
  getGoodsById,
  postGoods,
  deleteGoods,
  editGoodsById} from './serviceAPI.js';
import {
  formOverlay,
  tableBody,
  tableAddButton,
  modalErrorOverlay} from './getElements.js';
import {createSucsessModal, createErrorModal} from './createElements.js';
import {openFormModal} from './createForm.js';


// форма
const closeFormModal = () => {
  formOverlay.classList.remove('is-visible');
  formOverlay.innerHTML = '';
};

const controlFormModal = () => {
  tableAddButton.addEventListener('click', () => {
    openFormModal(null, null, null);
  });

  tableBody.addEventListener('click', ({target}) => {
    if (target.closest('.table-body__edit-button')) {
      const row = target.closest('.table-body__row');
      getGoodsById(row.dataset.id);
    }
  });

  formOverlay.addEventListener('click', ({target}) => {
    if (target === formOverlay || target.closest('.modal__close-button')) {
      closeFormModal();
    }
  });
};

// чекбокс
const controlCheckbox = (formCheckbox, formDiscount) => {
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
const controlSucsessModal = (id) => {
  const modal = createSucsessModal(id);

  modal.classList.add('modal-visible');

  setTimeout(() => {
    modal.classList.remove('modal-visible');
    modal.innerHTML = '';
  }, 2000);
};

const openErrorModal = () => {
  const modal = createErrorModal();
  modal.classList.add('modal-visible');
};

const controlErrorModal = () => {
  modalErrorOverlay.addEventListener('click', ({target}) => {
    if (target === modalErrorOverlay ||
        target.closest('.error__close-button')) {
      modalErrorOverlay.classList.remove('modal-visible');
      modalErrorOverlay.innerHTML = '';
    }
  });
};

// добавление товара
const controlPostGoods = (form) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const newGoods = Object.fromEntries(formData);

    postGoods(newGoods);
  });
};

// изменение товара
const controlEditGoods = (form, id) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const editedGoods = Object.fromEntries(formData);

    editGoodsById(editedGoods, id);
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
  controlEditGoods,
  controlDeleteGoods,
  controlImagePopup,
  controlSucsessModal,
  openErrorModal,
  controlErrorModal};
