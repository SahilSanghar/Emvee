"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect"; 
import { useRouter } from "next/navigation";
import Image from "next/image";

const Welcome = () => {
    const router = useRouter();

    const handleLearnMoreClick = () => {
        router.push('/about-us');
    };

    return (
        <div className="relative h-[90vh] flex justify-center items-center text-center sm:px-5 bg-[#171717] text-white" id="about">
            {/* Background Image */}
            {/* <div className="absolute inset-0 w-100vw h-full -z-10">
                <Image
                    src='/welcome.jpg'
                    alt="welcome"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div> */}

            {/* Text and Content Overlay */}
            <div className="z-10">
                <TextGenerateEffect
                    words="Welcome To"
                    className="font-medium text-5xl pt-8 text-white"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="font-medium text-3xl py-5 text-white"
                >
                    <span className="font-bold text-orange-600">Emvee Corporation</span>
                </motion.p>
                <motion.hr
                    initial={{ width: 0 }}
                    animate={{ width: "30%" }}
                    transition={{ delay: 1.5 }}
                    className="ml-[32%] -mt-2.5 border-2 border-[rgb(0,112,243)] rounded-xl"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="font-medium py-5 text-white"
                >
                    Emvee Engineer is a diversified conglomerate with roots in more than 4
                    manufacturing industries like <br />
                    Parking, Fan, Pharmaceutical Machines, Hydraulic Car Parking and HVAC project contracting.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="py-4 text-white"
                >
                    Since its establishment in 2016, Emvee Corporation has spanned the spectrum
                    of success in multiple industries with <br />
                    eminent business ventures!
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    className="py-4 text-white"
                >
                    We lay great emphasis on providing a superior experience and unmatched
                    quality in all our undertakings. It is our <br />
                    philosophy to ensure that our customers are satisfied with our services.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                    className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-4 py-2 mt-3 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear"
                    onClick={handleLearnMoreClick}
                >
                    Learn more
                </motion.button>
            </div>
        </div>
    );
};

export default Welcome;
