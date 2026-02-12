import Link from "next/link";

const AboutSection = () => {
    return (
        <section id="about">
            <h2 className="text-sm font-semibold text-foreground font-mono mb-4">
                About
            </h2>
            <p className=" text-muted-foreground leading-relaxed">
                I'm a{" "}<strong className="text-white">Software Dev</strong> and I
                love to build things. 
                <br />
                I am working on building {" "}
                <Link href="https://tabenspace.com" className="text-white">
                    Tabenspace
                </Link>
                <br />
                I am passionate about creating products that are{" "}
                <strong className="text-white">user-friendly and accessible</strong> to everyone.
                
            </p>
        </section>
    );
};

export default AboutSection;
