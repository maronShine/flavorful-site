import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const OFFERS = [
  {
    title: 'Wine & Dine Wednesday',
    description: 'Enjoy 50% off select bottles of wine with every pair of main courses ordered.',
    tag: 'Limited Offer',
    color: 'bg-rose-900'
  },
  {
    title: 'Weekend Brunch',
    description: 'Unlimited mimosas and chef specials every Saturday and Sunday from 11 AM.',
    tag: 'Weekend Special',
    color: 'bg-amber-800'
  },
  {
    title: 'Happy Hour Glow',
    description: 'Artisanal cocktails and small bites at half price between 5 PM and 7 PM.',
    tag: 'Daily Promo',
    color: 'bg-stone-800'
  }
];

export default function Offers() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % OFFERS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + OFFERS.length) % OFFERS.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-stone-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            <div className="relative p-12 md:p-20 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    {OFFERS[current].tag}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
                    {OFFERS[current].title}
                  </h2>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    {OFFERS[current].description}
                  </p>
                  <div className="pt-4">
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-amber-900/20 transition-all">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-12 flex gap-4">
                <button onClick={prev} className="p-3 rounded-full border border-stone-200 hover:bg-stone-50 transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={next} className="p-3 rounded-full border border-stone-200 hover:bg-stone-50 transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="relative h-full min-h-[300px] lg:min-h-0 bg-stone-200 overflow-hidden">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1 }}
                    className={`absolute inset-0 ${OFFERS[current].color} flex items-center justify-center`}
                  >
                    <div className="text-white/10 font-serif text-[15rem] font-bold select-none rotate-12">
                      SAVOR
                    </div>
                    {/* Placeholder for offer image if desired */}
                    <img 
                      src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e8c3913c-7d94-410c-9804-ada8fcaf93a0/hero-pasta-59daefca-1772112312143.webp"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                      alt="Special Offer"
                    />
                  </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}