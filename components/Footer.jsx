"use client"

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { quickLinks, otherLinks, contactDetails } from '../data/footer'; 

const Footer = () => {
    const linkRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            '.quick-link',
            { x: 0, color: '#ffffff' },
            { 
            x: 20, 
            color: 'rgb(0,112,243)', 
            duration: 0.3, 
            ease: 'power1.inOut',
            paused: true
        }
        );
    }, []);

    const handleMouseEnter = (index) => {
        gsap.to(linkRefs.current[index], {
            scale: 1.1,
            duration: 0.2,
        });
    };

    const handleMouseLeave = (index) => {
        gsap.to(linkRefs.current[index], {
            scale: 1,
            duration: 0.2,
        });
    };

    const handleClick = (href, index) => {
        gsap.to(linkRefs.current[index], {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                window.location.href = href;
            },
        });
    };

return (
    <div className=''>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-sm:px-[80px] sm:px-[120px] lg:px-[200px] py-14 h-auto lg:h-[100vh] xl:h-[70vh] bg-[#212529] text-white">
        <div className='py-5'>
            <Image src='/icon.png' alt='logo' width={80} height={50} />
            <p className='py-5'>Established in 2011, The Emvee Engineer envisions to create an empire that spans across various industries and meet the impeccable quality standards...</p>
            <a href="#" className='flex items-center'>Learn More <FaArrowRightLong className='ml-2 text-[rgb(0,112,243)]' /></a>
            <div className='flex py-4'>
                <a
                    href='https://www.facebook.com/emvee.engineers/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-full border-2 cursor-pointer p-2 ml-2 h-10 w-10 flex items-center justify-center'
                >
                    <FaFacebookF size={25} />
                </a>
                <a
                    href='https://www.linkedin.com/company/emvee-engineers/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-full border-2 cursor-pointer p-2 h-10 w-10 ml-4 flex items-center justify-center'
                >
                    <FaLinkedinIn size={25} />
                </a>
                <a
                    href='https://www.instagram.com/emvee.engineers/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-full border-2 cursor-pointer p-2 h-10 w-10 ml-4 flex items-center justify-center'
                >
                    <FaInstagram size={25} />
                </a>
            </div>
        </div>
        <div className='sm:px-[120px] md:px-0 lg:px-[30px]'>
        <ul>
        <span className='text-2xl font-semibold'>Quick Links</span>
        <hr className='w-12 mt-1 border-2 border-[rgb(0,112,243)] rounded-3xl' />
        {quickLinks.map((link, index) => (
            <li key={index} className='flex items-center text-lg font-light mt-2 py-1 cursor-pointer'>
            <FaChevronRight size={18} className='text-white mr-2' />
            <span 
                ref={el => linkRefs.current[index] = el}
                className="quick-link" 
                onMouseEnter={() => handleMouseEnter(index)} 
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleClick(link.href, index)}
            >
                {link.text}
            </span>
            </li>
        ))}
        </ul>
    </div>
    <div className='sm:px-[20px]'>
        <ul className='w-[320px]'>
        <span className='text-2xl font-semibold'>Contact Details</span>
        <hr className='w-20 mt-1 border-2 border-[rgb(0,112,243)] rounded-3xl' />
        {contactDetails.map((contact, index) => (
            <li key={index} className='text-lg w-[320px] font-light py-1'>
                <p className='flex items-center max-sm:w-[250px]'>
                    {/* <contact.icon className='w-[40px] h-[40px] rounded-full border-2 cursor-pointer p-2 mr-2' /> */}
                    {contact.text}
                </p>
            </li>
        ))}
        </ul>
    </div>
    </div>
    <div className="inline">
        <p className='bg-[#242424] text-white text-sm text-center h-[35px] py-2'>&copy; 2024 Emvee Engineers, All Rights Reserved. | Terms and condition | Privacy Policy</p>
    </div>
    </div>
)
}

export default Footer