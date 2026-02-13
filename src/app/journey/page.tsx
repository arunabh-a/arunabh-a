import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/custom/Timeline";
import Link from "next/link";

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
                        alt="startup template"
                        width={600}
                        height={600}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full exp-img"
                    />
                    <Image
                        src="/experience/wow_stage.jpg"
                        alt="startup template"
                        width={600}
                        height={600}
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
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full exp-img"
                    />
                    <Image
                        src="/experience/sadam.png"
                        alt="hero template"
                        width={500}
                        height={500}
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
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full exp-img"
                    />
                    <Image
                        src="/experience/fun.jpg"
                        alt="hero template"
                        width={500}
                        height={500}
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
                    Worked with UnbiaslyAI as an Software Dev Intern. Also working with Hooc AI as a Founding Software Developer and Team Member.
                </p>
                <div className="mb-8"></div>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/experience/unbiasly.jpg"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full exp-img"
                    />
                    <Image
                        src="/experience/hoocup.jpg"
                        alt="hero template"
                        width={500}
                        height={500}
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
                <div className=" w-full flex-col gap-4 flex">
                    <h1 className="text-3xl font-mono font-medium">Journey So Far</h1>
                    <p>Check out my journey and experiences over the years.</p>
                </div>
                <Timeline data={data} />
            </div>
        </div>
    );
};

export default Page;
