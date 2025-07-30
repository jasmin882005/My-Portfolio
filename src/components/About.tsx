import { GraduationCap, Briefcase, Heart, Award, Target, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);
  const experiences = [
    {
      title: "Internship at Webel",
      type: "Professional Experience",
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      description: "Gained hands-on experience in web development and project management"
    },
    {
      title: "Internship at Dataspace Academy",
      type: "Learning & Development",
      icon: <Award className="h-5 w-5" />,
      color: "from-green-500 to-emerald-500",
      description: "Enhanced skills in data analysis and modern development practices"
    },
    {
      title: "Internship at Jayadhi Limited",
      type: "Technical Development",
      icon: <Target className="h-5 w-5" />,
      color: "from-purple-500 to-violet-500",
      description: "Focused on full-stack development and technical problem-solving"
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-primary font-medium text-sm">GETTING TO KNOW ME</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              About
            </span>{' '}
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent relative">
              Me
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 blur-2xl -z-10"></div>
            </span>
          </h2>
          
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent w-16"></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent w-16"></div>
          </div>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate about technology and innovation, crafting digital solutions with creativity and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {/* Enhanced Bio */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>
              <div className="pl-8 space-y-6">
                <div className="prose prose-lg">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Hi, I'm <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent font-bold">Jasmin Jamadar</span>, 
                    a passionate BCA student from The Neotia University (2023-2026). My world revolves around 
                    technology and creativity, with a growing expertise in full stack development, 
                    data analysis, and crafting exceptional digital experiences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    My journey in tech is fueled by <span className="text-accent font-semibold">curiosity</span> and 
                    <span className="text-accent font-semibold"> innovation</span>. I thrive on transforming 
                    complex challenges into elegant, user-friendly solutions that make a real impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Cards */}
            <div className="space-y-6">
              {/* Education Card */}
              <Card className="group bg-gradient-to-br from-card via-card to-secondary/50 border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-card-foreground text-lg mb-1">Education</h3>
                      <p className="text-muted-foreground font-medium">
                        Bachelor of Computer Applications
                      </p>
                      <p className="text-sm text-primary font-semibold">
                        The Neotia University (2023-2026)
                      </p>
                    </div>
                    <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Award className="h-5 w-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interests Card */}
              <Card className="group bg-gradient-to-br from-card via-card to-accent/10 border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-6 w-6 text-accent-dark" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-card-foreground text-lg mb-1">Passions</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {['Technology', 'Web Development', 'Data Analysis', 'Cooking'].map((interest, idx) => (
                          <span key={idx} className="px-3 py-1 bg-accent/10 text-accent-dark text-sm font-medium rounded-full border border-accent/20">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Experience Section */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Professional
                </span>{' '}
                <span className="text-primary">Journey</span>
              </h3>
              <p className="text-muted-foreground text-lg">Building expertise through diverse experiences</p>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className={`group relative bg-gradient-to-br from-card to-card/50 border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:scale-105 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`}></div>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} opacity-60`}></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className={`p-4 bg-gradient-to-br ${exp.color.replace('to-', 'to-transparent from-')} opacity-20 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-foreground">
                          {exp.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-card-foreground text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-semibold text-sm mb-3">
                          {exp.type}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                      <div className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                        <Sparkles className="h-5 w-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Quote Section */}
            <div className="relative mt-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-xl"></div>
              <Card className="relative bg-gradient-to-br from-card via-card to-secondary/30 border border-primary/10 shadow-large">
                <CardContent className="p-8 text-center">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💡</span>
                    </div>
                  </div>
                  <blockquote className="text-lg italic text-muted-foreground leading-relaxed mb-4">
                    "I believe in continuous learning and pushing boundaries. Every project 
                    is an opportunity to grow and create something meaningful that makes a 
                    positive impact in the digital world."
                  </blockquote>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-semibold text-primary">Jasmin Jamadar</span>
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;