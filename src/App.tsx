/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, Facebook, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Projects", href: "#work" },
    { name: "The Studio", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-10 flex justify-between items-center bg-studio-cream/90 backdrop-blur-md border-b border-studio-dark/5">
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-serif font-bold tracking-tighter">VIDEC</span>
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40 hidden sm:block">Melaka — Malaysia</span>
      </div>
      
      <div className="hidden md:flex space-x-10">
        {links.map((link) => (
          <a key={link.name} href={link.href} className="text-[11px] uppercase tracking-widest font-semibold hover:text-studio-gold transition-colors">
            {link.name}
          </a>
        ))}
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-studio-dark/10 p-8 flex flex-col space-y-6 md:hidden shadow-xl"
        >
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-serif">
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative pt-32 pb-20 px-6 md:px-12 bg-studio-cream min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-text mb-6 block text-studio-gold">Playful Design // Serious Excellence</span>
            <h1 className="text-6xl md:text-[8vw] font-serif leading-[0.9] tracking-tighter mb-10">
              Design it. <br />
              Build it. <br />
              <span className="italic font-normal">Love it.</span>
            </h1>
            <p className="text-lg leading-relaxed opacity-70 max-w-lg mb-10">
              Videc is a reputable integrated design & build firm based in Melaka. 
              We bring ordinary spaces to life with flair, intelligence, and integrity.
            </p>
            <div className="flex gap-6">
              <a href="#work" className="bg-studio-dark text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-studio-gold transition-colors">
                View Portfolio
              </a>
              <a href="#contact" className="border border-studio-dark/20 text-studio-dark px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-studio-dark hover:text-white transition-all">
                Get Quotation
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative aspect-[4/5] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faeaa6?auto=format&fit=crop&q=80&w=1200" 
            alt="Interior Design" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 right-6 bg-studio-cream px-4 py-2 text-[10px] uppercase tracking-widest font-bold">
            Project: Nikko Yoryo
          </div>
        </motion.div>
      </div>
    </header>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-white border-t border-studio-dark/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="w-full md:w-1/2">
          <div className="aspect-square bg-studio-cream relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1541604193435-22287d32c2c2?auto=format&fit=crop&q=80&w=1200" 
              alt="Ron Lim - Founder" 
              className="w-full h-full object-cover grayscale transition-all hover:grayscale-0"
            />
            <div className="absolute top-0 left-0 p-8">
              <span className="label-text">The Founder</span>
              <h3 className="text-3xl font-serif mt-2">Ron Lim</h3>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <span className="label-text text-studio-gold">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tighter leading-tight">
            Reputable Integrated <span className="italic">Design & Build</span> Practice.
          </h2>
          <p className="text-base leading-relaxed opacity-70">
            Founded by Ron Lim, Videc has grown into a distinctive interior design firm completed projects across Peninsular Malaysia. 
            We pride ourselves on our multifaceted team's ability to create spaces brimming with personality.
          </p>
          <p className="text-base leading-relaxed opacity-70">
            Great design is felt before it is seen. We combine playful design thinking with rigorous project management to ensure every project is built to plan—within time, cost, and quality.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-studio-dark/10">
            <div>
              <p className="text-3xl font-serif leading-none mb-2">100+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-serif leading-none mb-2">Award</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Winning Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { title: "Nikko Yoryo", cat: "Commercial / Hidden Bar", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" },
    { title: "Modern Terrace", cat: "Residential / Melaka", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
    { title: "Minimalist Studio", cat: "Private / KL", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800" },
    { title: "Corporate Suite", cat: "Commercial / Office", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-studio-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="label-text mb-4 block underline underline-offset-8 decoration-studio-gold">Selected Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-tight">
              Design <span className="italic">Excellence</span>.
            </h2>
          </div>
          <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold group border-b border-studio-dark/20 pb-2">
            View All Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="relative overflow-hidden bg-studio-dark/5 aspect-[16/10] mb-8">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-serif mb-2">{p.title}</h3>
                  <p className="label-text opacity-40">{p.cat}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "3D Visualization", id: "01", desc: "Playful design often brings the best solutions. We always provide realistic 3D visualization so you'll know if that shade works for you." },
    { title: "Space Planning", id: "02", desc: "The space we occupy affects our physiology and psychology. We ask: 'How do we create engaging spaces?'" },
    { title: "Construction", id: "03", desc: "Integrating our background as builders ensures that every design is buildable and executed to the highest standard." },
    { title: "Cost & Schedule", id: "04", desc: "Total transparency through the Time, Cost, Quality triangle. We provide budgeting that determines every work element's cost." },
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="label-text text-studio-gold mb-6 block">Our Expertise</span>
          <h2 className="text-5xl md:text-6xl font-serif tracking-tighter">Full Range Services.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((s, i) => (
            <div key={i} className="group border-t border-studio-dark/10 pt-8 hover:border-studio-dark transition-colors duration-500">
              <span className="label-text opacity-30 group-hover:opacity-100 transition-opacity">{s.id}</span>
              <h3 className="text-2xl font-serif mt-4 mb-6">{s.title}</h3>
              <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-80 transition-opacity">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-studio-dark text-studio-cream pt-32 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-8">
            <h2 className="text-6xl md:text-[8vw] font-serif tracking-tighter leading-[0.8] mb-12">
              Say <br /><span className="italic font-normal text-studio-gold">Hello.</span>
            </h2>
            <p className="text-xl max-w-md opacity-60 mb-12 font-serif">We'd love to hear about your project and see how we can bring your space to life.</p>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-end space-y-10">
            <div className="space-y-4">
              <p className="label-text text-studio-gold italic">Contact Information</p>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-studio-gold transition-colors">
                  <Mail size={16} />
                </div>
                <a href="mailto:videcdesignstudio@gmail.com" className="text-lg hover:text-studio-gold transition-colors">videcdesignstudio@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-studio-gold transition-colors">
                  <Phone size={16} />
                </div>
                <a href="tel:+60126165229" className="text-lg hover:text-studio-gold transition-colors">+6012-616 5229</a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-studio-gold transition-colors">
                  <MapPin size={16} />
                </div>
                <p className="text-lg">Melaka, Malaysia</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-studio-gold hover:text-studio-gold transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-studio-gold hover:text-studio-gold transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-white/10 w-full mb-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-baseline gap-4">
            <span className="text-2xl font-serif font-bold tracking-tighter">VIDEC</span>
            <span className="label-text opacity-30">© 2026. All Rights Reserved.</span>
          </div>
          <div className="flex gap-10 label-text opacity-30">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="antialiased selection:bg-studio-gold selection:text-studio-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
