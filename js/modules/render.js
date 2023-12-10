import {createTableRow} from './createElements.js';
import {tableBody, tableTotal, formError} from './getElements.js';
import {
  openErrorModal,
  closeFormModal,
  openSucsessModal,
  closeSucsessModal} from './control.js';
import {getTableTotal} from './serviceAPI.js';


const renderGoods = (err, data) => {
  try {
    tableBody.textContent = '';

    const result = data.goods.map(createTableRow);
    tableBody.append(...result);
  } catch (err) {
    console.warn(err);
    openErrorModal();
  }

  if (err) {
    console.warn(err, data);
    openErrorModal();
    return;
  }
};

const renderNewGoods = (err, data) => {
  try {
    const result = createTableRow(data);
    tableBody.append(result);

    getTableTotal();
    closeFormModal();
    openSucsessModal();
    setTimeout(closeSucsessModal, 2000);
  } catch (err) {
    console.warn(err);
    openErrorModal();
  }

  if (err) {
    if (err.name !== 'Error') {
      console.warn(err, data);
      openErrorModal();
      return;
    }

    if (err.message) {
      console.warn(err, data);
      formError.classList.add('error-visible');
      formError.textContent = err.message;
      return;
    } else if (!err.message) {
      console.warn(err, data);
      openErrorModal();
      return;
    }
  }
};

const renderAfterDelete = (err, data, id) => {
  if (err) {
    console.warn(err, data);
    openErrorModal();
    return;
  }

  const row = document.querySelector(`[data-id="${id}"]`);

  row.remove();
  getTableTotal();
};

const renderTableTotal = (err, data) => {
  if (err) {
    console.warn(err, data);
    openErrorModal();
    return;
  }

  tableTotal.textContent = `$ ${data.toFixed(2)}`;
};


export {renderGoods, renderNewGoods, renderAfterDelete, renderTableTotal};
