import {form, formTotal} from './getElements.js';


const calculateDiscount = (price, count, discount) => {
  let total = price * count;

  if (discount && discount !== false) {
    total -= price * count * discount / 100;
  }

  return total;
};

// const calculateFormTotal = () => {
//   form.addEventListener('change', () => {
//     const totalPrice =
//       calculateDiscount(
//           form.price.value,
//           form.count.value,
//           form.discount.value);

//     formTotal.textContent = `$ ${totalPrice.toFixed(2)}`;
//   });
// };


export {calculateDiscount};
