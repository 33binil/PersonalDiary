import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/fadeUp.css";
import useFadeUp from "../hooks/useFadeUp.js";
import useFadeZoom from "../hooks/useFadeZoom";
import "../styles/fadeZoom.css";

export default function HomePage() {
    useFadeZoom();
    useFadeUp();
    const navigate = useNavigate();

    return (
        <div className="font-sans bg-gray-100 text-black">
            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-center px-4"
                style={{
                    backgroundImage: "url('/img/Home.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

                <div className="relative z-10">
                    <h1 className="fade-up text-5xl md:text-9xl italic text-white drop-shadow-md written-text">
                        Personal Diary
                    </h1>

                    <div className="fade-up mt-20 space-x-4 delay-200">
                        <button
                            onClick={() => navigate("/login")}
                            className="text-[14px] md:text-[20px] px-12 py-4 font-bold bg-black text-white rounded shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => navigate("/Register")}
                            className="text-[14px] md:text-[20px] px-12 py-4 font-bold bg-white text-black rounded shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* Tagline & Description */}
            <div className="bg-white py-20 px-6 md:px-20 text-center shadow-xl -mt-16 mx-4 rounded-lg relative z-10 handwritten-text">
                <h2 className="fade-zoom text-3xl md:text-6xl font-bold mb-4">
                    “No pen. No rules. Just you and your moments.”
                </h2>

                <p className="fade-zoom text-[16px] md:text-[20px] text-gray-700 max-w-5xl mx-auto handwritten-text">
                    A modern diary built for the way we live today. Record your thoughts,
                    feelings, and memories through voice, text, or photos — anytime,
                    anywhere. This is your private space to reflect, heal, and grow —
                    without judgment, without pressure. Just you, your story, and a safe
                    place to be real.
                </p>
            </div>

            {/* Features Section */}
            <section className="py-24 px-6 md:px-20">
                <h3 className="text-4xl md:text-5xl font-bold text-center mb-24 handwritten-text fade-up">
                    Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 handwritten-text">
                    <FeatureItem title="Text Notes" desc="Prefer typing? You’ve got that too...  Add a title, write your heart out, save it." icon="📝" />
                    <FeatureItem title="Voice Entries" desc="Just press record and speak...  Save thoughts without typing a word." icon="🎙️" />
                    <FeatureItem title="Photo Attachments" desc="Add daily snaps or meaningful pics...  One memory = one moment captured." icon="📷" />
                    <FeatureItem title="Secure Login" desc="Your diary, your privacy...  Password protected and encrypted." icon="🔐" />
                    <FeatureItem title="Timeline View" desc="Scroll through your past like a storybook...  Easily view entries by date." icon="📅" />
                    <FeatureItem title="Cloud Sync" desc="Access your diary from any device...  Your data, always safe and backed up." icon="☁️" />
                </div>
            </section>

            {/* Call to Action */}
            <div className="py-24 text-center bg-gray-200 ">
                <h4 className="text-2xl md:text-5xl font-bold mb-4 handwritten-text">
                    “Ready to keep your first memory?”
                </h4>
                <button
                    onClick={() => navigate("/Register")}
                    className="px-6 py-3 written-text bg-black text-white rounded shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    Start Your Journey
                </button>
            </div>

            {/* Footer */}
            <footer className="bg-black text-white py-4 text-center flex flex-col md:flex-row justify-center items-center gap-2 md:gap-20">
                <a href="#" className="hover:underline">About</a>
                <span className="hidden md:inline">|</span>
                <a href="#" className="hover:underline">Privacy</a>
                <span className="hidden md:inline">|</span>
                <a href="#" className="hover:underline">Contact</a>
            </footer>
        </div>
    );
}

function FeatureItem({ title, desc, icon }) {
    return (
        <div className="fade-zoom flex flex-col items-center text-center">
            <div className="text-4xl mb-4">{icon}</div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-700 text-sm max-w-xs">{desc}</p>
        </div>
    );
}
