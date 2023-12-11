import {createTableRow} from './createElements.js';
import {tableBody, tableTotal, formError} from './getElements.js';
import {
  openErrorModal,
  closeFormModal,
  controlSucsessModal} from './control.js';
import {getTableTotal} from './serviceAPI.js';


const renderGoods = (err, data) => {
  if (err) {
    console.warn(err, data);
    openErrorModal();
    return;
  }

  try {
    tableBody.textContent = '';

    const result = data.goods.map(createTableRow);
    tableBody.append(...result);
  } catch (err) {
    console.warn(err);
    openErrorModal();
  }
};

const renderNewGoods = (err, data) => {
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

  try {
    const result = createTableRow(data);
    tableBody.append(result);

    getTableTotal();
    closeFormModal();
    controlSucsessModal();
  } catch (err) {
    console.warn(err);
    openErrorModal();
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
