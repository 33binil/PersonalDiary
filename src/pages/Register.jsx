import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div
                className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-4"
                style={{
                    backgroundImage: "url('/img/Home.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

                {/* Form Card */}
                <div
                    className="relative z-10 bg-white/30 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-5xl text-left border border-white/50"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-black handwritten-text">Just you, your space, and your memories — let’s begin.</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="text-[15px] md:text-[17px] block text-gray-800 font-extrabold">Full Name</label>
                            <input
                                type="text"
                                className="text-[12px] md:text-[15px] w-full px-4 py-2 border border-gray-300 rounded"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="text-[15px] md:text-[17px] block text-gray-800 font-extrabold">Email</label>
                            <input
                                type="email"
                                className="text-[12px] md:text-[15px] w-full px-4 py-2 border border-gray-300 rounded"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="text-[15px] md:text-[17px] block text-gray-800 font-extrabold">Password</label>
                            <input
                                type="password"
                                className="text-[12px] md:text-[15px] w-full px-4 py-2 border border-gray-300 rounded"
                                placeholder="••••••••"
                            />
                        </div>
                        <div>
                            <label className="text-[15px] md:text-[17px] block text-gray-800 font-extrabold">Confirm Password</label>
                            <input
                                type="password"
                                className="text-[12px] md:text-[15px] w-full px-4 py-2 border border-gray-300 rounded"
                                placeholder="••••••••"
                            />
                        </div>
                        <div>
                            <label className="text-[15px] md:text-[17px] block text-gray-800 font-extrabold">Date of Birth (optionl)</label>
                            <input
                                type="password"
                                className="text-[12px] md:text-[15px] w-full px-4 py-2 border border-gray-300 rounded"
                                placeholder="DD/MM/YYYY"
                            />
                        </div>
                        <button
                            onClick={() => navigate("/message")}
                            className="text-l md:text-xl w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition handwritten-text">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
