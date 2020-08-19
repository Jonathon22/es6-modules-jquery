
import { setCart } from './../helpers/data/cartData.js';
import { makeCartDom } from './makeCartDom.js';
import { makeModal, chargeIt, showCartItems } from './makeModal.js';


const makeCart = () => {
  $("#cart").html(` 
  ${makeCartDom()}
  ${makeModal()}
    `
    );
    $('#charge-it').click(() => {
      const ccNum = $('#credit-card').val();
      chargeIt(ccNum);
    })

    showCartItems();
}

const addToCart = (array, index) => {
  const cartButton = $(`#cart-add-${index}`);

  cartButton.on('click', () => {
    setCart(array[index]);
    makeCart();
  })
}

export { makeCart, addToCart };