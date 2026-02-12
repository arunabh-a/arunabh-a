import { SKILLS } from "@/lib/constants";

const skills = SKILLS;

const SkillsSection = () => {
    return (
        <section id="skills">
            <h2 className="text-sm font-semibold text-foreground font-mono mb-4">
                Skills
            </h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill.name}
                        className="text-xs font-mono text-muted-foreground px-3 py-1.5 rounded-md border border-border bg-secondary hover:bg-gray-400 pointer-events-none select-none"
                    >
                        <img src={skill.icon} alt={skill.name} className="inline-block w-4 h-4 mr-2" />
                        {skill.name}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
