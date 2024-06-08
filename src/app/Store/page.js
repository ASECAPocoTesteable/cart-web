"use client"
import React, {useContext, useEffect, useState} from "react";
import NavBar from "@/components/NavBar";
import AddProductCard from "@/components/AddProductCard";
import { CartContext } from "@/components/CartContext";
import axios from "axios";

const StorePage = () => {
    const { cart } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/shop')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

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
                                className="add-product-card"
                                key={product.id}
                                product_id={product.id}
                                productName={product.name}
                                initialIsAdded={isAdded}
                                price={product.price}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StorePage;
