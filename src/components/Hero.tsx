import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(to right, #131313, #000000)' }}>
      <ThreeScene />
      
      {/* Profile Photo - Left Half - Hidden on mobile */}
      <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-start hidden md:flex">
        <motion.img 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="https://i.ibb.co/nNQq2xV7/Gemini-Generated-Image-dwkva7dwkva7dwkv.png" 
          alt="Punam Kumari" 
          className="w-[1000px] h-[1200px] object-cover object-top"
          style={{
            maskImage: 'linear-gradient(to right, black 0%, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 60%, transparent 100%)',
            objectPosition: 'center 10%',
            imageRendering: 'auto',
            filter: 'unsharp-mask(1px, 1px, 1) contrast(1.15) brightness(1.05)',
            transform: 'scale(1.01)'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex">
        {/* Left Half - Empty space for background image */}
        <div className="w-1/2 hidden md:block" />
        
        {/* Right Half - Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center min-h-screen py-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block mb-4"
          >
            <span className="text-primary text-lg font-mono">Hi, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05, x: 10 }}
            className="text-6xl md:text-8xl font-black mb-6 text-foreground tracking-tighter cursor-pointer select-none"
          >
            PUNAM<br/>
            <span className="text-primary">KUMARI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto font-bold uppercase tracking-wide"
          >
            Software Developer Building Modern Web Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-6 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider transition-all hover:translate-x-1 hover:translate-y-1"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-4 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all font-bold uppercase tracking-wider"
              onClick={() => {
                window.open('https://drive.google.com/file/d/1MPAahd4pw6PalK6_TMUYCE1MV01Vfyv1/view', '_blank');
                setTimeout(() => {
                  const link = document.createElement('a');
                  link.href = 'https://drive.google.com/uc?export=download&id=1MPAahd4pw6PalK6_TMUYCE1MV01Vfyv1';
                  link.download = 'PUNAM-KUMARI-Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }, 500);
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 justify-center"
          >
            {[
              { icon: Github, href: 'https://github.com/punam114/', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/punam-prajapati-44795b364/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:punamprajapati1012@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border-4 border-foreground bg-background hover:bg-primary hover:border-primary transition-all"
                aria-label={label}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;