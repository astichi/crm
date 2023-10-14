'use strict';

const goods = [
  {
    "id": 253842678,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {}
  },
  {
    "id": 296378448,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 215796548,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {}
  },
  {
    "id": 246258248,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
];


const createRow = obj => {
  const createCell = (val, name) => {
    const newCell = document.createElement('td');
    newCell.append(val);
    newCell.classList.add(name);

    return newCell;
  };

  const idColumn = createCell(obj.id, 'table-body__id-column');
  const nameColumn = createCell(obj.title, 'table-body__name-column');
  const categoryColumn = createCell(obj.category, 'table-body__category-column');
  const unitsColumn = createCell(obj.units, 'table-body__units-column');
  const countColumn = createCell(obj.count, 'table-body__count-column');
  const priceColumn = createCell('$' + obj.price, 'table-body__price-column');
  const totalColumn = createCell('$' + obj.price * obj.count, 'table-body__total-column');

  const createIconCell = () => {
    const newIconCell = document.createElement('td');

    const imageButton = document.createElement('button');
    if (obj.images.small === undefined && obj.images.big === undefined) {
      imageButton.classList.add('icon__button', 'table-body__no-image-button');
      imageButton.insertAdjacentHTML('beforeend', `
      <svg>
        <use href="#no-image-icon"></use>
      </svg>
      `);
    } else {
      imageButton.classList.add('icon__button', 'table-body__image-button');
      imageButton.insertAdjacentHTML('beforeend', `
      <svg>
        <use href="#image-icon"></use>
      </svg>
      `);
    }

    const editButton = document.createElement('button');
    editButton.classList.add('icon__button', 'table-body__edit-button');
    editButton.insertAdjacentHTML('beforeend', `
    <svg>
      <use href="#edit-icon"></use>
    </svg>
    `);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('icon__button', 'table-body__delete-button');
    deleteButton.insertAdjacentHTML('beforeend', `
    <svg>
      <use href="#delete-icon"></use>
    </svg>
    `);

    newIconCell.append(imageButton, editButton, deleteButton);
    newIconCell.classList.add('table-body__icon-column');

    return newIconCell;
  };

  const iconColumn = createIconCell();

  const newRow = document.createElement('tr');
  newRow.append(idColumn, nameColumn, categoryColumn, unitsColumn, countColumn, priceColumn, totalColumn, iconColumn);
  newRow.classList.add('table-body__row');

  return newRow;
};


const renderGoods = arr => {
  // const result = arr.map(item => createRow(item));

  // const table = document.querySelector('.table-body');
  // result.map(index => table.append(index));

  const result =arr.map(createRow);

  const table = document.querySelector('.table-body');
  table.append(...result);
};

renderGoods(goods);
