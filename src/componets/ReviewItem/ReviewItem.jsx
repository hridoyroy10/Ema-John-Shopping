import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveItem }) => {
    const {id, name, price, img, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-items-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-details">
                    <button onClick={()=> handleRemoveItem(id)} className="delete-btn">
                        <TrashIcon className="btn-icon" ></TrashIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;