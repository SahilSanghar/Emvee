import React from 'react';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative -top-14 h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Parking/Hero.jpg" // Replace with your image URL
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
      </div>

      {/* Content */}
      <h2 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center">
        Parking
      </h2>
    </div>
  );
};

export default Hero;
