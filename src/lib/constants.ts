import { Experience } from "./interface";

export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "es", "fr", "de"];

export const PROFILE = {
    name: "Arunabh Bhattacharya",
    initials: "AB",
    url: "https://arunabh.app",
    location: "Ghaziabad, India",
    locationLink: "https://www.google.com/maps/place/ghaziabad",
    description:
        "Software Engineer and Proprietor of Crohent Labs.",
    about: [
        `I got into computers out of curiosity about how things work under the hood, and quickly got hooked on turning ideas into software. That path took me through hackathons, early-stage startups, and an obsession with building for the web.`,
        `Today, I run <strong><a href="https://crohent.com" target="_blank" rel="noopener noreferrer">Crohent Labs</a></strong>, my product studio building software to make digital life better. Right now, most of my focus is on <strong><a href="https://tabenspace.com" target="_blank" rel="noopener noreferrer">Tabenspace</a></strong>—a visual workspace built to tame browser tab chaos. When I'm not shipping products, you'll usually find me exploring new tech or on LeetCode.`,
    ],
    aboutPoints: [
        "Product Studio & Founder",
        "Full Stack Engineering",
        "Backend Architecture & Node.js",
        "Tabenspace & Productivity Tools",
        "Cloud & Distributed Systems",
    ],
    avatarUrl: "/me-updated.png",
    email: "arunabh.nd@gmail.com",
} as const;

export const NAVIGATION_LINKS = [
    { name: "home", href: "/", icon: "/Arunabh-Logo.png" },
    { name: "journey", href: "/journey", icon: "/journey.svg" },
    { name: "links", href: "/links", icon: "/links.svg" },
];

export const SKILLS = [
    { name: "AWS", icon: "https://skillicons.dev/icons?i=aws", type: "Cloud" },
    { name: "GCP", icon: "https://skillicons.dev/icons?i=gcp", type: "Cloud" },
    {
        name: "Docker",
        icon: "https://skillicons.dev/icons?i=docker",
        type: "DevOps",
    },
    {
        name: "Nginx",
        icon: "https://skillicons.dev/icons?i=nginx",
        type: "DevOps",
    },
    {
        name: "GitHub Actions",
        icon: "https://skillicons.dev/icons?i=githubactions",
        type: "DevOps",
    },
    {
        name: "Linux",
        icon: "https://skillicons.dev/icons?i=linux",
        type: "DevOps",
    },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git", type: "Tools" },
    {
        name: "GitHub",
        icon: "https://skillicons.dev/icons?i=github",
        type: "Tools",
    },
    {
        name: "Bash",
        icon: "https://skillicons.dev/icons?i=bash",
        type: "Tools",
    },
    {
        name: "MongoDB",
        icon: "https://skillicons.dev/icons?i=mongodb",
        type: "Database",
    },
    {
        name: "Express",
        icon: "https://skillicons.dev/icons?i=express",
        type: "Backend",
    },
    {
        name: "Node.js",
        icon: "https://skillicons.dev/icons?i=nodejs",
        type: "Backend",
    },
    {
        name: "TypeScript",
        icon: "https://skillicons.dev/icons?i=ts",
        type: "Language",
    },
    {
        name: "PostgreSQL",
        icon: "https://skillicons.dev/icons?i=postgres",
        type: "Database",
    },
    {
        name: "FastAPI",
        icon: "https://skillicons.dev/icons?i=fastapi",
        type: "Backend",
    },
    {
        name: "Python",
        icon: "https://skillicons.dev/icons?i=py",
        type: "Language",
    },
    {
        name: "Grafana",
        icon: "https://skillicons.dev/icons?i=grafana",
        type: "DevOps",
    },
    {
        name: "Jenkins",
        icon: "https://skillicons.dev/icons?i=jenkins",
        type: "DevOps",
    },
    {
        name: "Sentry",
        icon: "https://skillicons.dev/icons?i=sentry",
        type: "DevOps",
    },
    {
        name: "JavaScript",
        icon: "https://skillicons.dev/icons?i=js",
        type: "Language",
    },
    {
        name: "Next.js",
        icon: "https://skillicons.dev/icons?i=nextjs",
        type: "Frontend",
    },
    {
        name: "Supabase",
        icon: "https://skillicons.dev/icons?i=supabase",
        type: "Database",
    },
    {
        name: "React",
        icon: "https://skillicons.dev/icons?i=react",
        type: "Frontend",
    },
    {
        name: "Tailwind",
        icon: "https://skillicons.dev/icons?i=tailwind",
        type: "Frontend",
    },
    {
        name: "Three.js",
        icon: "https://skillicons.dev/icons?i=threejs",
        type: "Frontend",
    },
    {
        name: "Vercel",
        icon: "https://skillicons.dev/icons?i=vercel",
        type: "Cloud",
    },
    {
        name: "Android Studio",
        icon: "https://skillicons.dev/icons?i=androidstudio",
        type: "Tools",
    },
    {
        name: "Flutter",
        icon: "https://skillicons.dev/icons?i=flutter",
        type: "Mobile",
    },
    {
        name: "Dart",
        icon: "https://skillicons.dev/icons?i=dart",
        type: "Language",
    },
    {
        name: "Firebase",
        icon: "https://skillicons.dev/icons?i=firebase",
        type: "Backend",
    },
];

