import {
  controlFormModal,
  controlDeleteGoods,
  controlImagePopup,
  controlErrorModal} from './modules/control.js';
import {getGoods, getTableTotal} from './modules/serviceAPI.js';


const init = () => {
  getGoods();
  getTableTotal();

  controlFormModal();
  controlDeleteGoods();
  controlImagePopup();
  controlErrorModal();
};

init();
