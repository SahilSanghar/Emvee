"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect"; 
import { useRouter } from "next/navigation";

const Welcome = () => {
    const router = useRouter();

    const handleLearnMoreClick = () => {
        router.push('/about-us');
    };

return (
<div className="h-[90vh] flex flex-col justify-center items-center text-center sm:px-5" id="about">
    <TextGenerateEffect
        words="Welcome To"
        className="font-medium text-4xl pt-8"
    />
    <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="font-medium text-2xl py-5"
    ><span className="font-semibold text-[rgb(0,112,243)]">Emvee Engineer</span></motion.p>
    <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="w-10 ml-[50px] -mt-2.5 border-2 border-[rgb(0,112,243)] rounded-xl"
    />
    <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="font-medium py-5"
    >
        Emvee Engineer is a diversified conglomerate with roots in more than 4
        manufacturing industries, like <br />
        Parking, Fan, Pharmaceutical machines and Hvac project contracting
    </motion.p>
    <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="py-4"
    >
        Since its establishment in 2011 Emvee Engineer has spanned the spectrum
        of success in multiple industries with <br />
        eminent business ventures!
    </motion.p>
    <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="py-4"
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
);
};

export default Welcome;
