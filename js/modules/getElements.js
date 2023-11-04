const getModalElements = () => {
  const modalOverlay = document.querySelector('.modal__main_overlay');
  const id = document.querySelector('.form__id-number');
  const form = document.querySelector('.modal__form');
  const formCheckbox = document.querySelector('.form__input-checkbox');
  const formDiscount = document.querySelector('.form__input-discount');
  const formTotal = document.querySelector('.total__sum');

  return {
    modalOverlay,
    id,
    form,
    formCheckbox,
    formDiscount,
    formTotal,
  };
};

const getTableElements = () => {
  const tableAddButton = document.querySelector('.tools-panel__submit-button');
  const table = document.querySelector('.table-body');
  const tableBody = document.querySelector('.table-body');
  const tableTotalPrice = document.querySelector('.table__title_sum');


  return {
    tableAddButton,
    table,
    tableBody,
    tableTotalPrice,
  };
};


export {getModalElements, getTableElements};
