import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import Loader from "./components/Loader";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterMessage from "./pages/RegisterMessage";
import Dashboard from "./pages/Dashboard";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <Loader />
            ) : (
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/message" element={<RegisterMessage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            )}
        </div>
    );
}

export default App;
