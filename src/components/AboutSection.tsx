import { PROFILE } from "@/lib/constants";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="flex flex-col-reverse md:flex-row items-center justify-between gap-8"
        >
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start space-y-3">
                <h2
                    id="about-heading"
                    className="text-sm font-semibold text-foreground font-mono mb-3"
                >
                    About
                </h2>
                <div className="text-muted-foreground leading-relaxed text-xs md:text-sm space-y-3">
                    {PROFILE.about.map((sentence, index) => (
                        <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: sentence }}
                        />
                    ))}
                </div>
            </div>
            <div className="shrink-0">
                <Image
                    src={PROFILE.avatarUrl}
                    alt={`${PROFILE.name} — Full Stack Developer & Software Engineer`}
                    width={240}
                    height={240}
                    priority
                    className="w-28  md:w-36 lg:w-48 aspect-square rounded-full object-fill border-2 border-border"
                />
            </div>
        </section>
    );
};

export default AboutSection;
