import { PROFILE, SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" aria-labelledby="contact-heading">
            <h2
                id="contact-heading"
                className="text-sm font-semibold text-foreground font-mono mb-2"
            >
                Connect &bull; Arunabh Bhattacharya
            </h2>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                Looking for me for your team or project?
                Reach out directly at{" "}
                <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-foreground underline underline-offset-4 hover:text-primary transition-colors font-mono"
                >
                    {PROFILE.email}
                </a>{" "}
                or connect across my verified profiles below.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
                {SOCIAL_LINKS.map((social) => (
                    <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="me noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-1.5 text-xs font-mono text-muted-foreground hover:border-primary/50 hover:bg-card hover:text-foreground transition-all"
                        aria-label={`${social.name}: Arunabh Bhattacharya`}
                    >
                        <Image
                            src={social.icon}
                            alt={`${social.name} icon`}
                            width={16}
                            height={16}
                            className="w-4 h-4 object-contain brightness-90 group-hover:brightness-100"
                        />
                        <span>{social.name}</span>
                        <ArrowUpRight className="w-3 h-3 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ContactSection;
