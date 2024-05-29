"use client"
import React, { useState } from 'react';

const OrderCard = ({ orderId, orderState, products, onCancel }) => {
    const handleCancel = () => {
        onCancel(orderId);
    };
    return (
        <div style={{
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
        }}>
            <h3>Order ID: {orderId}</h3>
            <p>State: {orderState}</p>
            <h4>Products:</h4>
            <ul style={{ textAlign: "left" }}>
                {products.map((product, index) => (
                    <li key={index}>{product.productName} - Amount: {product.amount}</li>
                ))}
            </ul>
            <button
                onClick={handleCancel}
                style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "2px solid black",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    cursor: "pointer"
                }}
            >
                Cancel
            </button>
        </div>
    );
};

export default OrderCard;
