import {goods} from './modules/data.js';
import {calculateTableTotal, calculateFormTotal} from './modules/calculate.js';
import {getModalElements, getTableElements} from './modules/getElements.js';
import {renderGoods} from './modules/render.js';
import {addNewGoods} from './modules/goodsControl.js';
import {
  controlModal,
  controlCheckbox,
  controlDelete,
} from './modules/control.js';


const init = () => {
  const {
    modalOverlay,
    id,
    form,
    formCheckbox,
    formDiscount,
    formTotal,
  } = getModalElements();

  const {
    tableAddButton,
    table,
    tableBody,
    tableTotalPrice,
  } = getTableElements();

  const {closeModal} =
    controlModal(tableAddButton, modalOverlay, form, formDiscount, formTotal);

  controlCheckbox(formCheckbox, formDiscount);
  controlDelete(tableBody, tableTotalPrice);

  renderGoods(goods, table);

  addNewGoods(form, id, closeModal, table, tableTotalPrice);

  calculateTableTotal(tableTotalPrice);
  calculateFormTotal(form, formTotal);

  console.log(goods);
};

init();
