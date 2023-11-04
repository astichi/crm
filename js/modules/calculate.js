const calculateTableTotal = (tableTotalPrice) => {
  const tableTotalColumn =
    document.querySelectorAll('.table-body__total-column');

  const newArr = [];

  tableTotalColumn.forEach(item => {
    newArr.push(+item.innerText.slice(1));
  });

  const result = newArr.reduce((acc, item) => acc + item, 0);

  return tableTotalPrice.textContent = `$ ${result.toFixed(2)}`;
};

const calculateDiscount = (price, count, discont) => {
  let total = price * count;

  if (discont && discont !== false) {
    total -= price * count * discont / 100;
  }

  return total;
};

const calculateFormTotal = (form, formTotal) => {
  form.addEventListener('change', () => {
    const totalPrice =
      calculateDiscount(form.price.value, form.count.value, form.discont.value);

    formTotal.textContent = '$ ' + totalPrice.toFixed(2);
  });
};


export {calculateTableTotal, calculateDiscount, calculateFormTotal};
