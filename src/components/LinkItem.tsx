"use client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

export default function LinkPageItem({
    title,
    description,
    url,
    icon,
    cta,
    svgIcon,
}: {
    title: string;
    description: string;
    url: string;
    icon: React.ReactNode | string;
    cta: string;
    svgIcon: boolean;
}) {
    return (
        <div className="flex w-full items-center justify-between gap-4 rounded-md border-[1.5] bg-card px-5 py-3">
            <div className="flex items-center gap-6">
                <span className="text-low-contrast-text">
                    {svgIcon ? (
                        <Image
                            src={icon as string}
                            alt={`${title} icon`}
                            width={28}
                            height={28}
                            className="text-low-contrast-text"
                        />
                    ) : (
                        icon as React.ReactNode
                    )}
                </span>

                <div className="flex font-mono flex-col">
                    <span>{title}</span>
                    {/* <span className="text-xs md:text-sm text-low-contrast-text">
                        {description}
                    </span> */}
                </div>
            </div>

            <Link
                className="flex items-center text-xs md:text-sm font-mono rounded-md underline bg-card px-2 py-1"
                href={url}
                onClick={() =>
                    posthog.capture("social_link_clicked", {
                        link_title: title,
                        link_url: url,
                        link_cta: cta,
                    })
                }
            >
                <span>{cta}</span>
            </Link>
        </div>
    );
}
