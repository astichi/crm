import {goods} from './data.js';
import {calculateDiscount} from './calculate.js';


const createRow = obj => {
  const createCell = (val, name) => {
    const newCell = document.createElement('td');
    newCell.append(val);
    newCell.classList.add(name);

    return newCell;
  };

  const idColumn = createCell(obj.id, 'table-body__id-column');
  const nameColumn = createCell(obj.title, 'table-body__name-column');
  const categoryColumn = createCell(
      obj.category, 'table-body__category-column');
  const unitsColumn = createCell(obj.units, 'table-body__units-column');
  const countColumn = createCell(obj.count, 'table-body__count-column');
  const priceColumn = createCell('$' + obj.price, 'table-body__price-column');

  const totalColumn = createCell(
      '$' + calculateDiscount(obj.price, obj.count, obj.discont),
      'table-body__total-column');

  // создаем ячейку с иконками
  const createIconCell = () => {
    const newIconCell = document.createElement('td');

    const imageButton = document.createElement('button');
    if (obj.images.small === undefined && obj.images.big === undefined) {
      imageButton.classList.add('icon__button', 'table-body__no-image-button');
      imageButton.insertAdjacentHTML('beforeend', `
        <image src="./images/table_no_image_icon.svg"
        alt="иконка - нет изображения"></image>
      `);
    } else {
      imageButton.classList.add('icon__button', 'table-body__image-button');
      imageButton.insertAdjacentHTML('beforeend', `
        <image src="./images/table_image_icon.svg"
        alt="иконка - есть изображение"></image>
      `);
    }

    const editButton = document.createElement('button');
    editButton.classList.add('icon__button', 'table-body__edit-button');
    editButton.insertAdjacentHTML('beforeend', `
      <image src="./images/table_edit_icon.svg"
      alt="иконка - отредактировать"></image>
    `);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('icon__button', 'table-body__delete-button');
    deleteButton.insertAdjacentHTML('beforeend', `
      <image src="./images/table_delete_icon.svg"
      alt="иконка - удалить"></image>
    `);

    newIconCell.append(imageButton, editButton, deleteButton);
    newIconCell.classList.add('table-body__icon-column');

    return newIconCell;
  };

  const iconColumn = createIconCell();

  const newRow = document.createElement('tr');
  newRow.append(
      idColumn,
      nameColumn,
      categoryColumn,
      unitsColumn,
      countColumn,
      priceColumn,
      totalColumn,
      iconColumn);
  newRow.classList.add('table-body__row');

  return newRow;
};

const createId = () => {
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let idNumber = getRandomNumber(100000000, 999999999);
  let isId;

  try {
    goods.map(item => {
      if (item.id === idNumber) {
        isId = true;
      }
    });

    if (isId) {
      return createId();
    }
  } catch {
    console.error('Закончились уникальные ID');
    idNumber = null;
  }

  return idNumber;
};


export {createRow, createId};
