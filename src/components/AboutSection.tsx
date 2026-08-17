import { PROFILE } from "@/lib/constants";

const AboutSection = () => {
    return (
        <section id="about">
            <h2 className="text-sm font-semibold text-foreground font-mono mb-4">
                About
            </h2>
            <div className=" text-muted-foreground leading-relaxed text-xs md:text-sm">
                {PROFILE.about.map((sentence, index) => (
                    <div key={index}>
                        <span
                            dangerouslySetInnerHTML={{ __html: sentence }}
                        />
                        <br />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutSection;
