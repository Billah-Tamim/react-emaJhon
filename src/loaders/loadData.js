import { getStoredCart } from "../utilities/fakedb";

export const loadData = async() =>{
    const productsData = await fetch('products.json');
    const products = await productsData.json();


    const savedCart = getStoredCart();
    const updateCart = [];
    for(const id in savedCart){
        const cartData = products.find(product => product.id === id);
        if(cartData){
            cartData.quantity = savedCart[id];
            updateCart.push(cartData);
        }
    }
    


    return {products, updateCart};
}