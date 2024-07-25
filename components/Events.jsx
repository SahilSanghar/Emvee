// Events.js
"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import events from "../data/events";

const Events = () => {
return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <p className="text-5xl font-semibold py-10">
        Events
    </p>
    <InfiniteMovingCards
        items={events}
        direction="right"
        speed="slow"
    />
    </div>
);
}

export default Events;
