import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Instagram = ({ size }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Modalidades', href: '#services' },
    { name: 'Estrutura', href: '#gallery' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg py-4 border-b border-white/5' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.png" alt="Academia Georgea Logo" className="h-12 md:h-14 w-auto rounded-full border border-brand-orange/20" />
          <span className="text-xl sm:text-2xl font-black italic tracking-tighter text-white">
            ACADEMIA <span className="text-brand-orange">GEORGEA</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-300 hover:text-brand-orange transition-colors uppercase text-sm font-bold tracking-wide">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-brand-light-gray pl-6">
            <a href="https://www.instagram.com/academiageorgea/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-orange transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/5548996244651?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental." target="_blank" rel="noopener noreferrer" className="bg-brand-orange hover:bg-orange-500 text-brand-black font-bold px-5 py-2.5 rounded-full flex items-center gap-2 transition-all hover:scale-105">
              <MessageCircle size={20} fill="currentColor" className="text-brand-black" />
              <span>Fale Conosco</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white hover:text-brand-orange transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-md border-t border-brand-light-gray overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block px-8 py-4 text-gray-300 hover:text-brand-orange hover:bg-brand-light-gray/50 transition-colors uppercase text-sm font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="px-8 py-6 flex gap-4 border-t border-brand-light-gray/50 mt-2">
                <a href="https://www.instagram.com/academiageorgea/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-orange hover:text-brand-black transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/5548999789093?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental." target="_blank" rel="noopener noreferrer" className="flex-1 bg-brand-orange hover:bg-orange-500 text-brand-black font-bold rounded-full flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle size={20} fill="currentColor" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
