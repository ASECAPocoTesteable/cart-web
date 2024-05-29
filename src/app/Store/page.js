"use client"
import React, {useContext} from "react";
import NavBar from "@/components/NavBar";
import AddProductCard from "@/components/AddProductCard";
import { CartContext } from "@/components/CartContext";

const StorePage = () => {
    const { cart } = useContext(CartContext);
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
                    {products.map((product) => {
                        const isAdded = cart.some(cartProduct => cartProduct.product_id === product.id);
                        return (
                            <AddProductCard
                                key={product.id}
                                product_id={product.id}
                                productName={product.name}
                                initialIsAdded={isAdded}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StorePage;