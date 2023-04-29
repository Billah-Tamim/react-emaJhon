import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb, deleteShoppingCart } from '../../utilities/fakedb';

const Orders = () => {
    const { products, updateCart } = useLoaderData();
    const [cart, setCart] = useState(updateCart);

    const removeItem = (id) => {
        const newCartData = cart.filter(product => product.id !== id);
        setCart(newCartData);
        removeFromDb(id);
    }
    const deletCart = () => {
        deleteShoppingCart();
        setCart([]);
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        removeItem={removeItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h5>Go to shope page to buy product <Link to='/'>Click here</Link></h5>
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    deletCart={deletCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;