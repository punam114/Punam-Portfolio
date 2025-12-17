import { useRef } from 'react';
import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Turning complex challenges into elegant solutions',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams to deliver exceptional results',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter uppercase">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="h-2 w-40 bg-primary mx-auto border-4 border-foreground" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I am a dedicated software developer with a strong foundation in modern web technologies. My journey in programming began with a curiosity for creating digital solutions that make a difference.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Currently pursuing my Masters in Computer Application from YBN University, I combine academic knowledge with practical experience to build innovative web applications. I specialize in creating responsive, accessible, and user-friendly interfaces.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest industry trends.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-foreground/70">Location</span>
                  <span className="font-semibold">Bokaro, Jharkhand</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-foreground/70">Education</span>
                  <span className="font-semibold">Masters in Computer Application</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-foreground/70">Projects</span>
                  <span className="font-semibold">4+ Completed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Availability</span>
                  <span className="font-semibold text-primary">Open to work</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg p-6 rounded-xl text-center group hover:scale-105 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;