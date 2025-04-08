import React from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterMessage() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 relative"
            style={{
                backgroundImage: "url('/img/Home.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

            <div className="relative z-10 text-center text-white px-6">
                {/* Main Message */}
                <h1 className="text-4xl md:text-6xl font-bold handwritten-text drop-shadow-lg mb-6">
                    Keep a Diary,<br /> and Someday it’ll <br />Keep You..
                </h1>

                {/* Subtext + Button */}
                <div>
                    <p className="text-l md:text-xl mt-14 text-lg md:text-xl opacity-80">
                        Your journey starts here...
                    </p>
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="mt-4 px-6 py-3 written-text bg-black text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        Start Your Journey
                    </button>
                </div>
            </div>
        </div>
    );
}
