export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "es", "fr", "de"];

export const PROFILE = {
    name: "Arunabh Bhattacharya",
    initials: "AB",
    url: "https://arunabh.online",
    location: "Ghaziabad, India",
    locationLink: "https://www.google.com/maps/place/ghaziabad",
    description:
        "Software Dev as a Student. I love building things and helping people. Love Cars, Tech and Star Wars.",
    summary:
        "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    avatarUrl: "/me-updated.png",
    email: "arunabh.nd@gmail.com",
} as const;

export const NAVIGATION_LINKS = [
    { name: "home", href: "/" },
    { name: "journey", href: "/journey", header: "Journey so far" },
    { name: "links", href: "/links", header: "Useful Links" },
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

export const EXPERIENCE_CONTENT = {
    title: "Experience",
    content: [
        {
            title: "UnbiaslyAI",
            content:
                "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
            images: ["", "", "", ""],
        },
        {
            title: "Early 2023",
            content:
                "I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum. Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.",
            images: ["", "", "", ""],
        },
    ],
};

export const PROJECTS_CONTENT = [
    {
        title: "TabenSpace",
        description:
            "A Web Application for creating and managing your own Custom Tabs.",
        tags: ["React", "TypeScript", "Next.js", "Supabase", "Tailwind"],
        href: "https://tabenspace.com",
    },
    {
        title: "TaskBrew",
        description: "A Task Tracker with Kanban Boards.",
        tags: ["React", "TypeScript", "Next.js", "Node.js", "Express", "Neon"],
        href: "https://github.com/arunabh-a/Task-Brew",
    },
    {
        title: "AuthBare",
        description:
            "A Standard Authentication Backend.. (working on to make it a CLI)",
        tags: ["Node", "TypeScript", "Express", "PostgreSQL (Docker)"],
        href: "https://github.com/arunabh-a/Auth-Bare",
    },
    {
        title: "Shirclex",
        description:
            "A ThreeJS Application for rendering 3D Shirt Models with Logos and Textures.",
        tags: ["Three.js", "React", "JavaScript"],
        href: "https://github.com/arunabh-a/Shirclex",
    },
    {
        title: "ParTable",
        description:
            "A React Application for creating Dynamic Tables with Custom Data.",
        tags: ["React", "JavaScript"],
        href: "https://github.com/arunabh-a/ParTable",
    },
];

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
    //     { href: "#", icon: HomeIcon, label: "Home" },
    //     { href: "#", icon: PencilIcon, label: "Blog" },
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
