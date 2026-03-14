"use client";
import { NAVIGATION_LINKS } from "@/lib/constants";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    type MotionValue,
} from "motion/react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const DOCK_SIZE = 38;
const DOCK_MAGNIFICATION = 40;
const DOCK_DISTANCE = 110;

function NavDockItem({
    link,
    mouseX,
    isActive,
}: {
    link: { name: string; href: string; icon?: string };
    mouseX: MotionValue<number>;
    isActive: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distanceCalc = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? {
            x: 0,
            width: 0,
        };
        return val - bounds.x - bounds.width / 2;
    });

    const scaleTransform = useTransform(
        distanceCalc,
        [-DOCK_DISTANCE, 0, DOCK_DISTANCE],
        [1, DOCK_MAGNIFICATION / DOCK_SIZE, 1],
    );

    const scale = useSpring(scaleTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    return (
        <motion.div
            ref={ref}
            style={{ scale }}
            className="flex origin-bottom items-end justify-center"
        >
            <Link
                href={link.href}
                aria-label={link.name}
                className={cn(
                    "flex size-10 items-center justify-center rounded-xl transition-colors",
                    isActive
                        ? "bg-white/15"
                        : "hover:bg-white/10",
                )}
            >
                {link.icon ? (
                    <img
                        src={link.icon}
                        alt={link.name}
                        className="size-5 brightness-0 invert"
                    />
                ) : (
                    <span className="font-mono text-xs text-white">
                        /{link.name}
                    </span>
                )}
            </Link>
        </motion.div>
    );
}

const LinkNav = () => {
    const pathname = usePathname();
    const router = useRouter(); // add this import from next/navigation
    const isHomePage = pathname === "/";
    const mouseX = useMotionValue(Infinity);

    // Global keyboard shortcut handler
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore if user is typing in an input, textarea, or contenteditable
            const target = e.target as HTMLElement;
            if (
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA" ||
                target.isContentEditable
            ) {
                return;
            }

            const keyMap: Record<string, string> = {};
            NAVIGATION_LINKS.forEach((link, index) => {
                keyMap[String(index + 1)] = link.href;
            });

            if (keyMap[e.key]) {
                e.preventDefault();
                router.push(keyMap[e.key]);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []); // stable — NAVIGATION_LINKS is a constant

    return (
        <>
            {/* Mobile: magnifying bottom dock */}
            <motion.nav
                aria-label="Site navigation"
                className="md:hidden fixed bottom-6 left-1/2 z-50 flex h-14.5 -translate-x-1/2 items-end justify-center gap-2 rounded-2xl border border-white/10 bg-card/80 px-3 pb-2 backdrop-blur-md"
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
            >
                {NAVIGATION_LINKS.map((link) => (
                    <NavDockItem
                        key={link.name}
                        link={link}
                        mouseX={mouseX}
                        isActive={pathname === link.href}
                    />
                ))}
            </motion.nav>

            {/* Desktop: vertical nav pinned to bottom-right */}
            <nav
                aria-label="Site navigation"
                className="hidden md:fixed md:right-10 md:bottom-10 md:flex md:flex-col md:gap-0 p-2"
            >
                {NAVIGATION_LINKS.map((link, index) => (
                    <motion.div
                        key={link.name}
                        className="text-white/70 hover:text-white transition-colors duration-200 writing-mode-vertical text-lg font-medium"
                        initial={isHomePage ? { opacity: 0, x: 20 } : false}
                        animate={isHomePage ? { opacity: 1, x: 0 } : false}
                        transition={
                            isHomePage
                                ? { delay: 0.5 + index * 0.2 }
                                : undefined
                        }
                    >
                        <Link
                            className="flex font-mono items-center gap-2 text-neutral-400 hover:text-white"
                            href={link.href}
                        >
                            <div className="flex items-center justify-center">
                                {index + 1}
                            </div>
                            <span>/{link.name}</span>
                        </Link>
                    </motion.div>
                ))}
            </nav>
        </>
    );
};

export default LinkNav;
