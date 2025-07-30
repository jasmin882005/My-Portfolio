import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Portfolio',
    href: '#portfolio'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-[10px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="navbar" className="cursor-pointer" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                {item.name}
              </button>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium">
                {item.name}
              </button>)}
          </div>}
      </div>
    </nav>;
};
export default Navigation;