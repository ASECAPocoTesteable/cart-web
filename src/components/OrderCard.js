"use client"
import React from 'react';

const OrderCard = ({ orderId, clientDirection, state, products}) => {

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
            <p>State: {state}</p>
            <p>Client direction: {clientDirection}</p>
            <h4>Products:</h4>
            <ul style={{textAlign: "left"}}>
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <li key={index}>{product.name} - ${product.price} - {product.quantity}u</li>
                    ))
                ) : (
                    <li>No hay productos disponibles</li>
                )}
            </ul>
        </div>
    );
};

export default OrderCard;