export const EXPERIENCES: Experience[] = [
    {
        company: "Crohent Labs",
        role: "Founder & Proprietor",
        period: "July 2026 - Present",
        logoUrl: "https://www.crohent.com/favicon.ico",
        description: [
            "Building and scaling products and services to help people live better lives.",
        ],
    },
    {
        company: "Hooc AI - Hoocup (Early Stage Startup)",
        role: "Full Stack Developer (Founding Team)",
        period: "Aug 2025 - April 2026",
        logoUrl: "https://www.hooc.tech/favicon.ico",
        description: [
            "Architected full stack features with Node.js and modern frameworks for real-time notifications, background jobs, and distributed backend services.",
            "Automated CI/CD deployments, monitoring, and cloud infrastructure across GCP and Oracle Cloud.",
        ],
    },
    {
        company: "UnbiaslyAI",
        role: "Software Developer Intern",
        period: "Dec 2024 - Jul 2025",
        logoUrl: "https://unbiasly.ai/icon.svg",
        description: [
            "Built an AI-powered recruitment career portal with resume parsing and candidate evaluation workflows.",
            "Engineered full stack applications and internal developer tooling utilizing Next.js, Node.js, and TypeScript.",
        ],
    },
];

export const PROJECTS_CONTENT = {
    latestProject: {
        title: "Tabenspace",
        description:
            "Your digital control center — a smart, visual, and customizable dashboard that replaces bookmarks, folders, and endless browser tabs. Built by Arunabh Bhattacharya using Next.js, React, TypeScript, and Supabase.",
        image: "/tabenspace-og.png",
        href: "https://tabenspace.com",
    },

    allProjects: [
        {
            title: "Tabenspace",
            description:
                "Your digital control center — a smart, visual, and customizable dashboard that replaces bookmarks, folders, and endless browser tabs. Built with Next.js, React, TypeScript, and Supabase.",
            tags: ["React", "TypeScript", "Next.js", "Supabase", "Tailwind"],
            href: "https://tabenspace.com",
            image: "/tabenspace.png",
        },
        {
            title: "Kanbrew",
            description:
                "Kanban board task manager and tracking system built with Next.js, React, Node.js, Express, and PostgreSQL.",
            tags: [
                "React",
                "TypeScript",
                "Next.js",
                "Node.js",
                "Express",
                "Neon",
            ],
            href: "https://github.com/arunabh-a/Kanbrew",
            image: "/Arunabh-Logo.png",
        },
        {
            title: "AuthER",
            description:
                "Developer-first authentication platform and backend authorization system built with Node.js, TypeScript, Express, and Dockerized PostgreSQL.",
            tags: ["Node", "TypeScript", "Express", "PostgreSQL (Docker)"],
            href: "https://github.com/arunabh-a/AuthER",
            image: "/Arunabh-Logo.png",
        },
        {
            title: "Shirclex",
            description:
                "Interactive 3D web application for real-time apparel model rendering with logos and textures using Three.js, React, and JavaScript.",
            tags: ["Three.js", "React", "JavaScript"],
            href: "https://github.com/arunabh-a/Shirclex",
            image: "/experience/shirclex.png",
        },
        {
            title: "ParTable",
            description:
                "High-performance dynamic table creator and data management application built with React and JavaScript.",
            tags: ["React", "JavaScript"],
            href: "https://github.com/arunabh-a/ParTable",
            image: "/Arunabh-Logo.png",
        },
    ],
};

