import LinkPageItem from "@/components/LinkItem";
import LatestProjectLink from "@/components/LatestProjectLink";
import { LINKS_CONTENTS, PRODUCT_LINKS, PROFILE, PROJECTS_CONTENT, SOCIAL_LINKS } from "@/lib/constants";
import { ChevronRight, Inbox, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Links — Arunabh Bhattacharya",
    description:
        "All verified profiles and links for Arunabh Bhattacharya — Full Stack Developer & Software Engineer. Connect on LinkedIn, GitHub, LeetCode, and explore Tabenspace.",
    alternates: {
        canonical: `${PROFILE.url}/links`,
    },
    openGraph: {
        title: `Links | ${PROFILE.name} — Full Stack Developer`,
        description:
            "Official profiles and web presence for Arunabh Bhattacharya — LinkedIn, GitHub, and projects.",
        url: `${PROFILE.url}/links`,
    },
};

const Page = () => {
    const content = SOCIAL_LINKS;
    return (
        <div className="flex items-center justify-center">
            <div className="flex max-w-3xl flex-col gap-8">
                <div className=" flex-col gap-4">
                    <h1 className="text-3xl font-mono font-semibold">Links &bull; Arunabh Bhattacharya</h1>
                    <p className="text-sm font-bold text-muted-foreground">
                        Full Stack Developer &bull; Software Engineer &bull; Connect across platforms or visit <span className="font-mono text-primary">'arunabh.app/(platform)'</span> to redirect.
                    </p>
                </div>

                <div className="flex flex-col gap-16">
                    <div className="flex w-full flex-col gap-4">
                        <LatestProjectLink
                            title={PROJECTS_CONTENT.latestProject.title}
                            href={PROJECTS_CONTENT.latestProject.href}
                            image={PROJECTS_CONTENT.latestProject.image}
                        />

                        <LinkPageItem
                            key="contact"
                            title="My Email"
                            description="Reach out if you'd like to get in touch."
                            url={`mailto:${PROFILE.email}`}
                            icon={<Inbox className="w-7 h-7 fill-none" />}
                            cta="Contact"
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
