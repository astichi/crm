// import {calculateFormTotal} from './modules/calculate.js';
import {
  controlFormModal,
  controlCheckbox,
  controlPostGoods,
  controlDeleteGoods,
  controlImagePopup,
  controlErrorModal} from './modules/control.js';
import {getGoods, getTableTotal} from './modules/serviceAPI.js';
import {createErrorModal} from './modules/createElements.js';


const init = () => {
  getGoods();
  getTableTotal();

  createErrorModal();

  // calculateFormTotal();

  controlFormModal();
  controlCheckbox();
  controlPostGoods();
  controlDeleteGoods();
  controlImagePopup();
  controlErrorModal();
};

init();
