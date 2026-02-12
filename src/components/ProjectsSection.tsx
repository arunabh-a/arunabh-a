import { PROJECTS_CONTENT } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    href: string;
}

const projects: Project[] = PROJECTS_CONTENT;

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h2 className="text-sm font-semibold text-foreground font-mono mb-2">
                Projects
            </h2>
            <p className="text-xs text-muted-foreground mb-6">
                A few things I've built.
            </p>
            <div className="space-y-0">
                {projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-4 border-b border-border last:border-b-0 group"
                    >
                        <div className="flex items-start justify-between mb-1.5">
                            <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {project.title}
                                <ArrowUpRight className="inline-block w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] font-mono text-muted-foreground/70 px-2 py-0.5 rounded border border-border"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
