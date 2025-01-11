"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { BiCategory } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { RiHome5Line } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { useRouter } from 'next/navigation';

export function MainNavbar() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const handleNavigation = (path) => {
      setIsMenuOpen(false);
      router.push(path);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        
    <div
    className={`fixed top-0 w-full z-30 transition-all duration-300 ${
      isSticky ? "h-[75px] backdrop-blur-md bg-opacity-70" : "h-[96px]"
    } bg-black text-white`}
  >
    <div className="flex justify-between items-center w-full max-w-screen-xl px-5 md:px-24 py-5">
      {/* Logo Section */}
      <div className="flex items-center space-x-1.5 text-3xl">
        <Link href="/" passHref>
          <Image
            src="/icon1.png"
            alt="Logo"
            height={380}
            width={100}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex relative left-64 text-white items-center space-x-5">
        <li
          className="cursor-pointer hover:text-gray-400 transition"
          onClick={() => handleNavigation('/')}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:text-gray-400 transition"
          onClick={() => handleNavigation('/about-us')}
        >
          About Us
        </li>
        <li
          className="cursor-pointer hover:text-gray-400 transition"
          onClick={() => handleNavigation('/parking')}
        >
          Parking
        </li>
        <li
          className="cursor-pointer hover:text-gray-400 transition"
          onClick={() => handleNavigation('/contact-us')}
        >
          Contact Us
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="md:hidden border-[2px] border-[#767676] rounded-full w-11 h-11 p-2.5 cursor-pointer relative z-50">
        {!isMenuOpen ? (
          <RxHamburgerMenu className="text-[#767676] h-5 w-5" onClick={toggleMenu} />
        ) : (
          <RxCross2 className="text-[#767676] h-5 w-5" onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[4.6rem] rounded-es-3xl right-0 max-sm:h-[32vh] max-sm:w-[45%] md:h-full w-3/4 bg-[#0a0a0a] text-white p-5 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 z-40`}
      >
        <ul className="space-y-5">
          <li
            className="text-lg flex items-center gap-1.5 cursor-pointer hover:text-gray-400 transition"
            onClick={() => handleNavigation('/')}
          >
            <RiHome5Line />
            <span className="">Home</span>
          </li>
          <li
            className="text-lg flex items-center gap-1.5 cursor-pointer hover:text-gray-400 transition"
            onClick={() => handleNavigation('/about-us')}
          >
            <HiOutlineOfficeBuilding />
            <span className="">About Us</span>
          </li>
          <li
            className="text-lg flex items-center gap-1.5 cursor-pointer hover:text-gray-400 transition"
            onClick={() => handleNavigation('/categories')}
          >
            <BiCategory />
            <span className="">Categories</span>
          </li>
          <li
            className="text-lg flex items-center gap-1.5 cursor-pointer hover:text-gray-400 transition"
            onClick={() => handleNavigation('/contact-us')}
          >
            <MdOutlineContactSupport />
            <span className="">Contact Us</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
    );
}
