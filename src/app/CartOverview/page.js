"use client"
import React, {useContext, useState} from "react";
import axios from 'axios';
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import {CartContext} from "@/components/CartContext";

const CartOverviewPage = () => {
    const {cart, removeFromCart, setCartItemsEmpty, calculateTotal} = useContext(CartContext);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [address, setAddress] = useState('');
    const [showAddressToast, setShowAddressToast] = useState(false);

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const handleCheckout = async () => {
        if (address.trim() === '') {
            setShowAddressToast(true);
            setTimeout(() => {
                setShowAddressToast(false);
            }, 3000);
            return;
        }

        try {
            const response = await axios.post('http://controltowerpt:8080/order/checkout', {
                products: cart.map(item => ({ productId: item.product_id, quantity: item.amount })),
                direction: address,
            });

            if (response.status === 200) {
                setCartItemsEmpty();
                setShowSuccessToast(true);
            } else {
                setShowErrorToast(true);
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            setShowErrorToast(true);
        }

        // Hide toast after 3 seconds
        setTimeout(() => {
            setShowSuccessToast(false);
            setShowErrorToast(false);
        }, 3000);
    };

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar/>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                <h1>Cart:</h1>
                <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    {cart.map((product) => (
                        <ProductCard
                            key={product.product_id}
                            product_id={product.product_id}
                            productName={product.productName}
                            amount={product.amount}
                            price={product.price}
                            onRemove={() => handleRemove(product.product_id)}
                        />
                    ))}
                </div>
                <h2>Total: {calculateTotal()}</h2>
                <div style={{display: "flex", flexDirection: "column", gap: "10px", alignItems: "center"}}>
                    <label htmlFor="address">Direccion de entrega:</label>
                    <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={{
                            borderRadius: "10px",
                            border: "2px solid black",
                            padding: "10px 20px",
                            width: "300px",
                            color: "black",
                        }}
                    />
                </div>
                {cart.length > 0 && (
                    <button
                        onClick={handleCheckout}
                        style={{
                            borderRadius: "10px",
                            border: "2px solid black",
                            padding: "10px 20px",
                            backgroundColor: "green",
                            color: "white",
                            cursor: "pointer",
                            marginTop: "20px"
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
            {showAddressToast && (
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
                    Rellene la direccion para hacer el pedido.
                </div>
            )}
        </div>
    );
};

export default CartOverviewPage;