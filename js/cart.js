import { sneakers } from './main.js'

export const shopCart = [];

export const addItemToCart = (id) => {
    // Busca el item
    const item = sneakers.find(e => e.id === id);
    console.log(item);
    
   
    if(item) {
        const isRepeat = shopCart.some(e => e.id === item.id);
        
        if(isRepeat) {
            item.quantity++;
        } else {
            item.quantity++
            shopCart.push(item);
        }
    }

    console.log(shopCart);
    
}
