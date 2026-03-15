import { SKILLS } from "@/lib/constants";

const skills = SKILLS;

const getSkillStyle = (type: string) => {
    switch (type) {
        case "Cloud":
            return "bg-blue-500/20 hover:bg-blue-500/30 text-blue-600 dark:text-blue-400 border-blue-500/30";
        case "DevOps":
            return "bg-green-500/20 hover:bg-green-500/30 text-green-600 dark:text-green-400 border-green-500/30";
        case "Tools":
            return "bg-gray-500/20 hover:bg-gray-500/30 text-gray-600 dark:text-gray-400 border-gray-500/30";
        case "Database":
            return "bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-700 dark:text-yellow-400 border-yellow-500/30";
        case "Backend":
            return "bg-purple-500/20 hover:bg-purple-500/30 text-purple-600 dark:text-purple-400 border-purple-500/30";
        case "Language":
            return "bg-red-500/20 hover:bg-red-500/30 text-red-600 dark:text-red-400 border-red-500/30";
        case "Frontend":
            return "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-600 dark:text-cyan-400 border-cyan-500/30";
        case "Mobile":
            return "bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 border-indigo-500/30";
        default:
            return "bg-secondary hover:bg-secondary/80 text-muted-foreground border-border";
    }
};

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
