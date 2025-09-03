import { ExternalLink, Github, Users, MessageCircle, Calendar, Target } from 'lucide-react';

const Portfolio = () => {
  const project = {
    title: "UniCircle",
    subtitle: "Where Campus Meets Connection",
    description: "A comprehensive networking platform designed specifically for students to form study groups, collaborate on projects, and unlock career opportunities. Built with modern technologies and a focus on user experience.",
    features: [
      {
        icon: <Users className="w-5 h-5" />,
        title: "Study Groups",
        description: "Form and join study groups based on courses, interests, and academic goals"
      },
      {
        icon: <MessageCircle className="w-5 h-5" />,
        title: "Real-time Collaboration",
        description: "Chat, share resources, and collaborate on projects in real-time"
      },
      {
        icon: <Calendar className="w-5 h-5" />,
        title: "Event Management",
        description: "Organize and participate in academic events, workshops, and networking sessions"
      },
      {
        icon: <Target className="w-5 h-5" />,
        title: "Career Opportunities",
        description: "Connect with industry professionals and discover internship and job opportunities"
      }
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Socket.io", "Tailwind CSS", "JWT Authentication", "AWS"],
    highlights: [
      "Real-time messaging system",
      "Advanced search and filtering",
      "Mobile-responsive design",
      "Secure user authentication",
      "Scalable cloud architecture"
    ]
  };

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Featured <span className="text-gradient">Project</span>
          </h2>
          <div className="geometric-divider max-w-xs mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Image/Mockup */}
          <div className="relative animate-fade-in-up">
            <div className="service-card p-8 text-center">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-background font-orbitron font-bold text-2xl glow-cyan">
                  UC
                </div>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-lg text-secondary font-semibold mb-4">{project.subtitle}</p>
              
              {/* Mockup Visual */}
              <div className="bg-muted/20 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="h-8 bg-primary/20 rounded"></div>
                  <div className="h-8 bg-secondary/20 rounded"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-muted-foreground/30 rounded w-3/4"></div>
                  <div className="h-4 bg-muted-foreground/30 rounded w-1/2"></div>
                  <div className="h-4 bg-muted-foreground/30 rounded w-5/6"></div>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="w-8 h-8 bg-primary/30 rounded-full"></div>
                  <div className="w-8 h-8 bg-secondary/30 rounded-full"></div>
                  <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <button className="btn-hero-outline flex items-center gap-2">
                  <ExternalLink size={18} />
                  Live Demo
                </button>
                <button className="btn-hero-outline flex items-center gap-2">
                  <Github size={18} />
                  Source Code
                </button>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Description */}
            <div className="service-card">
              <h3 className="text-xl font-orbitron font-bold text-primary mb-4">Project Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="service-card">
              <h3 className="text-xl font-orbitron font-bold text-primary mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="service-card">
              <h3 className="text-xl font-orbitron font-bold text-primary mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Highlights */}
            <div className="service-card">
              <h3 className="text-xl font-orbitron font-bold text-primary mb-4">Project Highlights</h3>
              <div className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary glow-cyan"></div>
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Projects Teaser */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="service-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-gradient mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm continuously working on innovative projects that showcase cutting-edge technologies 
              and solve real-world problems. Stay tuned for more exciting developments!
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero-outline"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;