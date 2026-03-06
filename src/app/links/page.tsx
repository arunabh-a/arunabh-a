import LinkPageItem from "@/components/LinkItem";
import { LINKS_CONTENTS, PRODUCT_LINKS, PROFILE, PROJECTS_CONTENT, SOCIAL_LINKS } from "@/lib/constants";
import { ChevronRight, Inbox, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Links",
    description:
        "All my social profiles, projects, and useful links in one place — GitHub, LinkedIn, Twitter, Hashnode, and more.",
    alternates: {
        canonical: `${PROFILE.url}/links`,
    },
    openGraph: {
        title: `Links | ${PROFILE.name}`,
        description:
            "All my social profiles, projects, and useful links in one place.",
        url: `${PROFILE.url}/links`,
    },
};

const Page = () => {
    const content = SOCIAL_LINKS;
    return (
        <div className="flex items-center justify-center">
            <div className="flex max-w-3xl flex-col gap-8">
                <div className=" flex-col gap-4">
                    <h1 className="text-3xl font-mono font-medium">Links</h1>
                    <p>Quicklinks to my social platforms and projects.</p>
                </div>

                <div className="flex flex-col gap-16">
                    <div className="flex w-full flex-col gap-4">
                        <div className="flex flex-col gap-3 rounded-md font-mono border-2 border-dashed bg-card p-4">
                            <div className="flex items-center justify-between">
                                <span>Latest Product</span>
                                <Link
                                    className="flex items-center gap-1 font-sans text-md text-low-contrast-text hover:text-high-contrast-text hover:opacity-90"
                                    href={PROJECTS_CONTENT.latestProject.href}
                                >
                                    <span>{PROJECTS_CONTENT.latestProject.title}</span>
                                    <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-high-contrast-text">
                                        <ChevronRight />
                                    </span>
                                </Link>
                            </div>

                            <Image src={PROJECTS_CONTENT.latestProject.image} alt={PROJECTS_CONTENT.latestProject.title} width={500} height={500} 
                            className="rounded-lg object-cover h-full w-full"/> 
                        </div>

                        <LinkPageItem
                            key="contact"
                            title="Contact me"
                            description="Reach out if you'd like to work together."
                            url={`mailto:${PROFILE.email}`}
                            icon={Inbox}
                            cta="Email"
                            svgIcon={false}
                        />

                        {content.map((content, index) => (
                            <LinkPageItem
                                key={index}
                                title={content.name}
                                description={content.description}
                                url={content.url}
                                icon={content.icon}
                                cta={content.cta}
                                svgIcon={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
