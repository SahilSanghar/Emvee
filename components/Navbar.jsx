"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "/lib/utils";
import Image from "next/image";
import Logo from "/public/icon1.png";
import { menuItems, buttonData } from "../data/navbar";
import { FaBars, FaTimes } from "react-icons/fa";

export function MainNavbar() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const handleNavigation = (route) => {
        router.push(route);
    };

    return (
        <div className={cn("fixed w-screen top-10 inset-x-0 max-w-2xl z-50", className)}>
            <Menu setActive={setActive}>
                <div className="flex items-center sm:items-start w-full lg:px-[150px]">
                    <div className="flex-shrink-0">
                        <Image
                            src={Logo}
                            alt="Logo"
                            height={38}
                            className="cursor-pointer"
                            onClick={() => handleNavigation("/")}
                        />
                    </div>
                    <div className="flex-grow justify-center space-x-6 hidden lg:flex">
                        <div className="flex items-center space-x-6">
                            {/* Home and About Us buttons */}
                            <HoveredLink href="/" onClick={() => handleNavigation("/")} className="cursor-pointer">
                                Home
                            </HoveredLink>
                            <HoveredLink href="/about-us" onClick={() => handleNavigation("/about-us")} className="cursor-pointer">
                                About Us
                            </HoveredLink>
                            <HoveredLink href="/parking" onClick={() => handleNavigation("/parking")} className="cursor-pointer">
                                Hydraulic Parking
                            </HoveredLink>
                            <HoveredLink href="/fan" onClick={() => handleNavigation("/fan")} className="cursor-pointer">
                                Mechanical Fan
                            </HoveredLink>
                            <HoveredLink href="/pharmaceutical" onClick={() => handleNavigation("/pharmaceutical")} className="cursor-pointer">
                                Pharmaceutical
                            </HoveredLink>
                            <HoveredLink href="/hvac" onClick={() => handleNavigation("/hvac")} className="cursor-pointer">
                                HVAC
                            </HoveredLink>
                            {/* Existing Menu Items */}
                            {menuItems.map((menu, index) => (
                                <MenuItem key={index} setActive={setActive} active={active} item={menu.title}>
                                    {menu.links ? (
                                        <div className="flex flex-col space-y-1 text-sm">
                                            {menu.links.map((link, linkIndex) => (
                                                <HoveredLink key={linkIndex} href={link.href} route={link.route}>
                                                    {link.text}
                                                </HoveredLink>
                                            ))}
                                        </div>
                                    ) : menu.products ? (
                                        <div className="text-sm grid grid-cols-2 gap-4 p-2">
                                            {menu.products.map((product, productIndex) => (
                                                <ProductItem
                                                    key={productIndex}
                                                    title={product.title}
                                                    href={product.href}
                                                    src={product.src}
                                                    description={product.description}
                                                />
                                            ))}
                                        </div>
                                    ) : null}
                                </MenuItem>
                            ))}
                        </div>
                    </div>
                    <div className="flex-shrink-0 ml-auto hidden lg:block">
                        <button className={buttonData.className} onClick={() => handleNavigation("/contact-us")}>
                            {buttonData.text}
                        </button>
                    </div>
                    <div className="flex lg:hidden ml-auto">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden bg-white shadow-md p-4 absolute top-full right-0 w-full z-40">
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-row flex-wrap space-x-4">
                                <HoveredLink href="/" onClick={() => handleNavigation("/")} className="cursor-pointer text-md">
                                    Home
                                </HoveredLink>
                                <HoveredLink href="/about-us" onClick={() => handleNavigation("/about-us")} className="cursor-pointer text-md">
                                    About Us
                                </HoveredLink>
                                {menuItems.map((menu, index) => (
                                    <MenuItem key={index} setActive={setActive} active={active} item={menu.title}>
                                        {menu.links ? (
                                            <div className="flex flex-col space-y-1 text-sm">
                                                {menu.links.map((link, linkIndex) => (
                                                    <HoveredLink key={linkIndex} href={link.href} route={link.route}>
                                                        {link.text}
                                                    </HoveredLink>
                                                ))}
                                            </div>
                                        ) : menu.products ? (
                                            <div className="text-sm grid grid-cols-2 gap-4 p-2">
                                                {menu.products.map((product, productIndex) => (
                                                    <ProductItem
                                                        key={productIndex}
                                                        title={product.title}
                                                        href={product.href}
                                                        src={product.src}
                                                        description={product.description}
                                                    />
                                                ))}
                                            </div>
                                        ) : null}
                                    </MenuItem>
                                ))}
                            </div>
                            <button className={buttonData.className} onClick={() => handleNavigation("/contact-us")}>
                                {buttonData.text}
                            </button>
                        </div>
                    </div>
                )}
            </Menu>
        </div>
    );
}
