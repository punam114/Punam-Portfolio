import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 uppercase tracking-wider">
            PUNAM KUMARI
          </h3>
          <p className="text-foreground mb-6 font-bold uppercase tracking-wide">
            Software Developer passionate about creating innovative web solutions.
          </p>
          <div className="flex gap-4 justify-center">
            {[
              { icon: Github, href: 'https://github.com/punam114/' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/punam-prajapati-44795b364/' },
              { icon: Mail, href: 'mailto:punamprajapati1012@gmail.com' },
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-4 border-foreground bg-background flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-background transition-all hover:scale-110 hover:rotate-3"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t-4 border-foreground text-center text-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="text-primary" size={16} fill="currentColor" /> by <span className="text-primary font-bold uppercase tracking-wide">PUNAM KUMARI</span>
          </p>
          <p className="mt-2">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;