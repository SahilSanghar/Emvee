"use client";
import React, { useRef } from "react";
import { businessData } from "../data/business";
import { useRouter } from "next/navigation";

export function Business() {
    const router = useRouter();
    const cardRefs = useRef([]);

    const handleCardClick = (item) => {
        router.push(`/${item.route}`);
    };

    return (
        <div className="bg-[#171717] text-white">
        <p className="bg-[#171717] text-white text-center text-5xl pt-[50px]">
            Services
        </p>
        <div className="bg-[#171717] text-white grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] lg:max-w-7xl mx-auto mb-0 pb-10 mt-[50px]">
            {businessData.map((item, index) => (
                <div
                    key={index}
                    className="col-span-1 min-h-[300px] cursor-pointer relative rounded-xl overflow-hidden"
                    ref={(el) => (cardRefs.current[index] = el)}
                    onClick={() => handleCardClick(item)}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform transform scale-100 hover:scale-110 transition-opacity duration-300 ease-in-out hover:opacity-90"
                        style={{ backgroundImage: `url(${item.backgroundImage})` }}
                    />
                    <div className="relative z-10 top-[200px] left-[25px] max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] pr-[80px] text-white">
                        {item.title}
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}