export const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arunabhaa/",
        icon: "/icons/linkedin-fill.svg",
        description: "The Professional Me",
        cta: "Connect",
    },
    {
        name: "GitHub",
        url: "https://github.com/arunabh-a",
        icon: "/icons/github-fill.svg",
        description: "My Home for all my Code",
        cta: "Check",
    },
    {
        name: "Leetcode",
        url: "https://leetcode.com/u/arunabh-a/",
        icon: "/icons/leetcode.svg",
        description: "started to enjoy it",
        cta: "Visit",
    },
    {
        name: "Discord",
        url: "https://discordapp.com/users/809714813562257418",
        icon: "/icons/discord-fill.svg",
        description: "Replaced by Google Meet",
        cta: "Check",
    },
    {
        name: "Hashnode",
        url: "https://arunabh.hashnode.dev/",
        icon: "/icons/hashnode-white.png",
        description: "I'll start writing as well",
        cta: "Read",
    },
    {
        name: "Twitter",
        url: "https://x.com/arunabh_2",
        icon: "/icons/twitter-x-fill.svg",
        description: "Good luck finding me post here",
        cta: "Follow",
    },
];

export const OTHER_LINKS = [
    {
        name: "Google Developer",
        url: "https://g.dev/arunabha",
        icon: "/icons/gdev.png",
        description: "My Google Developer Profile",
        cta: "Visit",
    },
    {
        name: "Spotify",
        url: "https://open.spotify.com/user/o9pmdmo3l3lvhihv87srf8bfg?si=668b885d71c546ab",
        icon: "/icons/spotify.svg",
        description: "",
        cta: "Listen",
    },
    {
        name: "Steam",
        url: "https://steamcommunity.com/profiles/76561198866581261/",
        icon: "/icons/steam_64.png",
        description:
        "I used to play, now i just have it for the badge collection",
        cta: "Visit",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/arunabh.a",
        icon: "/icons/instagram-line.svg",
        description: "Not much to see here, just some random pictures",
        cta: "Follow",
    },
    {
        name: "Twitch",
        url: "https://www.twitch.tv/palpsyy",
        icon: "/icons/twitch.svg",
        description: "",
        cta: "Watch",
    },
    {
        name: "Snapchat",
        url: "https://www.snapchat.com/add/arunabh.a?share_id=iuA70jprQ-Q&locale=en-IN",
        icon: "/icons/snapchat.svg",
        description: "",
        cta: "Add",
    },
]


export const DOCK_LINKS = {
    // navbar: [
    //     { href: "/", icon: HomeIcon, label: "Home" },
    //     { href: "/links", icon: HomeIcon, label: "Links" },
    //     { href: "/journey", icon: PencilIcon, label: "Journey" },
    // ],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/arunabh-a",
                icon: "/icons/github-fill.svg",
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/arunabhaa/",
                icon: "/icons/linkedin-fill.svg",
            },
            X: {
                name: "X",
                url: "https://x.com/arunabh_2",
                icon: "/icons/twitter-x-fill.svg",
            },
            Hashnode: {
                name: "Hashnode",
                url: "https://blog.arunabh.app/",
                icon: "/icons/hashnode-white.png",
            },
        },
    },
};

export const PRODUCT_LINKS = [
    {
        name: "Hoocup",
        url: "https://hoocup.fun",
        cover: "/icons/hoocup.png",
        description: "AI Powered Companion for your Friendly Talks",
    },
    {
        name: "Tabenspace",
        url: "https://tabenspace.com",
        cover: "/icons/tabenspace.png",
        description:
            "The Ultimate Productivity Tool to streamline your digital life",
    },
];

export const LINKS_CONTENTS = {
    social_title: "Links",
    social_description: "Check out my presence on the Internet",
    product_title: "Products",
    product_description: "Stuff I'm Actively working on",
    links: SOCIAL_LINKS,
    products: PRODUCT_LINKS,
};
