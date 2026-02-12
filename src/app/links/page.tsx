import { LINKS_CONTENTS, PRODUCT_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
    const content = LINKS_CONTENTS;
    return (
        <div className="flex flex-1 flex-col h-screen justify-center gap-10 items-center">
            <div className="bg-gray-500 max-w-lg px-6 py-5 rounded-3xl">
                <h1 className="text-2xl font-medium font-lexendDeca">
                    {content.social_title}
                </h1>
                <h2 className="text-sm text-gray-300">
                    {content.social_description}
                </h2>
                <div className="py-4 flex flex-col gap-4">
                    {content.links.map((link, index) => (
                        <div
                            key={index}
                            className="w-full flex items-center rounded-xl justify-between px-4 py-2 bg-gray-400 h-full border border-gray-300"
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    src={link.icon}
                                    alt={link.name}
                                    width={30}
                                    height={30}
                                />{" "}
                                <div className="flex flex-col">
                                    <span className="text-lg font-medium">
                                        {link.name}
                                    </span>
                                    <span className="text-sm font-light">
                                        {link.description}
                                    </span>
                                </div>
                            </div>
                            <Link href={link.url} target="_blank" className="">
                                Visit
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-500 max-w-md px-6 py-5 rounded-3xl">
                <h1 className="text-2xl font-medium font-lexendDeca">
                    {content.product_title}
                </h1>
                <h2 className="text-sm text-gray-300">
                    {content.product_description}
                </h2>
                <div className="py-4 flex flex-col gap-4">
                    {content.products.map((link, index) => (
                        <div
                            key={index}
                            className="w-full flex flex-col items-center rounded-xl justify-between px-4 py-2 bg-gray-400 h-full border border-gray-300"
                        >
                            <div className="flex ">
                                <div className="flex flex-col">
                                    <span className="text-lg font-medium">
                                        {link.name}
                                    </span>
                                    <span className="text-sm font-light">
                                        {link.description}
                                    </span>
                                </div>
                                <Link href={link.url} target="_blank">
                                    Visit
                                </Link>
                            </div>
                            {/* <Image
                                src={link.cover}
                                alt={link.name}
                                width={1000}
                                height={1000}
                            /> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
