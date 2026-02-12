"use client";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Experience {
    company: string;
    role: string;
    description: string;
    period: string;
    logoUrl: string;
}
const experiences: Experience[] = [
    {
        company: "Hooc AI | Hoocup",
        role: "Founding Software Developer",
        period: "August 2025 - Present",
        logoUrl: "https://www.hooc.tech/favicon.ico",
        description: "Building scalable backend services with FastAPI and Python. Developed real-time notification system with message history and retry logic. Set up automated monitoring, recovery systems, and CI/CD pipelines with Docker across GCP and Oracle Cloud.",
    },
    {
        company: "UnbiaslyAI",
        role: "Intern - Software Developer",
        period: "December 2024 - July 2025",
        logoUrl: "https://unbiasly.ai/icon.svg",
        description: "Enhanced unbiasly.ai (10M+ users) and built Career Portal with AI-powered Resume Parser, achieving 30% reduction in page load times. Refactored Internal Admin Panel with modular architecture, reducing publishing time by 67%. Built full-stack platform for bureaucrats using Next.js, TanStack Query, and REST APIs with secure data orchestration.",
    },
];

function LogoImage({ src, alt }: { src: string; alt: string }) {
    const [imageError, setImageError] = useState(false);

    if (!src || imageError) {
        return (
            <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
            onError={() => setImageError(true)}
        />
    );
}

export default function WorkSection() {
    return (
        <section>
            <h2 className="text-sm font-semibold text-foreground font-mono mb-4">Work Experience</h2>
            <Accordion type="single" collapsible className="w-full grid gap-6">
                {experiences.map((work) => (
                    <AccordionItem
                        key={work.company}
                        value={work.company}
                        className="w-full border-b-0 grid gap-2"
                    >
                        <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                            <div className="flex items-center gap-x-3 justify-between w-full text-left">
                                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                                    <LogoImage
                                        src={work.logoUrl}
                                        alt={work.company}
                                    />
                                    <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                                        <div className="font-semibold leading-none flex items-center gap-2">
                                            {work.company}
                                            <span className="relative inline-flex items-center w-3.5 h-3.5">
                                                <ChevronRight
                                                    className={cn(
                                                        "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                                                        "translate-x-0 opacity-0",
                                                        "group-hover:translate-x-1 group-hover:opacity-100",
                                                        "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0",
                                                    )}
                                                />
                                                <ChevronDown
                                                    className={cn(
                                                        "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                                                        "opacity-0 rotate-0",
                                                        "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180",
                                                    )}
                                                />
                                            </span>
                                        </div>
                                        <div className="font-sans text-sm text-muted-foreground">
                                            {work.role}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                                    <span>{work.period}</span>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
                            {work.description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
