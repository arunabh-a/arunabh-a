interface Education {
  school: string;
  degree: string;
  period: string;
  href: string;
}

const education: Education[] = [
  { school: "Buildspace", degree: "s3, s4, sf1, s5", period: "2023 - 2024", href: "https://buildspace.so" },
  { school: "University of Waterloo", degree: "Bachelor's in Computer Science (BCS)", period: "2016 - 2021", href: "https://uwaterloo.ca" },
  { school: "Wilfrid Laurier University", degree: "Bachelor's in Business Administration (BBA)", period: "2016 - 2021", href: "https://wlu.ca" },
  { school: "International Baccalaureate", degree: "IB Diploma", period: "2012 - 2016", href: "https://ibo.org" },
];

const EducationSection = () => {
  return (
    <section id="education">
      <h2 className="text-sm font-semibold text-foreground font-mono mb-6">Education</h2>
      <div className="space-y-0">
        {education.map((edu) => (
          <a
            key={edu.school}
            href={edu.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-baseline justify-between py-3 border-b border-border last:border-b-0 group"
          >
            <div>
              <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{edu.school}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{edu.degree}</p>
            </div>
            <span className="text-xs text-muted-foreground font-mono whitespace-nowrap ml-4">{edu.period}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
