import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Order_Cart/Cart';
import Products from '../Products/Products';
import './Shope.css'
import { Link, useLoaderData } from 'react-router-dom';
const Shope = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([]);

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();

    }

    useEffect(() => {
        const shoppingCart = getShoppingCart();
        const saveData = [];
        for (const id in shoppingCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = shoppingCart[id];
                addedProduct.quantity = quantity;
                saveData.push(addedProduct);
            }
        }
        setCart(saveData);
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='products-container'>
            <div className="container-products">
                {
                    products.map(product => <Products key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}>
                    </Products> )
                }
            </div>
            <div className="container-orders">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/orders'>
                        <button className='review-btn'>Review Items</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shope;