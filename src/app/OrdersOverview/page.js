import React from "react";
import NavBar from "@/components/NavBar";


const CartOverviewPage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                    <h1>Orders:</h1>
                </div>
            </div>
        </div>
    );
};

export default CartOverviewPage;