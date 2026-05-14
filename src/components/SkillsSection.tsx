import { SKILLS } from "@/lib/constants";

const TYPE_ORDER: Record<string, number> = {
    Cloud: 0,
    Language: 1,
    Backend: 2,
    Frontend: 3,
    DevOps: 4,
    Database: 5,
    Mobile: 6,
    Tools: 7,
};

const skills = [...SKILLS].sort(
    (a, b) => (TYPE_ORDER[a.type] ?? 99) - (TYPE_ORDER[b.type] ?? 99)
);

const getSkillStyle = (type: string) => {
    switch (type) {
        case "Cloud":
            return "hover:bg-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400";
        case "DevOps":
            return "hover:bg-gray-500/30 hover:text-gray-600 dark:hover:text-gray-400";
        case "Tools":
            return "hover:bg-yellow-500/30 hover:text-yellow-700 dark:hover:text-yellow-400";
        case "Database":
            return "hover:bg-green-500/30 hover:text-green-600 dark:hover:text-green-400";
        case "Backend":
            return "hover:bg-purple-500/30 hover:text-purple-600 dark:hover:text-purple-400 ";
        case "Language":
            return "hover:bg-red-500/30 hover:text-red-600 dark:hover:text-red-400 ";
        case "Frontend":
            return "hover:bg-cyan-500/30 hover:text-cyan-600 dark:hover:text-cyan-400 ";
        case "Mobile":
            return "hover:bg-indigo-500/30 hover:text-indigo-600 dark:hover:text-indigo-400 ";
        default:
            return "bg-secondary hover:bg-secondary/80 text-muted-foreground border-border";
    }
};

const SkillsSection = () => {

    return (
        <section id="skills">
            <h2 className="text-sm font-semibold text-foreground font-mono mb-1">
                Skills
            </h2>
            <p className="text-xs text-muted-foreground mb-4">
                I work with these
            </p>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill.name}
                        className={`text-xs font-mono px-3 py-1.5 rounded-md border select-none ${getSkillStyle(skill.type)}`}
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
