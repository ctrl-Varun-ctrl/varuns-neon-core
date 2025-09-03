import { Code, Cloud, Zap, Link, Brain, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "End-to-end application development using modern Java, React, and cloud technologies. From concept to deployment with scalable architecture.",
      features: ["Custom Web Applications", "API Development", "Database Design", "UI/UX Implementation"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps Consulting",
      description: "Modernize your infrastructure with AWS, Azure, and GCP. Implement CI/CD pipelines, containerization, and cloud-native solutions.",
      features: ["Cloud Migration", "Kubernetes Orchestration", "Infrastructure as Code", "CI/CD Pipelines"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "System Performance & Optimization",
      description: "Enhance application performance, optimize database queries, and implement caching strategies for enterprise-scale systems.",
      features: ["Performance Tuning", "Database Optimization", "Caching Solutions", "Load Testing"]
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "API & Integration Services",
      description: "Design and implement robust APIs, microservices architecture, and third-party integrations for seamless data flow.",
      features: ["RESTful APIs", "Microservices Design", "System Integration", "API Documentation"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Enablement & Training",
      description: "Help organizations adopt AI/ML technologies, implement intelligent features, and train teams on modern AI tools and practices.",
      features: ["AI Strategy", "ML Model Integration", "Team Training", "Technology Assessment"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Technical Training & Coaching",
      description: "Provide technical mentoring, code reviews, and team training on best practices, clean code, and modern development methodologies.",
      features: ["Code Reviews", "Technical Mentoring", "Best Practices Training", "Team Leadership"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="geometric-divider max-w-xs mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card group h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-orbitron font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary glow-cyan"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to discuss your next project?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-hero"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;