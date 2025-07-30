import { Code, Database, Globe, Wrench, Zap, Sparkles, Star, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      description: "Building beautiful, responsive user interfaces"
    },
    {
      title: "Backend",
      icon: <Code className="h-6 w-6" />,
      skills: ["PHP", "Java"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      description: "Server-side development and API creation"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Linux", "MySQL", "Data Analysis"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      description: "Development environment and data management"
    },
    {
      title: "Concepts",
      icon: <Database className="h-6 w-6" />,
      skills: ["Object-Oriented Programming (OOP)", "Full Stack Development"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      description: "Core programming principles and methodologies"
    },
  ];

  const services = [
    {
      title: "Web Development",
      description: "Full-stack web application development with clean, responsive designs.",
      icon: "/lovable-uploads/91066c7c-a18a-4ada-a2d6-2663930ff1c1.png",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "UI/UX Design",
      description: "Building modern and user-friendly interfaces.",
      icon: "/lovable-uploads/6356e814-6baa-46ba-ab29-101d5b8684cd.png",
      features: ["User Research", "Wireframing", "Prototyping"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Data Analysis",
      description: "Insightful analytics using open-source tools and custom dashboards.",
      icon: "/lovable-uploads/ec0e4f85-7bd3-4df8-9c2d-1758f8f16f28.png",
      features: ["Data Visualization", "Statistical Analysis", "Reporting"],
      color: "from-green-400 to-green-600"
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-10 w-48 h-48 bg-primary-light/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-20 right-1/3 w-4 h-4 text-accent/30 animate-pulse" style={{ animationDelay: '1s' }} />
        <Zap className="absolute bottom-20 left-1/3 w-5 h-5 text-primary/40 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <Sparkles className="absolute top-1/3 right-20 w-3 h-3 text-accent/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Skills Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Trophy className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-primary font-medium text-sm">TECHNICAL EXPERTISE</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              My
            </span>{' '}
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent relative">
              Skills
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 blur-2xl -z-10"></div>
            </span>
          </h2>
          
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent w-20"></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent w-20"></div>
          </div>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through continuous learning and hands-on experience in modern technologies
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`group relative bg-gradient-to-br from-card via-card to-card/50 border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} opacity-70`}></div>
              
              {/* Floating Icon Effect */}
              <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full blur-xl`}></div>
              </div>

              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`mx-auto mb-4 p-4 rounded-2xl w-fit transition-all duration-500 group-hover:scale-110 ${hoveredSkill === index ? 'bg-gradient-to-br ' + category.color.replace('to-', 'to-transparent from-') + ' opacity-20' : 'bg-primary/10'}`}>
                  <div className={`transition-colors duration-300 ${hoveredSkill === index ? 'text-foreground' : 'text-primary'}`}>
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 relative z-10">
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className={`relative text-center py-3 px-4 bg-muted/50 backdrop-blur-sm rounded-xl text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-transparent hover:border-primary/20 ${hoveredSkill === index ? 'translate-x-2' : ''}`}
                      style={{ transitionDelay: `${skillIndex * 0.1}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      <span className="relative z-10">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Services Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-accent-dark font-medium text-sm">WHAT I OFFER</span>
          </div>
          
          <h3 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Services &
            </span>{' '}
            <span className="bg-gradient-to-r from-accent via-accent-dark to-accent bg-clip-text text-transparent relative">
              Solutions
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent-dark/20 to-accent/20 blur-2xl -z-10"></div>
            </span>
          </h3>
          
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-16"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-16"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group relative bg-gradient-to-br from-card via-card to-card/50 border-0 shadow-soft hover:shadow-xl transition-all duration-500 hover:scale-105 text-center overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.color} opacity-70`}></div>
              
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-30 transition-all duration-700">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full blur-2xl`}></div>
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="mb-6 relative">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-500 relative z-10 flex justify-center">
                    <img 
                      src={service.icon} 
                      alt={`${service.title} icon`}
                      className="w-16 h-16 object-contain filter brightness-0 saturate-100 group-hover:brightness-100 group-hover:saturate-100 transition-all duration-500"
                      style={{
                        filter: 'invert(0.5) sepia(1) saturate(5) hue-rotate(180deg) brightness(1.2)',
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full w-20 h-20 mx-auto blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
                
                <h4 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {service.description}
                </p>
                
                {/* Feature Tags */}
                <div className="flex flex-wrap justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700" style={{ transitionDelay: '0.2s' }}>
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;