import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div className="font-orbitron font-bold text-2xl text-gradient">
            Varun Venkatapuram
          </div>

          {/* Quote */}
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground italic text-sm">
              "Building the future, one line of code at a time"
            </p>
          </div>

          {/* Fun tagline */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart size={16} className="text-primary animate-glow-pulse" />
            <span>and</span>
            <Coffee size={16} className="text-secondary" />
            <span>using</span>
            <Code size={16} className="text-primary" />
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground pt-6 border-t border-border/50">
            <p>© {new Date().getFullYear()} Varun Venkatapuram. All rights reserved.</p>
            <p className="mt-1">Crafted with modern technologies and attention to detail.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;