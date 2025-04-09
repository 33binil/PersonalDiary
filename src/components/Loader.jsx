import React from "react";
import "../styles/loader.css"; // Assuming custom CSS lives here

export default function Loader() {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <img
                src="/img/logo.png"
                alt="Loading..."
                className="w-60 h-auto animate-fadeInScale"
            />
        </div>
    );
}
