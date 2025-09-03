import { CalendarDays, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Java Developer",
      company: "Republic Services",
      location: "Phoenix, AZ",
      period: "06/2024 – Present",
      description: "Leading development of enterprise-scale waste management solutions, implementing microservices architecture and optimizing system performance for sustainability initiatives.",
      technologies: ["Java", "Spring Boot", "AWS", "Kubernetes", "PostgreSQL"]
    },
    {
      title: "Java Full Stack Developer",
      company: "Centene Corporation",
      location: "Tampa, FL",
      period: "04/2023 – 06/2024",
      description: "Developed healthcare technology solutions, built responsive web applications, and implemented secure API integrations for patient data management systems.",
      technologies: ["Java", "React", "Angular", "Spring Boot", "Oracle", "Azure"]
    },
    {
      title: "Java Developer",
      company: "TIAA Financial Services",
      location: "Charlotte, NC",
      period: "06/2022 – 04/2023",
      description: "Architected financial services applications, implemented event-driven systems, and enhanced system security with Okta integration for retirement planning platforms.",
      technologies: ["Java", "Spring Boot", "Microservices", "Okta", "PostgreSQL", "Redis"]
    },
    {
      title: "Software Developer",
      company: "Comake IT Solutions",
      location: "Hyderabad, India",
      period: "04/2021 – 12/2021",
      description: "Developed custom software solutions, implemented CI/CD pipelines, and collaborated with cross-functional teams to deliver high-quality applications.",
      technologies: ["Java", "JavaScript", "Docker", "Jenkins", "MongoDB", "AWS"]
    },
    {
      title: "Junior Java Developer",
      company: "Genpact",
      location: "Hyderabad, India",
      period: "08/2019 – 04/2021",
      description: "Built enterprise applications, participated in code reviews, and contributed to system optimization initiatives for global clients.",
      technologies: ["Java", "Spring", "SQL", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Software Developer",
      company: "Berkadia Financial Services",
      location: "Hyderabad, India",
      period: "07/2017 – 08/2019",
      description: "Started career developing financial software solutions, learned industry best practices, and contributed to team success in agile development environments.",
      technologies: ["Java", "Spring Framework", "MySQL", "RESTful APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <div className="geometric-divider max-w-xs mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative flex gap-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Marker */}
                <div className="relative flex-shrink-0">
                  <div className="timeline-marker absolute left-2 md:left-6 transform -translate-x-1/2"></div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 service-card ml-8 md:ml-12">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-orbitron font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;