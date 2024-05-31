"use client"
import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from './CartContext';

const AddProductCard = ({product_id, productName, initialIsAdded, price}) => {
    const { addToCart, cart, removeFromCart } = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(initialIsAdded);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const handleAddToCart = () => {
        addToCart({product_id, productName, amount: 1, price: price});
        setIsAdded(true);
        console.log(cart);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product_id);
        setIsAdded(false);
    };

    return (
        <div style={{backgroundColor: "white", color: "black", padding: "10px", borderRadius: "10px"}}>
            <p>Product name: {productName}</p>
            <p>Price: {price}</p>
            <button style={{
                borderRadius: "10px",
                border: "2px solid black",
                padding: "5px 10px"
            }} onClick={isAdded ? handleRemoveFromCart : handleAddToCart}>
                {isAdded ? "Sacar del carrito" : "Agregar al carrito"}
            </button>
        </div>
    );
};

export default AddProductCard;