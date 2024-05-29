"use client"
import React from "react";
import NavBar from "@/components/NavBar";
import AddProductCard from "@/components/AddProductCard";

const StorePage = () => {
    // Datos de ejemplo para los productos
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
                <h1>Store:</h1>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {products.map((product) => (
                        <AddProductCard key={product.id} product_id={product.id} productName={product.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StorePage;
