import { GraduationCap, Code, Database, Cloud, Brain, Settings } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["Java", "JavaScript/TypeScript", "Node.js", "SQL", "Python"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "React", "Angular", "Redux Toolkit", "Tailwind", "Material-UI"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      skills: ["PostgreSQL", "Oracle", "MongoDB", "Cassandra", "Redis", "Memcached"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform", "CI/CD"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Architecture & Methodologies",
      skills: ["Microservices", "Event-driven systems", "DDD", "Agile", "TDD"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Other Expertise",
      skills: ["Okta", "AI/ML enablement", "Performance Engineering", "API Design"]
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="geometric-divider max-w-xs mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="service-card">
              <h3 className="text-2xl font-orbitron font-bold text-primary mb-4">Full Stack Developer</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With 7+ years of experience across finance, healthcare, and sustainability domains, 
                I specialize in building scalable, high-performance systems that solve complex business problems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My expertise spans the entire technology stack, from architecting microservices and 
                implementing cloud-native solutions to enabling AI adoption and optimizing system performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about clean code, innovative solutions, and mentoring teams to deliver 
                exceptional software that drives business value.
              </p>
            </div>

            {/* Education */}
            <div className="service-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-orbitron font-bold">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">MS in Computer Science</h4>
                <p className="text-primary font-medium">Saint Leo University, Florida</p>
                <p className="text-sm text-muted-foreground">December 2023</p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-bold text-center lg:text-left">
              Technical <span className="text-gradient">Expertise</span>
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title} 
                  className="service-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {category.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-badge text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;