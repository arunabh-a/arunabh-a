"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import posthog from "posthog-js";

interface LatestProjectLinkProps {
    title: string;
    href: string;
    image: string;
}

export default function LatestProjectLink({ title, href, image }: LatestProjectLinkProps) {
    return (
        <div className="flex flex-col gap-3 rounded-md font-mono border-2 border-dashed bg-card p-4">
            <div className="flex items-center justify-between">
                <span>Latest Product</span>
                <Link
                    className="flex items-center gap-1 font-sans text-md text-low-contrast-text hover:text-high-contrast-text hover:opacity-90"
                    href={href}
                    onClick={() =>
                        posthog.capture("latest_project_clicked", {
                            project_title: title,
                            project_href: href,
                        })
                    }
                >
                    <span>{title}</span>
                    <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-high-contrast-text">
                        <ChevronRight className="fill-none w-5 h-5" />
                    </span>
                </Link>
            </div>
            <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                className="rounded-lg object-cover aspect-video h-full w-full"
                priority
            />
        </div>
    );
}
