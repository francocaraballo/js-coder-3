export const createCard = ( { id, brand, model, img, price } ) => {
    const card = document.createElement('div');
    card.classList.add('card', 'p-0');
    card.innerHTML = ` <img src="${img}" />
                <div class="card-body">
                    <h5 class="card-title">${brand} ${model}</h5>
                    <p class="card-text">$${price}</p>
                    <div class='d-flex justify-content-center'>
                        <button class="btn btn-dark btn-add d-flex align-items-center gap-2" value="${id}">Add to bag
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"/>
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                            </svg>
                        </button>
                    </div>
                </div>`;
    
                return card;
}

export const getSneakers = async () => {
    const response = await fetch('js/data/sneakers.json');
    const data =  await response.json();
    return setQty(data);
}

// Add quantity property
const setQty = (arr) => {
    const sneakers = [];
    for (const i of arr) {
        i.quantity = 0;
        sneakers.push(i);
    }
    return sneakers
}