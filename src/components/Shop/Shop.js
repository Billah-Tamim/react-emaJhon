import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    
    useEffect(()=>{
        const storedCart = getStoredCart();
        const storedArray = [];
        for(const id in storedCart){
            const storedObject=products.find(product => product.id===id);
            if(storedObject){
                storedObject.quantity = storedCart[id];
                storedArray.push(storedObject);
            }
        }
        setCart(storedArray);
    },[products]);

    const handelAddToCart = product =>{
        let newCart = [];
        const exist = cart.find(item => item.id === product.id);
        if(!exist){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            const rest = cart.filter(item => item.id !== product.id);
            exist.quantity +=1;
            newCart = [...rest, exist];
        }
        
        setCart(newCart);
        addToDb(product.id);
    }
    const deletCart = () =>{
        deleteShoppingCart();
        setCart([]);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} deletCart={deletCart}>
                    <Link to='/orders'>
                        <button>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;