"use client";

import { cn } from "/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        default:
          duration = "80s";
          break;
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-2 border-gray-500 flex-shrink-0 px-8 py-6 md:w-[450px]"
            style={{
              background: "linear-gradient(180deg, #f5f5f5, #e0e0e0)",
            }}
            key={item.name}
          >
            <div className="flex flex-col items-center">
              <Image src={item.image} alt={item.name} width={20} height={20} className="w-[150px] h-auto rounded-xl mb-4" />
              <span className="text-sm leading-[1.6] text-gray-700 font-normal">
                {item.name}
              </span>
              <span className="text-sm leading-[1.6] text-gray-700 font-normal">
                {item.date}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
