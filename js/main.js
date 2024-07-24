
document.addEventListener('DOMContentLoaded', () => {
    const containerProducts = document.getElementById('container-products');
    const dFrag = document.createDocumentFragment();

    for (let i = 0; i < sneakers.length; i++) {
        const sneaker = sneakers[i];
        const card = createCard(sneaker);
        dFrag.appendChild(card);

    }

    containerProducts.appendChild(dFrag);
})