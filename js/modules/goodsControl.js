import {goods} from './data.js';
import {calculateTableTotal} from './calculate.js';
import {renderNewGoods} from './render.js';


const addNewGoods = (form, id, closeModal, table, tableTotalPrice) => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newGoods = Object.fromEntries(formData);

    newGoods.id = +id.textContent;
    newGoods.discont = +newGoods.discont;
    newGoods.count = +newGoods.count;
    newGoods.price = +newGoods.price;
    if (!form.discont.value) {
      newGoods.discont = false;
    }
    newGoods.images = {};

    goods.push(newGoods);
    renderNewGoods(newGoods, table);
    console.log(goods);
    calculateTableTotal(tableTotalPrice);
    form.reset();
    closeModal();
  });
};

const deleteGoods = (id) => {
  goods.map((item, index) => {
    if (item.id === id) {
      goods.splice(index, 1);
    }
  });

  return goods;
};


export {addNewGoods, deleteGoods};
