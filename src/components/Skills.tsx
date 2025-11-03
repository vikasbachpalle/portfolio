import { Code2, Database, Layout, GitBranch } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: <Layout className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React"],
      color: "text-primary",
    },
    {
      title: "Back-End",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Python", "Django"],
      color: "text-accent",
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "SQLite3"],
      color: "text-primary",
    },
    {
      title: "Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub"],
      color: "text-accent",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-sm uppercase tracking-wider text-primary mb-2">What I Bring</h2>
            <h3 className="text-3xl md:text-5xl font-bold">
              My <span className="text-gradient-primary">Skills</span>
            </h3>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover-lift group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div className={`${category.color} group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">{category.title}</h4>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Skills Info */}
          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                Continuously expanding my skill set through hands-on projects and staying updated with the latest
                industry trends. I believe in writing clean, maintainable code and following best practices in software
                development.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
