"use client";

import React from "react";
import Link from "next/link";
import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/custom/Dock";
import { DOCK_LINKS, PROFILE } from "@/lib/constants";
import Image from "next/image";


export function MainDock() {
    return (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 ">
            <TooltipProvider>
                <Dock direction="middle">
                    {/* {DATA.navbar.map((item) => (
                        <DockIcon key={item.label}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        aria-label={item.label}
                                        className={cn(
                                            buttonVariants({
                                                variant: "ghost",
                                                size: "icon",
                                            }),
                                            "size-12 rounded-full",
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation="vertical" className="h-full" /> */}
                    {Object.entries(DOCK_LINKS.contact.social).map(
                        ([name, social]) => (
                            <DockIcon key={name}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={social.url}
                                            aria-label={social.name}
                                            className={cn(
                                                buttonVariants({
                                                    variant: "ghost",
                                                    size: "icon",
                                                }),
                                                "size-12 rounded-full",
                                            )}
                                        >
                                            <Image
                                                src={social.icon}
                                                alt={`${social.name} icon`}
                                                width={28}
                                                height={28}
                                                className="size-5"
                                            />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{social.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </DockIcon>
                        ),
                    )}
                </Dock>
            </TooltipProvider>
        </div>
    );
}
