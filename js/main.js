import { getSneakers, createCard } from "./products.js";
import { addItemToCart, handleButtonCart } from "./cart.js";

export const sneakers = getSneakers();

document.addEventListener('DOMContentLoaded', () => {
    handleButtonCart();

    const containerProducts = document.getElementById('container-products');
    const dFrag = document.createDocumentFragment();

    for (let i = 0; i < sneakers.length; i++) {
        const sneaker = sneakers[i];
        const card = createCard(sneaker);
        dFrag.appendChild(card);

        const btnAddToCart = card.querySelector('.btn-add');
        btnAddToCart.onclick = function() {
            addItemToCart(sneaker.id);
        }
    }
    containerProducts.appendChild(dFrag);
})
