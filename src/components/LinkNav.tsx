
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
        <div className="fixed right-10 bottom-10 flex flex-col">
            {NAVIGATION_LINKS.map((link, index) => (
                <motion.div
                    key={link.name}
                    className="text-white/70 hover:text-white transition-colors duration-200 writing-mode-vertical text-lg font-medium"
                    initial={isHomePage ? { opacity: 0, x: 20 } : false}
                    animate={isHomePage ? { opacity: 1, x: 0 } : false}
                    transition={
                        isHomePage ? { delay: 0.5 + index * 0.2 } : undefined
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
                        className="flex font-sans items-center  gap-2 text-neutral-400 hover:text-white"
                        href={link.href}
                    >
                        <div className=" flex items-center justify-center">
                            {index + 1}
                        </div>
                        /{link.name}
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};
export default LinkNav;
