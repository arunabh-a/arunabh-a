import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/custom/Timeline";
import Link from "next/link";
import type { Metadata } from "next";
import { PROFILE } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Journey — Arunabh Bhattacharya",
    description:
        "Developer journey of Arunabh Bhattacharya from 2021 to present — hackathons, full-stack projects, founding startup engineering, and building Tabenspace.",
    alternates: {
        canonical: `${PROFILE.url}/journey`,
    },
    openGraph: {
        title: `Journey | ${PROFILE.name} — Full Stack Developer`,
        description:
            "Software engineering journey, hackathons, and projects by Arunabh Bhattacharya.",
        url: `${PROFILE.url}/journey`,
    },
};

const data = [
    {
        title: "2021-22",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-normal mb-8">
                    Started my journey as a Web Developer.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
                    Joined Google Developer Student Club - LPU as a Web Team
                    Member
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/experience/wow_punjab.jpg"
                        alt="Google Developer Student Club — WOW Punjab event"
                        width={600}
                        height={600}
                        priority
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full exp-img"
                    />
                    <Image
                        src="/experience/wow_stage.jpg"
                        alt="Arunabh Bhattacharya on stage at WOW Punjab"
                        width={600}
                        height={600}
                        priority
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full exp-img"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "2023",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-normal mb-8">
                    Started Building some Projects
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
                    Check Out My Work on my{" "}
                    <Link href="https://github.com/arunabh-a">Github</Link>
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/experience/Tabenspace.png"
                        alt="Tabenspace — browser productivity dashboard project screenshot"
                        width={500}
                        height={500}
                        priority
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full exp-img"
                    />
                    <Image
                        src="/experience/sadam.png"
                        alt="Project screenshot from 2023"
                        width={500}
                        height={500}
                        priority
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full exp-img"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "2024",
        content: (
            <div className="font-euclid">
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-normal mb-8">
                    Participated in Hackathons
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
                    Had tons of fun and learned a lot.
                </p>
                <div className="mb-8"></div>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/experience/RJ-Police.jpg"
                        alt="Hackathon organised by Rajasthan Police 2024"
                        width={500}
                        height={500}
                        priority
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full exp-img"
                    />
                    <Image
                        src="/experience/fun.jpg"
                        alt="Arunabh having fun at a hackathon in 2024"
                        width={500}
                        height={500}
                        priority
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-50 w-full exp-img"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "2025",
        content: (
            <div className="font-euclid">
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-normal mb-8">
                    Started my Career
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-8">
                    Interned at UnbiaslyAI as a Software Developer. Also worked with Hooc AI as a Full Stack Developer (Founding Team).
                </p>
                <div className="mb-8"></div>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/experience/unbiasly.jpg"
                        alt="Working at UnbiaslyAI as a Software Developer Intern"
                        width={500}
                        height={500}
                        priority
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full exp-img"
                    />
                    <Image
                        src="/experience/hoocup.jpg"
                        alt="Working at Hooc AI as a Founding Software Developer"
                        width={500}
                        height={500}
                        priority
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-50 w-full exp-img"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "2026",
        content: (
            <div className="font-euclid">
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-normal mb-8">
                    Writing...
                </p>
                <div className="mb-8"></div>
                <div className="grid grid-cols-2 gap-4"></div>
            </div>
        ),
    },
];

const Page = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="md:max-w-5xl">
                <div className=" w-full flex-col gap-2 flex px-4">
                    <h1 className="text-3xl font-mono font-semibold">Developer Journey &bull; Arunabh Bhattacharya</h1>
                    <p className="text-sm text-muted-foreground">Software engineering milestones, hackathons, startup roles, and building Tabenspace.</p>
                </div>
                <Timeline data={data} />
            </div>
        </div>
    );
};

export default Page;
