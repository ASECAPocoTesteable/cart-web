"use client"
import React, { useState } from 'react';

const ProductCard = ({ productName, amount }) => {

    return (
        <div style={{ backgroundColor: "white", color: "black", padding: "10px", borderRadius: "10px" }}>
            <p>Product name: {productName}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ margin: "0 10px 0 0" }}>Amount: {amount}</p>
            </div>
        </div>
    );
};

export default ProductCard;
