import { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed, Phone, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Our Chefs', href: '#chefs' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <UtensilsCrossed className={`w-8 h-8 ${scrolled ? 'text-amber-700' : 'text-white'}`} />
          <span className={`text-2xl font-serif font-bold tracking-tight ${scrolled ? 'text-stone-900' : 'text-white'}`}>
            SAVOR<span className="text-amber-600">IA</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                scrolled ? 'text-stone-700' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservations"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-transform active:scale-95 shadow-lg"
          >
            Book Table
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={scrolled ? 'text-stone-900' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-stone-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-stone-800 hover:text-amber-600"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-stone-100 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-stone-600 text-sm">
                  <Phone className="w-4 h-4" /> (555) 123-4567
                </div>
                <div className="flex items-center gap-3 text-stone-600 text-sm">
                  <MapPin className="w-4 h-4" /> 123 Culinary Ave, Foodie City
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}