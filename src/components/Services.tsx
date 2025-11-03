import { Code, Palette, Database as DatabaseIcon, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Web Development",
      description: "Building responsive and scalable web applications using modern frameworks and best practices.",
      features: ["React & Django", "RESTful APIs", "Responsive Design"],
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "API Integration",
      description: "Connecting front-end interfaces with secure, fast, and reliable backend APIs.",
      features: ["REST APIs", "Third-party Integration", "Data Synchronization"],
    },
    {
      icon: <DatabaseIcon className="w-8 h-8" />,
      title: "Database Design & Management",
      description: "Efficient schema design and query optimization for optimal performance.",
      features: ["MySQL & SQLite3", "Schema Design", "Query Optimization"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI Implementation",
      description: "Creating clean, user-friendly interfaces with responsive and modern design principles.",
      features: ["Modern UI/UX", "Mobile-First", "Accessibility"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-sm uppercase tracking-wider text-primary mb-2">What I Offer</h2>
            <h3 className="text-3xl md:text-5xl font-bold">
              My <span className="text-gradient-primary">Services</span>
            </h3>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover-lift group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110">
                    {service.icon}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-accent"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
