import React from "react";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#000B1D] text-white">
            <div className="absolute top-4 left-4 z-50">
                <button className="flex flex-col justify-between w-6 h-5 focus:outline-none group">
                    <span className="block h-0.5 w-full bg-white transform transition duration-300 group-hover:translate-x-1"></span>
                    <span className="block h-0.5 w-full bg-white transform transition duration-300 group-hover:translate-x-2"></span>
                    <span className="block h-0.5 w-full bg-white transform transition duration-300 group-hover:translate-x-3"></span>
                </button>
            </div>

            {/* Image with fade overlay */}
            <div className="relative w-full h-64 md:h-96">
                <img
                    src="/img/theme1.jpg"
                    alt="Top Banner"
                    className="w-full h-full object-cover"
                />
                {/* Fade overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000B1D]" />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-10 handwritten-text">2025</h1>

                {/* Box below h1 */}
                <div className="bg-[#001433] text-white rounded-xl p-6 md:p-8 shadow-xl max-w mx-auto my-6 font-sans">
                    {/* Date */}
                    <p className="text-xl md:text-2xl font-bold handwritten-text">
                        07 <span className="text-sm font-light">April</span>
                    </p>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl mt-2 mb-2 font-bold handwritten-text">
                        Best Moment !
                    </h2>

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-300 font-sans font-serif">
                        What Happens Today..........
                    </p>
                </div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-[90px] z-50">
                    {/* Left small circle */}
                    <div className="w-[50px] h-[50px] bg-[#011B43] opacity-70 rounded-full"></div>

                    {/* Center large circle */}
                    <div className="w-[70px] h-[70px] bg-[#011B43] rounded-full"></div>

                    {/* Right small circle */}
                    <div className="w-[50px] h-[50px] bg-[#011B43] opacity-70 rounded-full"></div>
                </div>
                {/* Bottom black fade overlay */}
                <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none"></div>

            </div>

        </div>
    );
}
