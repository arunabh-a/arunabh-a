"use client";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const LinkNav = () => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <div className="relative md:fixed p-2 md:right-10 md:bottom-10 bg-card/50 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-none w-full md:w-fit  flex justify-between md:block">
            <span className="md:hidden font-sans">Click on route</span>
            <div className="flex flex-row justify-end  md:flex-col gap-4 md:gap-0">
                {NAVIGATION_LINKS.map((link, index) => (
                    <motion.div
                        key={link.name}
                        className="text-white/70 hover:text-white transition-colors duration-200 md:writing-mode-vertical text-sm md:text-lg font-medium"
                        initial={isHomePage ? { opacity: 0, x: 20 } : false}
                        animate={isHomePage ? { opacity: 1, x: 0 } : false}
                        transition={
                            isHomePage
                                ? { delay: 0.5 + index * 0.2 }
                                : undefined
                        }
                        onKeyDown={(e) => {
                            if (e.key === String(index + 1)) {
                                e.preventDefault();
                                window.location.href = link.href;
                            }
                        }}
                        tabIndex={0}
                    >
                        <Link
                            className="flex font-mono items-center gap-2 text-neutral-400 hover:text-white"
                            href={link.href}
                        >
                            <div className="hidden md:flex items-center justify-center">
                                {index + 1}
                            </div>
                            <span className="">/{link.name}</span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
export default LinkNav;
