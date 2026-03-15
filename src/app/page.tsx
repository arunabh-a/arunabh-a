import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { MainDock } from "@/components/MainDock";
import {
    PROFILE,
    EXPERIENCES,
    PROJECTS_CONTENT,
    SOCIAL_LINKS,
} from "@/lib/constants";
import Image from "next/image";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    url: PROFILE.url,
    email: PROFILE.email,
    jobTitle: "Full-Stack Developer",
    description: PROFILE.description,
    address: {
        "@type": "PostalAddress",
        addressLocality: "Ghaziabad",
        addressCountry: "IN",
    },
    sameAs: [
        "https://github.com/arunabh-a",
        "https://www.linkedin.com/in/arunabhaa/",
        "https://x.com/arunabh_2",
        "https://blog.arunabh.online/",
        "https://g.dev/arunabha",
    ],
    knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Docker",
        "AWS",
        "GCP",
    ],
    worksFor: {
        "@type": "Organization",
        name: EXPERIENCES[0]?.company,
    },
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-background">
                <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-16">
                    <div className="flex-1 space-y-15">
                        <HeroSection />
                        <AboutSection />
                        <WorkSection />
                        {/* <EducationSection /> */}
                        <SkillsSection />
                        <ProjectsSection />
                        <ContactSection />
                    </div>
                    {/* <MainDock /> */}
                </div>
            </main>
        </>
    );
}
