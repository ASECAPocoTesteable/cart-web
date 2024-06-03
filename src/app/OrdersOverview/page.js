"use client"
import React, {useEffect, useState} from "react";
import NavBar from "@/components/NavBar";
import OrderCard from "@/components/OrderCard";
import axios from "axios";

const OrdersOverviewPage = () => {
    // Datos de ejemplo para las órdenes
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://controltowerpt:8080/order/getAll')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleCancel = (orderId) => {
        setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
                <h1>Orders:</h1>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {orders.length > 0 ? (
                        orders.map(order => (
                            <OrderCard key={order.id} orderId={order.id}
                                       clientDirection={order.clientDirection} state={order.state}
                                       products={order.productOrders} />
                        ))
                    ) : (
                        <p>No orders available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrdersOverviewPage;

