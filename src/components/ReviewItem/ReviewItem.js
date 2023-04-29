import React from 'react';
import './ReviewItem.css';
import { BeakerIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({product, removeItem}) => {
    const {id, price, quantity, img, name, shipping} = product;
    return (
        <div className='review'>
            <div className="review-img">
                <img src={img} alt="" />
            </div>
            <div className="review-details">
                <div className="review-text">
                    <h4>{name}</h4>
                    <p>Price: ${price*quantity}</p>
                    <p>Shipping: ${shipping}</p>
                </div>
                <div className="review-btn">
                    <button onClick={() => removeItem(id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;