import type { Metadata } from "next";
import { Zain, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { PROFILE } from "@/lib/constants";
import { TooltipProvider } from "@/components/ui/tooltip";

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
        default: PROFILE.name,
        template: `%s | ${PROFILE.name}`,
    },
    description: PROFILE.description,
    openGraph: {
        title: `${PROFILE.name}`,
        description: PROFILE.description,
        url: PROFILE.url,
        siteName: `${PROFILE.name}`,
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
        title: `${PROFILE.name}`,
        card: "summary_large_image",
    },
    verification: {
        google: "",
        yandex: "",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${zain.variable} ${notoSansMono.variable} antialiased dark mx-auto py-12 pb-24  px-6`}
            >
                <TooltipProvider>
                    {children}
                </TooltipProvider>
            </body>
        </html>
    );
}
