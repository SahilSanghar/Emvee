"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'; // Import useRouter
import cardsData from '../../data/Pharmaceutical';

const Machine = () => {
    const router = useRouter(); // Initialize useRouter
    const [imageWidth, setImageWidth] = useState(400);

    const updateImageWidth = useCallback(() => {
        if (window.innerWidth < 400) {
            setImageWidth(150);
        } else if (window.innerWidth < 640) {
            setImageWidth(250);
        } else {
            setImageWidth(400);
        }
    }, []);

    useEffect(() => {
        updateImageWidth();
        window.addEventListener("resize", updateImageWidth);
        return () => {
            window.removeEventListener("resize", updateImageWidth);
        };
    }, [updateImageWidth]);

    const handleCardClick = (title) => {
        // Navigate to the dynamic route based on the title
        router.push(`/machines/${encodeURIComponent(title)}`);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mx-[150px] my-[50px] pb-[100px]">
            {cardsData.map(({ id, icon, title, description, src }) => (
                <motion.div
                    key={id}
                    variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative animate_top rounded-lg bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer"
                    style={{ transition: "background-color 0.3s ease, box-shadow 0.3s ease" }}
                    onClick={() => handleCardClick(title)} // Navigate on card click
                >
                    <div className="relative">
                        <div className="relative cursor-pointer group">
                            <motion.div
                                className="flex flex-col md:flex-row md:items-center"
                                whileHover={{ x: 8 }}
                                whileInView={{ x: 8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={icon}
                                    width={1500}
                                    height={500}
                                    objectFit="cover"
                                    className="h-[25vh] w-[25vw] rounded-xl mb-4 md:mb-0 md:mr-6"
                                    alt={title}
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-black dark:text-white">
                                        {title}
                                    </h3>
                                    <p className="text-gray-400 text-lg text-left mt-2">
                                        {description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Machine;
