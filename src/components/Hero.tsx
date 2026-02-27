import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const IMAGES = [
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e8c3913c-7d94-410c-9804-ada8fcaf93a0/hero-steak-da689a61-1772112311915.webp',
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e8c3913c-7d94-410c-9804-ada8fcaf93a0/hero-pasta-59daefca-1772112312143.webp',
  'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e8c3913c-7d94-410c-9804-ada8fcaf93a0/restaurant-interior-5464b691-1772112312940.webp'
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Slideshow Simulation */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src={IMAGES[0]} 
            alt="Hero background" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 text-amber-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Welcome to Savoria
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-200">
              Dining Experience
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-300 mb-10 font-light leading-relaxed">
            Experience the perfect blend of traditional techniques and modern flair. Crafted with passion, served with love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#menu" 
              className="group bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all hover:translate-y-[-2px] shadow-xl shadow-amber-900/20"
            >
              Explore Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#reservations" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              Book a Table
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 w-full py-8 border-t border-white/10 backdrop-blur-sm bg-black/20 hidden md:block">
        <div className="container mx-auto px-6 grid grid-cols-4 gap-8">
          {[
            { label: 'Fresh Ingredients', value: '100%' },
            { label: 'Master Chefs', value: '12+' },
            { label: 'Years of Savor', value: '15' },
            { label: 'Guest Reviews', value: '4.9/5' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-stone-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}