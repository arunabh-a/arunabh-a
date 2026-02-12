import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import LinkNav from "@/components/LinkNav";
import { MainDock } from "@/components/MainDock";

export default function Home() {
    return (
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
                <MainDock />
                {/* <LinkNav /> */}
            </div>
        </main>
    );
}
