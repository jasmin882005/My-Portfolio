import { ArrowRight, Download, Star, Sparkles, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 bg-hero-gradient relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
        backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
        backgroundSize: '50px 50px'
      }}></div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/12 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/8 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Secondary Floating Elements */}
        <div className="absolute top-32 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-bounce" style={{
        animationDuration: '6s'
      }}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-bounce" style={{
        animationDuration: '8s',
        animationDelay: '1s'
      }}></div>
        
        {/* Parallax Mouse Effect */}
        <div className="absolute w-4 h-4 bg-accent/30 rounded-full blur-sm transition-all duration-300 ease-out" style={{
        left: mousePosition.x * 0.02 + 'px',
        top: mousePosition.y * 0.02 + 'px'
      }}></div>
        <div className="absolute w-2 h-2 bg-primary-light/40 rounded-full blur-sm transition-all duration-500 ease-out" style={{
        left: mousePosition.x * 0.01 + 100 + 'px',
        top: mousePosition.y * 0.01 + 50 + 'px'
      }}></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className={`absolute top-24 left-1/4 w-6 h-6 text-accent/30 transition-all duration-1000 ${isLoaded ? 'animate-bounce' : 'opacity-0'}`} style={{
        animationDelay: '0.5s',
        animationDuration: '4s'
      }} />
        <Zap className={`absolute top-1/3 right-1/4 w-5 h-5 text-primary-light/40 transition-all duration-1000 ${isLoaded ? 'animate-pulse' : 'opacity-0'}`} style={{
        animationDelay: '1s'
      }} />
        <Sparkles className={`absolute bottom-1/3 left-1/6 w-4 h-4 text-accent/40 transition-all duration-1000 ${isLoaded ? 'animate-bounce' : 'opacity-0'}`} style={{
        animationDelay: '1.5s',
        animationDuration: '5s'
      }} />
        <Star className={`absolute bottom-24 right-1/3 w-5 h-5 text-primary/30 transition-all duration-1000 ${isLoaded ? 'animate-pulse' : 'opacity-0'}`} style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-8">
              {/* Status Badge */}
              

              {/* Main Heading with Enhanced Typography */}
              <div className="relative mb-6">
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary-foreground via-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent animate-pulse">
                    Jasmin
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-accent via-accent-dark to-accent bg-clip-text text-transparent relative">
                    Jamadar
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-dark/20 to-accent/20 blur-2xl -z-10"></div>
                  </span>
                </h1>
                
                {/* Animated underline */}
                <div className="relative mt-2">
                  <div className="h-1 bg-gradient-to-r from-accent via-accent-dark to-accent rounded-full animate-pulse opacity-60"></div>
                  <div className="h-1 bg-gradient-to-r from-accent via-accent-dark to-accent rounded-full animate-pulse mt-1 w-3/4 opacity-40"></div>
                </div>
              </div>

              {/* Role Tags with Modern Design */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                {['Full Stack Developer', 'Web Designer', 'Data Enthusiast'].map((role, index) => <span key={index} className={`
                      px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 
                      rounded-full text-sm font-semibold text-primary-foreground/90 
                      transition-all duration-500 hover:scale-105 hover:bg-primary-foreground/20
                      ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `} style={{
                animationDelay: `${index * 0.2}s`
              }}>
                    {role}
                  </span>)}
              </div>

              {/* Enhanced Tagline */}
              <div className="relative mb-8">
                <p className="text-xl lg:text-2xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Turning <span className="text-accent font-semibold">code</span> into <span className="text-accent font-semibold">creativity</span>
                </p>
                <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto lg:mx-0 leading-relaxed mt-2">
                  Building digital experiences with passion and precision
                </p>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button onClick={scrollToPortfolio} size="lg" className="group relative bg-accent hover:bg-accent-dark text-accent-foreground font-bold px-10 py-4 rounded-full shadow-large transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  View My Work
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button onClick={scrollToContact} variant="outline" size="lg" className="group relative border-2 border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground font-bold px-10 py-4 rounded-full backdrop-blur-sm bg-primary-foreground/5 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  Contact Me
                  <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Floating Stats/Badges */}
            <div className="flex justify-center lg:justify-start gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3+</div>
                <div className="text-sm text-primary-foreground/60">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2</div>
                <div className="text-sm text-primary-foreground/60">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2026</div>
                <div className="text-sm text-primary-foreground/60">Graduation</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative group">
              {/* Animated Ring */}
              <div className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 rounded-full border-2 border-accent/30 animate-spin" style={{
              animationDuration: '20s'
            }}></div>
              <div className="absolute inset-2 w-76 h-76 lg:w-92 lg:h-92 rounded-full border border-primary-light/20 animate-spin" style={{
              animationDuration: '15s',
              animationDirection: 'reverse'
            }}></div>
              
              {/* Enhanced Decorative Stars */}
              <div className="absolute -top-8 -left-8 w-10 h-10 text-accent animate-pulse">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div className="absolute inset-0 w-10 h-10 text-accent/50 blur-md">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-8 h-8 text-accent animate-bounce" style={{
              animationDelay: '1s',
              animationDuration: '3s'
            }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              <div className="absolute top-1/4 -right-4 w-6 h-6 text-primary-light/60 animate-pulse" style={{
              animationDelay: '2s'
            }}>
                <Sparkles className="w-full h-full" />
              </div>
              
              <div className="absolute bottom-1/4 -left-4 w-5 h-5 text-accent/60 animate-bounce" style={{
              animationDelay: '1.5s',
              animationDuration: '4s'
            }}>
                <Star className="w-full h-full" />
              </div>

              {/* Enhanced Profile Image Container */}
              <div className="relative z-10">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary-light to-accent rounded-full p-1 animate-pulse">
                  <div className="w-full h-full bg-primary rounded-full"></div>
                </div>
                
                {/* Main Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-card via-card to-secondary p-6 shadow-large group-hover:shadow-xl transition-all duration-500">
                  {/* Inner Image Container */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary-light via-primary to-primary-dark relative group-hover:scale-105 transition-transform duration-500">
                    {/* Profile Picture */}
                    <img 
                      src="/lovable-uploads/44ddb46c-34b1-4464-a71b-92f1ea84075f.png" 
                      alt="Jasmin Jamadar - Profile Picture" 
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                {/* Enhanced Floating Badges */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 space-y-2">
                  {/* Main Badge */}
                  <div className="bg-gradient-to-r from-accent via-accent-dark to-accent text-accent-foreground px-6 py-3 rounded-full shadow-large backdrop-blur-sm font-bold text-sm animate-pulse">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Available for Projects
                    </div>
                  </div>
                  
                  {/* Secondary Info */}
                  <div className="flex justify-center gap-2">
                    
                    
                  </div>
                </div>

                {/* Floating Skill Icons */}
                <div className="absolute top-12 right-8 space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="bg-card/90 backdrop-blur-sm p-2 rounded-full shadow-medium hover:scale-110 transition-transform duration-300">
                    <Code className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-card/90 backdrop-blur-sm p-2 rounded-full shadow-medium hover:scale-110 transition-transform duration-300" style={{
                  animationDelay: '0.1s'
                }}>
                    <Zap className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;