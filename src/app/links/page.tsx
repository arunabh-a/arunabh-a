import LinkPageItem from "@/components/LinkItem";
import LatestProjectLink from "@/components/LatestProjectLink";
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
                    <h1 className="text-3xl font-mono font-semibold">Links</h1>
                    <p className="text-sm font-bold text-muted-foreground">
                        Can't remember my handle? Just go to <span className="font-mono text-primary">'arunabh.online/(platform)'</span>.<br />
                        Add the platform name and you'll be redirected. makes sharing super easy!
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
