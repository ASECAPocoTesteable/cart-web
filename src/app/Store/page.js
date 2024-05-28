import React from "react";
import NavBar from "@/components/NavBar";
import AddProductCard from "@/components/AddProductCard";


const StorePage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                    <h1>Store:</h1>
                    <AddProductCard productName={"Product 1"}/>
                </div>
            </div>
        </div>
    );
};

export default StorePage;