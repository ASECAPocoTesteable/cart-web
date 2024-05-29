"use client"
import React, { useState } from "react";
import Link from "next/link";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = () => {
        if (!email || !address) {
            setErrorMessage("Please enter both email and address.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setErrorMessage("Please enter a valid email.");
            return;
        }

        console.log("Email:", email);
        console.log("Address:", address);

        setErrorMessage("");
    };

    const isButtonDisabled = !email || !address || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            height: "100vh",
            justifyContent: "center"
        }}>
            <h1>Register</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "300px", color: "black" }}
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "300px", color: "black" }}
            />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {!isButtonDisabled && (
                <Link href={"/Store"}>
                    <button
                        onClick={handleRegister}
                        style={{
                            padding: "10px 20px",
                            borderRadius: "5px",
                            backgroundColor: "green",
                            border: "none",
                            cursor: "pointer",
                            color: "black"
                        }}
                    >
                        Register
                    </button>
                </Link>
            )}
        </div>
    );
};

export default RegisterPage;
