import {closeIcon, deleteIcon} from './svg.js';
import {formOverlay} from './getElements.js';
import {loadStyle} from './loadStyle.js.js';
import {
  openErrorModal,
  controlPostGoods,
  controlEditGoods,
  controlCheckbox,
  controlImagePreview} from './control.js';
import {calculateDiscount, calculateFormTotal} from './calculate.js';
import {URL} from './const.js';


const openFormModal = async (err, data, id) => {
  if (err) {
    console.warn(err, data);
    openErrorModal(err);
    return;
  }

  await loadStyle('../../styles/modal.css');

  formOverlay.classList.add('is-visible');
  formOverlay.insertAdjacentHTML('beforeend', `
    <div class="modal__main-box">
      <button class="modal__close-button" type="button">${closeIcon}</button>

      <form class="modal__form form">
        <div class="form__title">
          <h2 class="form__title-text">${data ?
            'Изменить товар' : 'Добавить товар'}</h2>
          <p class="form__title-id">${data ?
            `id: <span class="form__id-number">${id}</span>` : ''}</p>
        </div>

        <fieldset class="form__box">
          <div class="form__container">
            <label class="form__label form__label-name">
              <span class="form__label-text">Наименование</span>
              <input class="form__input" type="text" name="title"
                ${data ? `value="${data.title}"` : ''} required>
            </label>

            <label class="form__label form__label-description">
              <span class="form__label-text">Описание</span>
              <textarea class="form__textarea" name="description"
                required>${data ? data.description : ''}</textarea>
            </label>

            <label class="form__label form__label-category">
              <span class="form__label-text">Категория</span>
              <input class="form__input" type="text" name="category"
                ${data ? `value="${data.category}"` : ''} required>
            </label>

            <label class="form__label form__label-units">
              <span class="form__label-text">Единицы измерения</span>
              <input class="form__input" type="text" name="units"
                ${data ? `value="${data.units}"` : ''}
              required>
            </label>

            <label class="form__label form__label-count">
              <span class="form__label-text">Количество</span>
              <input class="form__input" type="number" name="count"
                ${data ? `value="${data.count}"` : ''}
              required>
            </label>

            <div class="form__label form__label-discount">
              <label class="form__label-text">
                <span>Дисконт</span>
              </label>
              <div class="checkbox">
                <input class="form__input-checkbox" type="checkbox"
                  name="checkbox" id="checkbox"
                    ${data && data.discount ? 'checked' : ''}>
                <label>
                  <input class="form__input form__input-discount" type="number"
                    name="discount" id="discount"
                      ${data && data.discount ? `value="${data.discount}"` : ''}
                      ${data && data.discount ? '' : 'disabled'} required>
                </label>
              </div> 
            </div>

            <label class="form__label form__label-price">
              <span class="form__label-text">Цена</span>
              <input class="form__input" type="number" name="price"
                ${data ? `value="${data.price}"` : ''} required> 
            </label>

            <p class="form__image-warning-text">
              Изображение не должно превышать размер 1мб
            </p>

            <label class="form__image-upload">Добавить изображение
              <input class="form__image-button" type="file"
                name="image" accept="image/*">
            </label>
          </div>

          <div class="form__product product">
            <img class="product__image"
              ${data && data.image && data.image !== 'image/notimage.jpg' ?
              `src="${URL}/${data.image}"` : ''}>
            <button class="product__delete" type="button">${deleteIcon}</button>
          </div>
        </fieldset>

        <div class="form__total total">
          <p class="total__text">Итоговая стоимость:
            <span class="total__sum">$ ${data ?
              calculateDiscount(data.price, data.count, data.discount)
                  .toFixed(2) : '0.00'}</span>
          </p>
          <div class="total__wrapper">
            <p class="total__error"></p>
            <button class="form__submit-button" type="submit">
            ${data ? 'Изменить товар' : 'Добавить товар'}
            </button>
          </div>
        </div>
  </form>
    </div>
`);

  const form = document.querySelector('.modal__form');
  const formCheckbox = document.querySelector('.form__input-checkbox');
  const formDiscount = document.querySelector('.form__input-discount');
  const formTotal = document.querySelector('.total__sum');
  const file = document.querySelector('.form__image-button');
  const preview = document.querySelector('.product__image');
  const warning = document.querySelector('.form__image-warning-text');
  const imageDelete = document.querySelector('.product__delete');

  if (data) {
    controlEditGoods(form, id);
  } else {
    controlPostGoods(form);
  }

  controlImagePreview(file, preview, warning, imageDelete);
  controlCheckbox(formCheckbox, formDiscount);
  calculateFormTotal(form, formTotal);
};


export {openFormModal};
