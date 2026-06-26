import { PROFILE } from "@/lib/constants";
import BlurText from "./custom/BlurText";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start space-y-3">
                <BlurText
                    text="Hello There, I'm "
                    highlightText="arunabh"
                    delay={100}
                    animateBy="words"
                    direction="top"
                />
                <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                    {PROFILE.description}
                </p>
            </div>
            <div className="shrink-0">
                <Image
                    src={PROFILE.avatarUrl}
                    alt={PROFILE.name}
                    width={144}
                    height={144}
                    priority
                    className="w-28 h-28 md:w-36 md:h-36 rounded-full object-fill border-2  border-border"
                />
            </div>
        </section>
    );
};

export default HeroSection;
