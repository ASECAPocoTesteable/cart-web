"use client"
import React, { useState } from 'react';

const AddProductCard = ({ productName }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div style={{ backgroundColor: "white", color: "black", padding: "10px", borderRadius: "10px" }}>
            <p>Product name: {productName}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ margin: "0 10px 0 0" }}>Amount: {count}</p>
                <button onClick={handleDecrement} style={{ marginRight: "5px" }}>-</button>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
};

export default AddProductCard;
