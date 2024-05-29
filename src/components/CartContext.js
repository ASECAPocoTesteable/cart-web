"use client"
import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.amount * product.price, 0);
    };

    const setCartItemsEmpty = () => {
        setCart([]);
    };

    const removeFromCart = (product_id) => {
        setCart(prevCart => prevCart.filter(product => product.product_id !== product_id));
    };

    const updateProductAmount = (product_id, newAmount) => {
        setCart(prevCart => prevCart.map(product =>
            product.product_id === product_id ? {...product, amount: newAmount} : product
        ));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCartItemsEmpty, updateProductAmount, calculateTotal}}>
            {children}
        </CartContext.Provider>
    );
};