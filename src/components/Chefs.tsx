import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const CHEFS = [
  {
    name: 'Marco Rossi',
    role: 'Executive Chef',
    bio: 'Specializing in Mediterranean cuisine with over 20 years of experience in Michelin-starred kitchens.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e8c3913c-7d94-410c-9804-ada8fcaf93a0/chef-1-87b603bf-1772112312524.webp'
  },
  {
    name: 'Elena Vossen',
    role: 'Pastry Chef',
    bio: 'A master of delicate textures and bold flavors, bringing artistic precision to every dessert.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e8c3913c-7d94-410c-9804-ada8fcaf93a0/chef-2-c1479d85-1772112312729.webp'
  },
  {
    name: 'Julian Thorne',
    role: 'Sous Chef',
    bio: 'The heartbeat of our kitchen, Julian focuses on seasonal foraging and farm-to-table excellence.',
    image: 'https://images.unsplash.com/photo-1583394238182-6f71f218a679?auto=format&fit=crop&q=80&w=400'
  }
];

export default function Chefs() {
  return (
    <section id="chefs" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Meet the Masters</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-xl mx-auto">
            Our kitchen is led by a team of visionary chefs dedicated to culinary excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CHEFS.map((chef, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5]">
                <img 
                  src={chef.image} 
                  alt={chef.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-amber-600 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-amber-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-amber-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-1">{chef.name}</h3>
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-4">{chef.role}</p>
              <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto">
                {chef.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}