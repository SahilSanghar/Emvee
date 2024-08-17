"use client";
import React, { useRef } from "react";
import { WobbleCard } from "./ui/wobble-card";
import { businessData } from "../data/business";
import { useRouter } from "next/navigation";

export function Business() {
    const router = useRouter();
    const cardRefs = useRef([]);

    const handleCardClick = (item) => {
        router.push(`/${item.route}`);
    };

    return (
        <>
        <p className="text-center text-5xl pt-[50px]">
            Services
        </p>
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] lg:max-w-7xl mx-auto mb-0 pb-10 mt-[50px]">
            {businessData.map((item, index) => (
                <div
                    key={index}
                    className="col-span-1 min-h-[300px] cursor-pointer relative"
                    ref={(el) => (cardRefs.current[index] = el)}
                    onClick={() => handleCardClick(item)}
                >
                    <WobbleCard
                        containerClassName="col-span-1 min-h-[300px] cursor-pointer"
                        backgroundImage={item.backgroundImage}
                    >
                        <h2 className="relative top-[120px] max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            {item.title}
                        </h2>
                    </WobbleCard>
                </div>
            ))}
        </div>
        </>
    );
}
