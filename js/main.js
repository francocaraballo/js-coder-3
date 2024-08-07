import { getSneakers, createCard } from "./products.js";
import { addItemToCart, handleButtonCart, handleClearCart, alertProductAdded, handlePay } from "./cart.js";

document.addEventListener('DOMContentLoaded', async() => {
    const sneakers =  await getSneakers();
    handleButtonCart();
    handleClearCart();
    handlePay();

    const containerProducts = document.getElementById('container-products');
    const dFrag = document.createDocumentFragment();

    for (let i = 0; i < sneakers.length; i++) {
        const sneaker = sneakers[i];
        const card = createCard(sneaker);
        dFrag.appendChild(card);

        const btnAddToCart = card.querySelector('.btn-add');
        btnAddToCart.onclick = function() {
            addItemToCart(sneaker.id, sneakers);
            alertProductAdded(sneaker);
        }
    }
    containerProducts.appendChild(dFrag);
});
