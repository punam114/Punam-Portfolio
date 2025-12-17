import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: '/skills-icons/react.svg' },
        { name: 'JavaScript', icon: '/skills-icons/javascript.svg' },
        { name: 'TypeScript', icon: '/skills-icons/typescript.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'HTML5', icon: '/skills-icons/html5.svg' },
        { name: 'CSS3', icon: '/skills-icons/css3.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      ],
      color: 'from-primary to-accent',
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: '/skills-icons/nodejs.svg' },
        { name: 'Express.js', icon: '/skills-icons/express.svg' },
        { name: 'MongoDB', icon: '/skills-icons/mongodb.svg' },
        { name: 'Firebase', icon: '/skills-icons/firebase.svg' },
        { name: 'Redis', icon: '/skills-icons/redis.svg' },
        { name: 'RESTful API', icon: '/skills-icons/restful-api.svg' },
        { name: 'API Design & Integration', icon: '/skills-icons/api-design.svg' },
      ],
      color: 'from-secondary to-primary',
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: '/skills-icons/git.svg' },
        { name: 'GitHub', icon: '/skills-icons/github.svg' },
        { name: 'VS Code', icon: '/skills-icons/vscode.svg' },
        { name: 'Version Control', icon: '/skills-icons/version-control.svg' },
        { name: 'Problem Solving', icon: '/skills-icons/problem-solving.svg' },
      ],
      color: 'from-accent to-secondary',
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter uppercase">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <div className="h-2 w-40 bg-primary mx-auto border-4 border-foreground" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg p-6 rounded-xl"
              >
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-foreground">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-4 bg-muted/20 rounded-lg border border-foreground/10 hover:border-primary/50 apple-card hover:scale-105 transition-transform"
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-12 h-12 mb-2 filter drop-shadow-lg"
                      />
                      <span className="text-sm font-medium text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;