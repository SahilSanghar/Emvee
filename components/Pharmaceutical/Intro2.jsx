"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { Cartoning } from '../../data/Pharmaceutical'; // Ensure this path is correct
import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';

const Intro2 = () => {
    const [activePopover, setActivePopover] = useState(null);
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

    const togglePopover = (id) => {
        setActivePopover(activePopover === id ? null : id);
    };

    const getPopoverPosition = (id) => {
        if (window.innerWidth < 640) {
            return {
                top: "65%",
                left: "0%",
                transform: "translateX(-50%)",
            };
        }

        switch (id) {
            case 1:
                return {
                    top: "70%",
                    left: "2%",
                    transform: "translateX(-50%)",
                };
            case 2:
                return {
                    top: "70%",
                    left: "-100%",
                    transform: "translateX(-70%)",
                };
            case 3:
                return {
                    top: "70%",
                    left: "-230%",
                    transform: "translateX(-30%)",
                };
            case 4:
                return {
                    top: "55%",
                    left: "2%",
                    transform: "translateX(-50%)",
                };
            case 5:
                return {
                    top: "60%",
                    left: "-120%",
                    transform: "translateX(-70%)",
                };
            case 6:
                return {
                    top: "70%",
                    left: "-240%",
                    transform: "translateX(-30%)",
                };
            default:
                return {
                    left: "50%",
                    transform: "translateX(-50%)",
                };
        }
    };

    if (!Array.isArray(Cartoning)) {
        console.error('Cartoning data is not defined or is not an array');
        return null;
    }

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mx-[150px] my-[50px] pb-[100px]">
            {Cartoning.map(({ id, icon, title, description }) => (
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
                    className="relative animate_top rounded-lg bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5 hover:bg-gray-100 dark:hover:bg-gray-900"
                    style={{ transition: "background-color 0.3s ease, box-shadow 0.3s ease" }}
                >
                    <div className="relative">
                        <div
                            className="relative cursor-pointer group"
                            onClick={() => togglePopover(id)}
                        >
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

                        {activePopover === id && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute sm:w-[90vw] xl:w-[1000px] z-10 p-4 text-sm text-gray-500 bg-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
                                style={{
                                    ...getPopoverPosition(id),
                                    minWidth: "200px",
                                    maxWidth: "1500px",
                                }}
                            >
                                {window.innerWidth < 640 ? (
                                    <div className="flex flex-col">
                                        <Image
                                            src={icon}
                                            width={1500}
                                            height={20}
                                            objectFit="cover"
                                            className="w-[50vw] h-[15vh] rounded-xl mb-4"
                                            alt={title}
                                        />
                                        <div className="px-8">
                                            <button
                                                onClick={() => setActivePopover(null)}
                                                className="absolute top-2 left-2 text-gray-600 dark:text-gray-400"
                                            >
                                                <IoClose size={24} />
                                            </button>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-gray-200 rounded-xl relative grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center justify-center">
                                            <Image
                                                src={icon}
                                                width={imageWidth}
                                                height={72}
                                                objectFit="cover"
                                                className="w-[15vw] h-[25vh] rounded-xl"
                                                alt={title}
                                            />
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setActivePopover(null)}
                                                className="absolute top-2 left-2 text-gray-600 dark:text-gray-400"
                                            >
                                                <IoClose size={24} />
                                            </button>
                                            <p className="text-sm text-left text-gray-700 dark:text-gray-300">{description}</p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
        </>
    );
};

export default Intro2;
