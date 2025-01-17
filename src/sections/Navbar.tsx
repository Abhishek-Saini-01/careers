"use client";

import Logo from "@/assets/images/logo-careers.svg";
import Button from "@/components/Button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Careers", href: "/careers" },
    { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
            <div className="container max-w-5xl">
                <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                    <div className="grid grid-cols-2 lg:grid-cols-3  p-2 px-4 md:pr-2 items-center">
                        <div className="flex items-center gap-2">
                            <Image
                                src={Logo}
                                alt="logo"
                                className="h-9 md:h-auto w-auto"
                            />
                            <p className="bg-gradient uppercase inline-flex text-transparent bg-clip-text text-4xl font-extrabold">Careers</p>
                        </div>
                        <div className="hidden lg:flex justify-center items-center">
                            <nav className="flex gap-6 font-medium">
                                {navLinks.map(link => (
                                    <Link href={link.href} key={link.href} >{link.label}</Link>
                                ))}
                            </nav>
                        </div>
                        <div className="flex justify-end gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-menu md:hidden"
                                onClick={() => setIsOpen(prev => !prev)}
                            >
                                <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition", isOpen && "rotate-45 -translate-y-1")}></line>
                                <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition", isOpen && "opacity-0")}></line>
                                <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition", isOpen && "-rotate-45 translate-y-1")}></line>
                            </svg>
                            <Link
                                href="/login"
                            >
                                <Button variant="secondary" className="hidden md:inline-flex items-center">Log In</Button>
                            </Link>
                            <Link
                                href="/signup"
                            >
                                <Button variant="primary" className="hidden md:inline-flex items-center">Sign Up</Button>
                            </Link>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="flex flex-col items-center gap-4 py-4">
                                    {navLinks.map(navLink => (
                                        <Link
                                            key={navLink.href}
                                            href={navLink.href}
                                            className=""
                                        >{navLink.label}</Link>
                                    ))}
                                    <Link
                                        href="/login"
                                    >
                                        <Button variant="secondary">Log In</Button>
                                    </Link>
                                    <Link
                                        href="/signup"
                                    >
                                        <Button variant="primary">Sign Up</Button>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

export default Navbar