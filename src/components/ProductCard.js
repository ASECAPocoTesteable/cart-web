"use client"
import React, {useContext, useEffect, useState} from 'react';
import { CartContext } from './CartContext';

const ProductCard = ({product_id, productName, initialAmount = 1, onRemove}) => {
    const {removeFromCart, updateProductAmount, cart} = useContext(CartContext);
    const [amount, setAmount] = useState(initialAmount);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const handleAmountChange = (e) => {
        const newAmount = Math.max(1, parseInt(e.target.value) || 1);
        setAmount(newAmount);
        updateProductAmount(product_id, newAmount);
    };

    const handleRemove = () => {
        removeFromCart(product_id);
    };

    return (
        <div style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
        }}>
            <p>Product name: {productName}</p>
            <div style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                <p style={{margin: "0 10px 0 0"}}>Amount: </p>
                <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    min="1"
                    style={{
                        width: "50px",
                        textAlign: "center",
                        border: "2px solid black",
                        borderRadius: "5px"
                    }}
                />
            </div>
            <button
                style={{
                    borderRadius: "10px",
                    border: "2px solid black",
                    padding: "5px 10px",
                    backgroundColor: "red",
                    color: "white",
                    cursor: "pointer"
                }}
                onClick={handleRemove}
            >
                Eliminar del carrito
            </button>
        </div>
    );
};

export default ProductCard;