import React from 'react';
import { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Order_Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products , previousCart}= useLoaderData();
    const [cart, setCart] = useState(previousCart);
    
    const handleRemoveItem = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();

    }
        
    return (
        <div className='products-container'>
            <div className='orders-products'>
                {
                   cart.map(product => <ReviewItem key={product.id} product={product}
                   handleRemoveItem={handleRemoveItem}
                   />)
                }
                {
                    cart.length === 0 && <h2>No Items for Review. Please <Link to='/shope'>Shope More</Link></h2>
                }
            </div>
            <div className='container-orders'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;