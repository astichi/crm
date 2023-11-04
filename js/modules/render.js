import {createRow, createId} from './createElements.js';


const renderGoods = (goods, table) => {
  const result = goods.map(createRow);

  table.append(...result);
};

const renderNewGoods = (newGoods, table) => {
  const result = createRow(newGoods);

  table.append(result);
};

const renderId = () => {
  const id = document.querySelector('.form__id-number');
  id.textContent = createId();
};


export {renderGoods, renderNewGoods, renderId};
