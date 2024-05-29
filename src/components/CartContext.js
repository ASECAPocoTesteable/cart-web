"use client"
import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    const removeFromCart = (product_id) => {
        setCart(prevCart => prevCart.filter(product => product.product_id !== product_id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};