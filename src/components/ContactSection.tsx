"use client";
import { PROFILE } from "@/lib/constants";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import posthog from "posthog-js";

// const contacts = [
//   { icon: Github, label: "GitHub", href: "https://github.com" },
//   { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
//   { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
//   { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
// ];

const ContactSection = () => {
  return (
    <section id="contact">
      <h2 className="text-sm font-semibold text-foreground font-mono mb-4">Connect</h2>
      <p className="text-xs text-muted-foreground mb-5">
        Reach me at{" "}
        <a
          href={`mailto:${PROFILE.email}`}
          className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
          onClick={() =>
            posthog.capture("contact_email_clicked", { email: PROFILE.email })
          }
        >
          {PROFILE.email}
        </a>{" "}
        if you'd like to get in touch.
      </p>
      {/* <div className="flex gap-3">
        {contacts.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
            aria-label={label}
          >
            <Icon className="w-3.5 h-3.5" />
          </a>
        ))}
      </div> */}
    </section>
  );
};

export default ContactSection;
