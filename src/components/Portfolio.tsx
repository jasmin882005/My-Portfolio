import { ExternalLink, Github, Sparkles, Star, Zap, Code2, Palette, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('portfolio');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);
  const projects = [
    {
      title: "Edunest",
      role: "Full Stack Developer",
      technologies: ["CSS", "JavaScript", "Python", "PHP"],
      description: "An educational platform streamlining learning through an intuitive interface and database-driven structure.",
      features: [
        "Responsive user interface design",
        "Database-driven architecture", 
        "Interactive learning modules",
        "User authentication system"
      ],
      color: "from-blue-500 to-cyan-500",
      icon: <Code2 className="h-6 w-6" />,
      status: "Live Project",
      completion: "100%"
    },
    {
      title: "Vision Craft",
      role: "Developer (Frontend & Backend)",
      technologies: ["CSS", "JavaScript", "Python", "PHP"],
      description: "A modern creative portfolio and project tracker focused on sleek design and full functionality.",
      features: [
        "Modern portfolio showcase",
        "Project tracking system",
        "Sleek responsive design",
        "Full-stack implementation"
      ],
      color: "from-purple-500 to-pink-500",
      icon: <Palette className="h-6 w-6" />,
      status: "In Development",
      completion: "85%"
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-primary-light/8 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }}></div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Code2 className="absolute top-32 left-16 w-5 h-5 text-primary/20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <Database className="absolute bottom-32 right-16 w-4 h-4 text-accent/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute top-2/3 left-1/3 w-3 h-3 text-primary-light/25 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Portfolio Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-primary font-medium text-sm">FEATURED WORK</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              My
            </span>{' '}
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent relative">
              Portfolio
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 blur-2xl -z-10"></div>
            </span>
          </h2>
          
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent w-24"></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent w-24"></div>
          </div>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Showcasing key projects that demonstrate my expertise in full-stack development and creative problem-solving
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group relative bg-gradient-to-br from-card via-card to-card/50 border-0 shadow-soft hover:shadow-xl transition-all duration-700 hover:scale-105 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated Project Header */}
              <div className={`relative h-3 bg-gradient-to-r ${project.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/3 animate-pulse group-hover:animate-none group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Background Effects */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-20 transition-all duration-700">
                <div className={`w-24 h-24 bg-gradient-to-br ${project.color} rounded-full blur-2xl`}></div>
              </div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl transition-all duration-500 group-hover:scale-110 ${hoveredProject === index ? 'bg-gradient-to-br ' + project.color.replace('to-', 'to-transparent from-') + ' opacity-20' : 'bg-primary/10'}`}>
                      <div className={`transition-colors duration-300 ${hoveredProject === index ? 'text-foreground' : 'text-primary'}`}>
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-primary font-semibold text-sm flex items-center gap-2">
                        {project.role}
                        <span className="px-2 py-1 bg-accent/20 text-accent-dark text-xs rounded-full">
                          {project.status}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Project Completion</span>
                    <span className="text-sm font-semibold text-primary">{project.completion}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${project.color} transition-all duration-1000 group-hover:animate-pulse`}
                      style={{ width: project.completion }}
                    ></div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                {/* Enhanced Description */}
                <div className="relative">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Enhanced Technologies */}
                <div>
                  <h4 className="font-bold text-card-foreground mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/20 text-primary text-sm font-semibold rounded-full border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 ${hoveredProject === index ? 'animate-pulse' : ''}`}
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Key Features */}
                <div>
                  <h4 className="font-bold text-card-foreground mb-4 flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`flex items-center gap-3 text-muted-foreground transition-all duration-300 ${hoveredProject === index ? 'translate-x-2' : ''}`} style={{ transitionDelay: `${featureIndex * 0.1}s` }}>
                        <div className="w-2 h-2 bg-gradient-to-r from-accent to-accent-dark rounded-full flex-shrink-0 animate-pulse"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-4 pt-6">
                  <Button 
                    className={`flex-1 bg-gradient-to-r ${project.color} text-white font-bold py-3 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 group/btn overflow-hidden relative`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">View Details</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className={`flex-1 border-2 hover:bg-gradient-to-r ${project.color} hover:text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:border-transparent`}
                  >
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <Card className="relative bg-gradient-to-br from-card via-card to-primary/5 border-0 shadow-large max-w-4xl mx-auto overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-50"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <CardContent className="p-12 text-center relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Ready to collaborate?
                </span>
              </h3>
              
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's create something amazing together that makes a real impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground px-10 py-4 rounded-full font-bold shadow-large transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden relative"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-3">
                    Get In Touch
                    <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="group border-2 border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground px-10 py-4 rounded-full font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-3">
                    View All Projects
                    <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;