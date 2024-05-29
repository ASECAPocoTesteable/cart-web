"use client"
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";

const CartOverviewPage = () => {
    const [products, setProducts] = useState([
        { id: 1, productName: "Product 1", amount: 10 },
        { id: 2, productName: "Product 2", amount: 5 },
        { id: 3, productName: "Product 3", amount: 2 },
    ]);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);

    const handleRemove = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const handleCheckout = () => {
        // Simulate successful checkout
        const hasEnoughStock = true;
        if (hasEnoughStock) {
            setProducts([]);
            setShowSuccessToast(true);
        } else {
            setShowErrorToast(true);
        }

        // Hide toast after 3 seconds
        setTimeout(() => {
            setShowSuccessToast(false);
            setShowErrorToast(false);
        }, 3000);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
                <h1>Cart:</h1>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            productName={product.productName}
                            amount={product.amount}
                            onRemove={() => handleRemove(product.id)}
                        />
                    ))}
                </div>
                {products.length > 0 && (
                    <button
                        onClick={handleCheckout}
                        style={{
                            borderRadius: "10px",
                            border: "2px solid black",
                            padding: "10px 20px",
                            backgroundColor: "green",
                            color: "white",
                            cursor: "pointer"
                        }}
                    >
                        Checkout
                    </button>
                )}
            </div>
            {showSuccessToast && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "green",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        border: "2px solid black",
                        zIndex: "999",
                    }}
                >
                    Order sent successfully!
                </div>
            )}
            {showErrorToast && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "red",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        border: "2px solid black",
                        zIndex: "999",
                    }}
                >
                    Insufficient stock for some products.
                </div>
            )}
        </div>
    );
};

export default CartOverviewPage;
