import React from "react";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";

const CartOverviewPage = () => {
    const products = [
        { productName: "Product 1", amount: 32 },
        { productName: "Product 2", amount: 25 },
        { productName: "Product 3", amount: 1 },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
                <h1>Cart:</h1>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {products.map((product, index) => (
                        <ProductCard key={index} productName={product.productName} amount={product.amount} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CartOverviewPage;
