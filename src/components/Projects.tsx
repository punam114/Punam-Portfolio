import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);

  const projects = [
    {
      title: 'Home Improvement Tracker',
      description: 'A comprehensive web application for tracking and managing home renovation projects with budget monitoring, progress tracking, and task management features.',
      tags: ['HTML5','CSS3','JavaScript'],
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop',
      github: 'https://github.com/punam114/Home-Improvement-Tracker',
      demo: 'https://home-improvement-tracker.netlify.app/',
    },
    {
      title: 'Recipe App',
      description: 'Modern recipe discovery platform where users can explore, save, and share their favorite recipes with detailed ingredient lists and step-by-step cooking instructions.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      github: 'https://github.com/punam114/Recipe-App',
      demo: 'https://recipe-app-sigma-sooty.vercel.app/',
    },
    {
      title: 'Lenskart Eyewear Store',
      description: 'Full-featured e-commerce eyewear website like Lenskart, with product catalog, shopping cart functionality, user authentication, and responsive design for optimal user experience.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=600&fit=crop',
      github: 'https://github.com/punamh/Project/tree/main/LensKart/Project/Lenskart',
      demo: 'https://6658b5dc043c344859049415--inquisitive-daffodil-b3afeb.netlify.app/',
    },
    {
      title: 'Dell Tech Store',
      description: 'Responsive computer hardware e-commerce website like Dell, featuring modern UI design, product showcase, interactive elements, and optimized performance across all devices.',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5'],
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop',
      github: 'https://github.com/punamh/Project-1/tree/main/Dell',
      demo: 'https://project-1-mu-three.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter uppercase">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="h-2 w-40 bg-primary mx-auto border-4 border-foreground" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg overflow-hidden group apple-card w-full max-w-sm h-[600px] flex flex-col rounded-xl"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                </div>

                <div className="p-6 bg-card flex-1 flex flex-col">
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm flex-1 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-muted text-foreground border-2 border-foreground font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-3 border-foreground hover:bg-foreground hover:text-background font-bold uppercase"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-3 border-foreground font-bold uppercase"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;