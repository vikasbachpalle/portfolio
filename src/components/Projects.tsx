import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Dashboard Generator",
      description:
        "An intelligent dashboard application that automatically creates visual reports and insights using uploaded data. Features AI summarization with a sleek cyberpunk-themed interface.",
      techStack: ["Streamlit", "Plotly", "Python", "AI/ML"],
      link: "https://github.com/vikasbachpalle",
      github: "https://github.com/vikasbachpalle",
    },
    {
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce platform with dynamic product listings, shopping cart management, and secure checkout process. Built with modern web technologies.",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://github.com/vikasbachpalle",
      github: "https://github.com/vikasbachpalle",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-sm uppercase tracking-wider text-primary mb-2">My Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold">
              Featured <span className="text-gradient-primary">Projects</span>
            </h3>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all hover-lift group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-6xl font-bold text-primary/20 group-hover:scale-110 transition-transform">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="default" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
