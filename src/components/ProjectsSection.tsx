"use client";
import { PROJECTS_CONTENT } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    href: string;
    image: string
}

const projects: Project[] = PROJECTS_CONTENT.allProjects;


const ProjectsSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);
    const targetPositionRef = useRef({ x: 0, y: 0 });
    const smoothPositionRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        const animate = () => {
            smoothPositionRef.current = {
                x: lerp(smoothPositionRef.current.x, targetPositionRef.current.x, 0.15),
                y: lerp(smoothPositionRef.current.y, targetPositionRef.current.y, 0.15),
            };

            if (previewRef.current) {
                previewRef.current.style.transform = `translate3d(${smoothPositionRef.current.x + 20}px, ${smoothPositionRef.current.y - 100}px, 0)`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        targetPositionRef.current = {
            x: e.clientX,
            y: e.clientY,
        };
    };

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setIsVisible(false);
    };
    return (
        <section
            id="projects"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative"
        >
            <h2 className="text-sm font-semibold text-foreground font-mono mb-2">
                Projects
            </h2>
            <p className="text-xs text-muted-foreground mb-6">
                A few things I've built.
            </p>

            <div
                ref={previewRef}
                className={`pointer-events-none fixed left-0 top-0 z-50 overflow-hidden rounded-xl shadow-2xl transition-all duration-300 ease-out ${isVisible ? " opacity-100" : " opacity-0"}`}
            >
                {/*TODO: lg:w-sm */}
                <div className="relative  aspect-video overflow-hidden rounded-lg bg-secondary/20 backdrop-blur-xl">
                    {projects.map((project, index) => (
                        <img
                            key={project.title}
                            src={project.image}
                            alt={project.title}
                            className={`absolute object-contain inset-0 rounded-xl zoom-out-10 h-full w-full  transition-all duration-500 ease-out ${hoveredIndex === index ? " opacity-100 blur-0" : " opacity-0 blur-sm"}`}
                        />
                    ))}
                    <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
                </div>
            </div>

            <div className="space-y-0">
                {projects.map((project, index) => (
                    <Link
                        key={project.title}
                        href={project.href}
                        target="_blank"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        rel="noopener noreferrer"
                        className="group relative cursor-pointer block border-b border-border py-4 last:border-b-0"
                    >
                        <div
                            className={`pointer-events-none absolute inset-0 -mx-4 rounded-lg bg-secondary/50 px-4 transition-all cursor-pointer duration-300 ease-out ${hoveredIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                        />
                        <div className="relative z-10 flex items-start justify-start">
                            <h3 className="text-sm w-fit font-medium text-foreground group-hover:text-primary group-hover:underline transition-colors">
                                {project.title}
                            </h3>
                                <ArrowUpRight className="inline-block fill-none w-4 h-4 ml-1 -mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="relative z-10 mb-2 text-xs leading-relaxed text-muted-foreground">
                            {project.description}
                        </p>
                        <div className="relative z-10 flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] font-mono text-muted-foreground/70 px-2 py-0.5 rounded border border-border"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
