import {calculateFormTotal} from './modules/calculate.js';
import {
  controlFormModal,
  controlCheckbox,
  controlPostGoods,
  controlDeleteGoods,
  controlImagePopup,
  controlErrorModal} from './modules/control.js';
import {getGoods, getTableTotal} from './modules/serviceAPI.js';
import {
  createErrorModal,
  createSucsessModal} from './modules/createElements.js';


const init = () => {
  createErrorModal();
  createSucsessModal();

  calculateFormTotal();

  controlFormModal();
  controlCheckbox();

  controlPostGoods();
  controlDeleteGoods();

  controlImagePopup();

  controlErrorModal();

  getGoods();
  getTableTotal();
};

init();
