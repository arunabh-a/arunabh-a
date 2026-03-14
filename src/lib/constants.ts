import { Experience } from "./interface";

export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "es", "fr", "de"];

export const PROFILE = {
    name: "Arunabh Bhattacharya",
    initials: "AB",
    url: "https://arunabh.online",
    location: "Ghaziabad, India",
    locationLink: "https://www.google.com/maps/place/ghaziabad",
    description:
        "I build things for the web — fast, scalable, and actually useful.",
    about: [
        `I am a <strong>Full-Stack Dev</strong> and I love to Build things.`,
        `Currently I am building <strong><a href="https://tabenspace.com">Tabenspace</a></strong> — a customizable browser productivity dashboard designed to help users organize websites, notes, and daily workflows in one place. `,
    ],
    aboutPoints: [
        'Developer tools',
        'Web performance',
        'Product-focused engineering',
        'Scalable backend systems'
    ],
    avatarUrl: "/me-updated.png",
    email: "arunabh.nd@gmail.com",
} as const;

export const NAVIGATION_LINKS = [
    { name: "home", href: "/", icon: "/home.svg" },
    { name: "journey", href: "/journey", icon: "/journey.svg" },
    { name: "links", href: "/links", icon: "/links.svg" },
];

export const SKILLS = [
    { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
    { name: "GCP", icon: "https://skillicons.dev/icons?i=gcp" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "Nginx", icon: "https://skillicons.dev/icons?i=nginx" },
    {
        name: "GitHub Actions",
        icon: "https://skillicons.dev/icons?i=githubactions",
    },
    { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "Bash", icon: "https://skillicons.dev/icons?i=bash" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
    { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
    { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
    { name: "Grafana", icon: "https://skillicons.dev/icons?i=grafana" },
    { name: "Jenkins", icon: "https://skillicons.dev/icons?i=jenkins" },
    { name: "Sentry", icon: "https://skillicons.dev/icons?i=sentry" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Supabase", icon: "https://skillicons.dev/icons?i=supabase" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Three.js", icon: "https://skillicons.dev/icons?i=threejs" },
    { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
    {
        name: "Android Studio",
        icon: "https://skillicons.dev/icons?i=androidstudio",
    },
    { name: "Flutter", icon: "https://skillicons.dev/icons?i=flutter" },
    { name: "Dart", icon: "https://skillicons.dev/icons?i=dart" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
];

export const EXPERIENCES: Experience[] = [
    {
        company: "Hooc AI/Hoocup",
        role: "Founding Software Developer",
        period: "Aug 2025 - Present",
        logoUrl: "https://www.hooc.tech/favicon.ico",
        description: [
            "Building scalable backend services with FastAPI and Python.",
            "Developed real-time notification system with message history and retry logic.",
            "Set up automated monitoring, recovery systems, and CI/CD pipelines with Docker across GCP and Oracle Cloud.",
        ],
    },
    {
        company: "UnbiaslyAI",
        role: "Intern - Software Developer",
        period: "Dec 2024 - Jul 2025",
        logoUrl: "https://unbiasly.ai/icon.svg",
        description: [
            "Enhanced unbiasly.ai (10M+ users) and built Career Portal with AI-powered Resume Parser, achieving 30% reduction in page load times.",
            "Refactored Internal Admin Panel with modular architecture, reducing publishing time by 67%.",
            "Built full-stack platform for bureaucrats using Next.js, TanStack Query, and REST APIs with secure data orchestration.",
        ],
    },
];

export const PROJECTS_CONTENT = {
    latestProject : {
        title: "Tabenspace",
        description:
            "Your digital control center — a smart, visual, and customizable dashboard that replaces bookmarks, folders, and endless browser tabs.",
        image: '/og-image.png',
        href: "https://tabenspace.com",
    },


    allProjects : [
        {
            title: "Tabenspace",
            description:
                "Your digital control center — a smart, visual, and customizable dashboard that replaces bookmarks, folders, and endless browser tabs.",
            tags: ["React", "TypeScript", "Next.js", "Supabase", "Tailwind"],
            href: "https://tabenspace.com",
            image: "/tabenspace.png"
        },
        {
            title: "TaskBrew",
            description: "Kanban Board task manager for Task Tracking",
            tags: ["React", "TypeScript", "Next.js", "Node.js", "Express", "Neon"],
            href: "https://github.com/arunabh-a/Task-Brew",
            image: "/og-image.png"
        },
        {
            title: "AuthER",
            description:
                " Authentication Platform.. (working on to make it a proper authentication system for devs)",
            tags: ["Node", "TypeScript", "Express", "PostgreSQL (Docker)"],
            href: "https://github.com/arunabh-a/AuthER",
            image: "/og-image.png"
        },
        {
            title: "Shirclex",
            description:
                "A ThreeJS Application for rendering 3D Shirt Models with Logos and Textures.",
            tags: ["Three.js", "React", "JavaScript"],
            href: "https://github.com/arunabh-a/Shirclex",
            image: "/experience/shirclex.png"
        },
        {
            title: "ParTable",
            description:
                "A React Application for creating Dynamic Tables with Custom Data.",
            tags: ["React", "JavaScript"],
            href: "https://github.com/arunabh-a/ParTable",
            image: "/og-image.png"
        },
    ]
};


export const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arunabhaa/",
        icon: "/icons/linkedin-fill.svg",
        description: "The Professional Me",
        cta: 'Connect'
    },
    {
        name: "GitHub",
        url: "https://github.com/arunabh-a",
        icon: "/icons/github-fill.svg",
        description: "My Home for all my Code",
        cta: 'Visit'
    },
    {
        // url: "https://open.spotify.com/user/o9pmdmo3l3lvhihv87srf8bfg?si=668b885d71c546ab",
        name: "Leetcode",
        url: "https://leetcode.com/u/arunabh-a/",
        icon: "/icons/leetcode.svg",
        description: "started to enjoy it",
        cta: 'Visit'
    },
    {
        name: "Discord",
        url: "https://discordapp.com/users/809714813562257418",
        icon: "/icons/discord-fill.svg",
        description: "Replaced by Google Meet",
        cta: 'Visit'
    },
    {
        name: "Hashnode",
        url: "https://blog.arunabh.online/",
        icon: "/icons/hashnode-white.png",
        description: "Where I write about Tech (or I will try to)",
        cta: 'Read'
    },
    {
        name: "Twitter",
        url: "https://x.com/arunabh_2",
        icon: "/icons/twitter-x-fill.svg",
        description: "Good luck finding me post here",
        cta: 'Follow'
    },
    {
        name: "Google Developer",
        url: "https://g.dev/arunabha",
        icon: "/icons/gdev.png",
        description: "My Google Developer Profile",
        cta: 'Visit'
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/_arunabh.02",
        icon: "/icons/instagram-line.svg",
        description: "Not much to see here, just some random pictures",
        cta: 'Follow'
    },
    {
        name: "Steam",
        url: "https://steamcommunity.com/profiles/76561198866581261/",
        icon: "/icons/steam_64.png",
        description: "I used to play, now i just have it for the badge collection",
        cta: 'Visit'
    },
];

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
