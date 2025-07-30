import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-primary-foreground py-12 relative">
      {/* Scroll to Top Button */}
      <Button onClick={scrollToTop} size="sm" className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent hover:bg-accent-dark text-accent-foreground rounded-full p-3 shadow-large transition-all duration-300 hover:scale-110">
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo and Name */}
          <div className="mb-8 flex flex-col items-center">
            <Logo size="lg" className="mb-4" />
            
            <p className="text-primary-foreground/80">
              Full Stack Developer | Web Designer | Data Enthusiast
            </p>
          </div>

          {/* Quote */}
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-primary-foreground/90 italic text-lg leading-relaxed">
              "Turning code into creativity - building digital experiences with passion."
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map(item => <button key={item} onClick={() => {
            const element = document.querySelector(`#${item.toLowerCase()}`);
            if (element) element.scrollIntoView({
              behavior: 'smooth'
            });
          }} className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 font-medium">
                {item}
              </button>)}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-primary-foreground/30 mx-auto mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-primary-foreground/70">
            <p>© {currentYear} Jasmin Jamadar. All rights reserved.</p>
            <div className="hidden sm:block">•</div>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-accent" /> and React
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-primary-foreground/60 text-sm">
            <p>Available for freelance projects and full-time opportunities</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;