import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div
                className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/img/Home.jpg')",
                }}
            >
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

                {/* Content - z-10 ensures it appears above overlay */}
                <div
                    className="relative z-10 bg-white/30 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-5xl text-left border border-white/50"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-black handwritten-text">Your space is waiting. Ready to step in?</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-800 font-extrabold">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-800 font-extrabold">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            onClick={() => navigate("/dashboard")}
                            className="text-l md:text-xl w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition handwritten-text">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
