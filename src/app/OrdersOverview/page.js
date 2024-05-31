"use client"
import React, {useState} from "react";
import NavBar from "@/components/NavBar";
import OrderCard from "@/components/OrderCard";

const CartOverviewPage = () => {
    // Datos de ejemplo para las órdenes
    const [orders, setOrders] = useState([
        {
            orderId: 1,
            orderState: "Pending",
            products: [
                { productName: "Product 1", amount: 2 },
                { productName: "Product 2", amount: 3 },
            ],
        },
        {
            orderId: 2,
            orderState: "Delivered",
            products: [
                { productName: "Product 3", amount: 1 },
                { productName: "Product 4", amount: 2 },
            ],
        },
        {
            orderId: 3,
            orderState: "Canceled",
            products: [
                { productName: "Product 5", amount: 4 },
                { productName: "Product 6", amount: 1 },
            ],
        },
    ]);

    const handleCancel = (orderId) => {
        setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
                <h1>Orders:</h1>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {orders.map((order) => (
                        <OrderCard
                            key={order.orderId}
                            orderId={order.orderId}
                            orderState={order.orderState}
                            products={order.products}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CartOverviewPage;

