import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Dr. Babasaheb Ambedkar Technological University",
      location: "Sandipani Technical Campus, Latur",
      year: "2025",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      degree: "Diploma in Civil Engineering",
      institution: "Puranmal Lahoti Government Polytechnic, Latur",
      location: "MSBTE",
      year: "2022",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-sm uppercase tracking-wider text-primary mb-2">Get To Know</h2>
            <h3 className="text-3xl md:text-5xl font-bold">
              About <span className="text-gradient-primary">Me</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Bio */}
            <div className="space-y-6 animate-slide-in">
              <Card className="p-6 bg-card border-border hover-lift">
                <h4 className="text-xl font-semibold mb-4 text-primary">Who I Am</h4>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a <span className="text-foreground font-semibold">Full Stack Software Developer</span> with a
                    passion for creating elegant, efficient, and scalable web solutions. My expertise spans both
                    front-end and back-end technologies, allowing me to build complete applications from concept to
                    deployment.
                  </p>
                  <p>
                    With experience in leading cross-functional teams, I understand the importance of clean code,
                    collaborative development, and delivering projects that exceed expectations. I'm constantly learning
                    and adapting to new technologies to stay at the forefront of web development.
                  </p>
                  <p>
                    My approach combines technical excellence with user-focused design, ensuring that every application
                    I build is not only functional but also intuitive and enjoyable to use.
                  </p>
                </div>
              </Card>
            </div>

            {/* Right - Education */}
            <div className="space-y-6 animate-slide-in">
              <h4 className="text-xl font-semibold mb-4 text-primary">Education</h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary/50 transition-all hover-lift group"
                  >
                    <div className="flex gap-4">
                      <div className="mt-1 text-primary group-hover:scale-110 transition-transform">{edu.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold text-foreground">{edu.degree}</h5>
                          <span className="text-sm text-primary font-medium">{edu.year}</span>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground mt-1">{edu.location}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
