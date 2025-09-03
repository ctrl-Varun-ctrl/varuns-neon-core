import { ArrowRight, Download } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.jpg';
const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolio = document.getElementById('portfolio');
    if (portfolio) {
      portfolio.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-primary/30 rounded-lg animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-16 h-16 border-2 border-secondary/30 rounded-full animate-float" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/2 right-1/6 w-12 h-12 border-2 border-primary/20 rotate-45 animate-float" style={{
      animationDelay: '2s'
    }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="mx-auto w-48 h-48 rounded-full overflow-hidden glow-cyan animate-fade-in-up">
            <img src={profilePicture} alt="Varun Venkatapuram - Full Stack Java Developer" className="w-full h-full object-cover" />
          </div>

          {/* Name and Title */}
          <div className="space-y-4 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            <h1 className="text-5xl md:text-7xl font-orbitron font-black tracking-wide">
              <span className="text-gradient">Varun</span>
              <br />
              <span className="text-neutral-600 font-bold">Varun Venkatapuram</span>
            </h1>
            <p className="text-xl md:text-2xl font-exo text-primary font-semibold tracking-wide">Full Stack Java Developer </p>
          </div>

          {/* Tagline */}
          <div className="max-w-3xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Building scalable systems, enabling AI adoption, and solving complex problems with clean code.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            <button onClick={scrollToPortfolio} className="btn-hero flex items-center gap-3">
              View Portfolio
              <ArrowRight size={20} />
            </button>
            <button onClick={scrollToContact} className="btn-hero-outline flex items-center gap-3">
              Get in Touch
            </button>
            <button className="btn-hero-outline flex items-center gap-3">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          {/* Tech Stack Preview */}
          <div className="pt-12 animate-fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
            <p className="text-sm text-muted-foreground mb-4 font-exo">Specialized in</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Java', 'Spring Boot', 'React', 'AWS', 'Kubernetes', 'AI/ML'].map((tech, index) => <span key={tech} className="skill-badge text-xs" style={{
              animationDelay: `${1 + index * 0.1}s`
            }}>
                  {tech}
                </span>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;