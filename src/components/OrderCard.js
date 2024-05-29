"use client"
import React, { useState } from 'react';

const OrderCard = ({ orderId, orderState, products }) => {
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
        </div>
    );
};

export default OrderCard;
