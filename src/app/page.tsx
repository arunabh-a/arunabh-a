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
} from "@/lib/constants";

/**
 * Safely serializes an object for injection into a JSON-LD <script> tag.
 * JSON.stringify alone does not escape `<`, `>`, or `&`, which means a value
 * containing `</script>` would break out of the script context (CWE-79).
 * This helper replaces those characters with their Unicode escape equivalents,
 * which are semantically identical inside JSON but safe in an HTML script block.
 */
function serializeJsonLd(value: Record<string, unknown>): string {
    return JSON.stringify(value)
        .replace(/</g, "\\u003c")
        .replace(/>/g, "\\u003e")
        .replace(/&/g, "\\u0026");
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProfilePage",
            "@id": `${PROFILE.url}/#profilepage`,
            url: PROFILE.url,
            name: `${PROFILE.name} — Full Stack Developer & Software Engineer`,
            isPartOf: {
                "@type": "WebSite",
                "@id": `${PROFILE.url}/#website`,
                url: PROFILE.url,
                name: `${PROFILE.name} Portfolio`,
                description:
                    "Official website and portfolio of Arunabh Bhattacharya, Full Stack Developer and Software Engineer.",
            },
            about: {
                "@id": `${PROFILE.url}/#person`,
            },
            mainEntity: {
                "@id": `${PROFILE.url}/#person`,
            },
        },
        {
            "@type": "Person",
            "@id": `${PROFILE.url}/#person`,
            name: PROFILE.name,
            givenName: "Arunabh",
            familyName: "Bhattacharya",
            alternateName: ["Arunabh", "arunabh-a", "arunabhaa"],
            url: PROFILE.url,
            image: `${PROFILE.url}${PROFILE.avatarUrl}`,
            jobTitle: "Software Engineer & Founder",
            hasOccupation: {
                "@type": "Occupation",
                name: "Software Engineer & Product Studio Founder",
                occupationLocation: {
                    "@type": "AdministrativeArea",
                    name: "India",
                },
                skills:
                    "Software Engineering, Full Stack Development, Node.js, Next.js, React, TypeScript, Python, FastAPI, Docker, Cloud Computing, Tabenspace, Crohent Labs",
            },
            description: PROFILE.description,
            email: `mailto:${PROFILE.email}`,
            address: {
                "@type": "PostalAddress",
                addressLocality: "Ghaziabad",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
            },
            sameAs: [
                "https://www.linkedin.com/in/arunabhaa/",
                "https://github.com/arunabh-a",
                "https://x.com/arunabh_2",
                "https://leetcode.com/u/arunabh-a/",
                "https://arunabh.hashnode.dev/",
                "https://g.dev/arunabha",
                "https://tabenspace.com",
                "https://crohent.com",
            ],
            knowsAbout: [
                "Software Engineering",
                "Full Stack Development",
                "Node.js",
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "Python",
                "FastAPI",
                "Tabenspace",
                "Crohent Labs",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "AWS",
                "Google Cloud Platform (GCP)",
                "Web Performance",
                "RESTful APIs",
                "Tailwind CSS",
            ],
            alumniOf: {
                "@type": "EducationalOrganization",
                name: "Lovely Professional University",
            },
            worksFor: {
                "@type": "Organization",
                name: "Crohent Labs",
                url: "https://crohent.com",
            },
        },
    ],
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
            />
            <main className="min-h-screen ">
                <div className="max-w-5xl mx-auto px-5 flex flex-col md:flex-row gap-16">
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
