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

const calculateFormTotal = (form, formTotal) => {
  form.addEventListener('change', () => {
    let total;
    total = form.price.value * form.count.value;

    if (form.discount.value) {
      total -= form.price.value * form.count.value * form.discount.value / 100;
    }

    formTotal.textContent = '$ ' + total.toFixed(2);
  });
};


export {calculateTableTotal, calculateFormTotal};
