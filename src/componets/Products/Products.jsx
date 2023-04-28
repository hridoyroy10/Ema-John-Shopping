// import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css'
const Products = ({product, handleAddToCart}) => {
    console.log(product);
    // const {product, handleAddToCart} = props;
    const { name, img, seller, ratings, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>Name:{name}</h6>
                <p>Price: <small>${price}</small></p>
                <p>Seller: <small>{seller}</small></p>
                <p>Ratings: <small>{ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className="btn-cart">
                <p className='btn-text'>Add to Cart</p>
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
            </button>
        </div>
    );
};

export default Products;