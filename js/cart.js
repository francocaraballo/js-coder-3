const cartBtn = document.querySelector('#btn-cart');
const itemsCartContainer = document.querySelector('#items-cart-container');
const itemsCount = document.querySelector('#items-count');
const btnClearCart = document.querySelector('#btn-clear-cart');
const btnPay = document.querySelector('#btn-pay')

export const shopCart = JSON.parse(localStorage.getItem('cart')) || [];

const updateStorageCart = () => {
	const cartJSON = JSON.stringify(shopCart);
	localStorage.setItem('cart', cartJSON);
}

export const addItemToCart = (id, arr) => {
	const item = arr.find(e => e.id === id);

	if (item) {
		const isRepeat = shopCart.some(e => e.id === item.id);

		if (isRepeat) {
			item.quantity++;
		} else {
			item.quantity++
			shopCart.push(item);
		}
	}
	updateStorageCart();
}

const createItemCart = ({ brand, model, price, quantity }) => {
	const row = document.createElement('div');
	row.classList.add('row');

	row.innerHTML = `
        <div class="col-6">${brand} ${model}</div>
        <div class="col-3 text-center">${quantity} x $${price}</div>
        <div class="col-3 text-center">$${quantity * price}</div>
    `;

	return row;
}

const countItems = (arr) => {
	let count = 0;
	for (const e of arr) {
		count += e.quantity
	}
	return count;
}

export const handleButtonCart = () => {
	cartBtn.addEventListener('click', () => {
		itemsCartContainer.innerHTML = '';
		for (let i = 0; i < shopCart.length; i++) {
			const e = shopCart[i];
			const itemRowCart = createItemCart(e);
			itemsCartContainer.appendChild(itemRowCart);
		};
		itemsCount.textContent = `${countItems(shopCart)} items`;
	})
}

const clearCart = () => {
	shopCart.splice(0);
	updateStorageCart();
}

export const handleClearCart = () => {
	btnClearCart.addEventListener('click', () => {

		Swal.fire({
			title: 'Are you sure to empty the cart?',
			icon: 'warning',
			showCancelButton: true,
			showConfirmButton: true,
			confirmButtonText: 'Clear',
			cancelButtonText: 'Cancel'
		})
		.then(result => result.isConfirmed && (clearCart(), Swal.fire("It's done!", "", "success")));
	});
}

export const alertProductAdded = ({ brand, model }) => {
	Toastify({
		text: `+ ${brand} ${model}`,
		duration: 2000,
		gravity: 'bottom',
		style: {
			background: '#454241',
			color: 'white'
		}
		}).showToast();
}

export const handlePay = () => {
	btnPay.addEventListener('click', () => {
		if(!shopCart.length){
			Swal.fire({
				icon: 'warning',
				title: 'Cart is empty!'
			});
			
		} else {
			Swal.fire({
				title: 'Payment success',
				text: 'Thanks for your purchase',
				icon: 'success',
				timer: 1500
			});
			clearCart();
		}
	})
}