import type { Metadata } from "next";
import { Zain, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { PROFILE } from "@/lib/constants";
import { TooltipProvider } from "@/components/ui/tooltip";
import LinkNav from "@/components/LinkNav";

const zain = Zain({
    variable: "--font-zain",
    subsets: ["latin"],
    weight: ["200", "300", "400", "700", "800", "900"],
});

const notoSansMono = Noto_Sans_Mono({
    variable: "--font-noto-sans-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    metadataBase: new URL(PROFILE.url),
    title: {
        default: `${PROFILE.name} — Full-Stack Developer`,
        template: `%s | ${PROFILE.name}`,
    },
    description: PROFILE.description,
    keywords: [
        "Arunabh Bhattacharya",
        "Full-Stack Developer",
        "Software Developer",
        "Next.js Developer",
        "React Developer",
        "TypeScript",
        "FastAPI",
        "Python",
        "Node.js",
        "Portfolio",
        "India",
    ],
    authors: [{ name: PROFILE.name, url: PROFILE.url }],
    creator: PROFILE.name,
    alternates: {
        canonical: PROFILE.url,
    },
    openGraph: {
        title: `${PROFILE.name} — Full-Stack Developer`,
        description: PROFILE.description,
        url: PROFILE.url,
        siteName: PROFILE.name,
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: `${PROFILE.name} — Full-Stack Developer`,
        description: PROFILE.description,
        card: "summary_large_image",
        creator: "@arunabh_2",
    },
    category: "technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${zain.variable} ${notoSansMono.variable} antialiased dark mx-auto bg-[radial-gradient(ellipse_70%_55%_at_10%_0%,rgba(45,212,191,0.15),transparent_60%),radial-gradient(ellipse_70%_55%_at_95%_100%,rgba(91,95,239,0.18),transparent_60%)] bg-linear-to-br from-[#0F1117] via-[#12151f] to-[#151a26] px-6 py-16`}
            >
                <TooltipProvider>
                    <LinkNav />
                    {children}
                </TooltipProvider>
            </body>
        </html>
    );
}

