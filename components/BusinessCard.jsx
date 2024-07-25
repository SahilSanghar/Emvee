"use client";
import React, { useRef, useState } from "react";
import { WobbleCard } from "./ui/wobble-card";
import { businessData } from "../data/business";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

export function Business() {
    const router = useRouter();
    const cardRefs = useRef([]);
    const [animating, setAnimating] = useState(false);

    const handleCardClick = (item, index) => {
        if (animating) return; // Prevent multiple clicks during animation
        setAnimating(true);

        const card = cardRefs.current[index];
        const cardBounds = card.getBoundingClientRect();
        const body = document.body;

        const tl = gsap.timeline({
            onComplete: () => {
                router.push(`/${item.route}`);
            }
        });

        tl.set(card, {
            position: "fixed",
            top: cardBounds.top + window.scrollY,
            left: cardBounds.left + window.scrollX,
            width: cardBounds.width,
            height: cardBounds.height,
            zIndex: 9999,
            overflow: "hidden",
        })
        .to(card, {
            duration: 1,
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            width: "100vw",
            height: "100vh",
            ease: "power3.inOut",
        });
    };

    return (
        <>
        <p className="text-center text-5xl pt-[50px]">
            Services
        </p>
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] lg:max-w-7xl mx-auto mb-0 mt-[50px]">
            {businessData.map((item, index) => (
                <div
                    key={index}
                    className="col-span-1 min-h-[300px] cursor-pointer relative"
                    ref={(el) => (cardRefs.current[index] = el)}
                    onClick={() => handleCardClick(item, index)}
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
