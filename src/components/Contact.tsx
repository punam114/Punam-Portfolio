import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:punamprajapati1012@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\\nEmail: ${email}\\n\\nMessage:\\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
    toast.success('Opening your email client...');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'punamprajapati1012@gmail.com',
      href: 'mailto:punamprajapati1012@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9117995307',
      href: 'tel:+919117995307',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bokaro, Jharkhand',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter uppercase">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="h-2 w-40 bg-primary mx-auto border-4 border-foreground" />
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Let's talk!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-black mb-6 uppercase">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card border-3 border-foreground"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card border-3 border-foreground"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-card border-3 border-foreground"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-card border-3 border-foreground resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-black mb-6 uppercase">Contact Info</h3>
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="brutal-card p-6 flex items-center gap-4 group mb-4 transition-transform duration-300"
                >
                  <div className="w-14 h-14 bg-primary flex items-center justify-center border-3 border-foreground">
                    <info.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase text-sm">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}

              <div className="brutal-card p-6 bg-primary/5 transition-transform duration-300">
                <h4 className="font-black uppercase mb-3 text-lg">Availability</h4>
                <p className="text-muted-foreground mb-4">
                  Currently available for freelance work and full-time opportunities!
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary animate-pulse border border-foreground" />
                  <span className="text-primary font-bold uppercase text-sm">Open for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;