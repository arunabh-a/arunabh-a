import { Experience } from "./interface";

export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "es", "fr", "de"];

export const PROFILE = {
    name: "Arunabh Bhattacharya",
    initials: "AB",
    url: "https://arunabh.online",
    location: "Ghaziabad, India",
    locationLink: "https://www.google.com/maps/place/ghaziabad",
    description: "I build apps on web — fast, scalable, and actually useful.",
    about: [
        `I am a <strong>Full Stack Dev</strong> and I love to Build things.`,
        `Currently I am building <strong><a href="https://tabenspace.com">Tabenspace</a></strong> — a customizable browser productivity dashboard designed to help users organize websites, notes, and daily workflows in one place. `,
        // I got into computers early on and naturally gravitated toward engineering as a way to turn curiosity into working systems. Over the past few years, I’ve built a strong foundation in computer science and modern web development — starting with core languages like **Python, JavaScript and SQL**, and expanding into full-stack and cloud-focused tools such as **React, Next.js, Node.js, FastAPI, AWS, and Docker**.

        // I enjoy working end-to-end — from designing interfaces to building backend services, deploying them to the cloud, and iterating based on real usage. I’m always building something new, and actively looking for opportunities where I can grow and contribute as a Full-Stack developer.
    ],
    aboutPoints: [
        "Developer tools",
        "Web performance",
        "Product-focused engineering",
        "Scalable backend systems",
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
        company: "Hooc AI - Hoocup (Early Stage Startup)",
        role: "Full Stack Developer (Founding Team)",
        period: "Aug 2025 - April 2026",
        logoUrl: "https://www.hooc.tech/favicon.ico",
        description: [
            "Worked on real-time notifications, background jobs, and the kind of infrastructure nobody notices when it works.",
            "Automated deployments, monitoring, and cloud infrastructure across GCP and Oracle Cloud.",
        ],
    },
    {
        company: "UnbiaslyAI",
        role: "Intern - Software Developer",
        period: "Dec 2024 - Jul 2025",
        logoUrl: "https://unbiasly.ai/icon.svg",
        description: [
            "Built an AI-powered career portal with resume parsing and recruitment workflows.",
            "Created internal tools and full-stack applications using Next.js and modern web stuff.",
        ],
    },
];

export const PROJECTS_CONTENT = {
    latestProject: {
        title: "Tabenspace",
        description:
            "Your digital control center — a smart, visual, and customizable dashboard that replaces bookmarks, folders, and endless browser tabs.",
        image: "/og-image.png",
        href: "https://tabenspace.com",
    },

    allProjects: [
        {
            title: "Tabenspace",
            description:
                "Your digital control center — a smart, visual, and customizable dashboard that replaces bookmarks, folders, and endless browser tabs.",
            tags: ["React", "TypeScript", "Next.js", "Supabase", "Tailwind"],
            href: "https://tabenspace.com",
            image: "/tabenspace.png",
        },
        {
            title: "Kanbrew",
            description: "Kanban Board task manager for Task Tracking",
            tags: [
                "React",
                "TypeScript",
                "Next.js",
                "Node.js",
                "Express",
                "Neon",
            ],
            href: "https://github.com/arunabh-a/Kanbrew",
            image: "/og-image.png",
        },
        {
            title: "AuthER",
            description:
                " Authentication Platform.. (working on to make it a proper authentication system for devs)",
            tags: ["Node", "TypeScript", "Express", "PostgreSQL (Docker)"],
            href: "https://github.com/arunabh-a/AuthER",
            image: "/og-image.png",
        },
        {
            title: "Shirclex",
            description:
                "A ThreeJS Application for rendering 3D Shirt Models with Logos and Textures.",
            tags: ["Three.js", "React", "JavaScript"],
            href: "https://github.com/arunabh-a/Shirclex",
            image: "/experience/shirclex.png",
        },
        {
            title: "ParTable",
            description:
                "A React Application for creating Dynamic Tables with Custom Data.",
            tags: ["React", "JavaScript"],
            href: "https://github.com/arunabh-a/ParTable",
            image: "/og-image.png",
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
        cta: "Visit",
    },
    {
        // url: "https://open.spotify.com/user/o9pmdmo3l3lvhihv87srf8bfg?si=668b885d71c546ab",
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
        cta: "Visit",
    },
    {
        name: "Hashnode",
        url: "https://blog.arunabh.online/",
        icon: "/icons/hashnode-white.png",
        description: "Where I write about Tech (or I will try to)",
        cta: "Read",
    },
    {
        name: "Twitter",
        url: "https://x.com/arunabh_2",
        icon: "/icons/twitter-x-fill.svg",
        description: "Good luck finding me post here",
        cta: "Follow",
    },
    {
        name: "Google Developer",
        url: "https://g.dev/arunabha",
        icon: "/icons/gdev.png",
        description: "My Google Developer Profile",
        cta: "Visit",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/_arunabh.02",
        icon: "/icons/instagram-line.svg",
        description: "Not much to see here, just some random pictures",
        cta: "Follow",
    },
    {
        name: "Steam",
        url: "https://steamcommunity.com/profiles/76561198866581261/",
        icon: "/icons/steam_64.png",
        description:
            "I used to play, now i just have it for the badge collection",
        cta: "Visit",
    },
];

export const OTHER_LINKS = [
    {
        name: "Spotify",
        url: "https://open.spotify.com/user/o9pmdmo3l3lvhihv87srf8bfg?si=668b885d71c546ab",
        icon: "/icons/spotify.svg",
        description: "",
        cta: "Listen",
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
                url: "https://blog.arunabh.online/",
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
