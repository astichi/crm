import {calculateDiscount} from './calculate.js';
import {tableIcons, modalIcons, closeIcon} from './svg.js';
import {modalErrorOverlay, modalSucsessOverlay} from './getElements.js';


const createTableRow = obj => {
  const row = document.createElement('tr');
  row.classList.add('table-body__row');
  row.insertAdjacentHTML('beforeend', `
    <td class="table-body__id-column">${obj.id}</td>
    <td class="table-body__name-column">${obj.title}</td>
    <td class="table-body__category-column">${obj.category}</td>
    <td class="table-body__units-column">${obj.units}</td>
    <td class="table-body__count-column">${obj.count}</td>
    <td class="table-body__price-column">$ ${obj.price}</td>
    <td class="table-body__total-column">$
      ${calculateDiscount(obj.price, obj.count, obj.discount)}</td>
    <td class="table-body__icon-column">
      <div class="icons-wrapper">
        <button type="button" class="icon__button table-body__image-button">
          ${obj.image === 'image/notimage.jpg' ? tableIcons.noimage :
            tableIcons.image}
        </button>
        <button type="button" class="icon__button
          table-body__edit-button">${tableIcons.edit}</button>
        <button type="button" class="icon__button
          table-body__delete-button">${tableIcons.delete}</button>
      </div>    
    </td>
  `);

  row.dataset.id = obj.id;
  row.dataset.pic = obj.image === 'image/notimage.jpg' ?
    '../../images/no-image.jpg' :
    `http://principled-iced-confidence.glitch.me/${obj.image}`;

  return row;
};

const createErrorModal = () => {
  modalErrorOverlay.insertAdjacentHTML('beforeend', `
    <div class="modal__error error">
      <button class="error__close-button" type="button">${closeIcon}</button>
      <div class="error__image">${modalIcons.error}</div>
      <p class="error__text">Что-то пошло не так</p>
    </div>
  `);

  return modalErrorOverlay;
};

const createSucsessModal = () => {
  modalSucsessOverlay.insertAdjacentHTML('beforeend', `
    <div class="modal__sucsess sucsess">
      <div class="sucsess__image">${modalIcons.sucsess}</div>
      <p class="sucsess__text">Данные успешно добавлены</p>
    </div>
  `);

  return modalSucsessOverlay;
};


export {createTableRow, createErrorModal, createSucsessModal};
