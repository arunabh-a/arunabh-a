import { PROFILE } from "@/lib/constants";
import BlurText from "./custom/BlurText";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="flex flex-col gap-2 w-full">
                <BlurText
                    as="h1"
                    text="Hello There, I'm"
                    highlightText="Arunabh"
                    delay={80}
                    animateBy="words"
                    direction="top"
                />
                <h2 className="text-sm sm:text-base md:text-lg font-mono text-primary/90 font-semibold tracking-wide text-center md:text-left">
                    {" "}
                    Software Engineer &bull; Proprietor of Crohent Labs
                </h2>
            </div>
        </section>
    );
};

export default HeroSection;
