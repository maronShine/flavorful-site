import { UtensilsCrossed, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-stone-950 text-stone-400 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <UtensilsCrossed className="w-8 h-8 text-amber-600" />
              <span className="text-2xl font-serif font-bold tracking-tight text-white">
                SAVOR<span className="text-amber-600">IA</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed">
              Crafting unforgettable culinary experiences since 2008. We believe in the power of fresh ingredients and passionate cooking.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#menu" className="hover:text-amber-500 transition-colors">Our Menu</a></li>
              <li><a href="#reservations" className="hover:text-amber-500 transition-colors">Reservations</a></li>
              <li><a href="#events" className="hover:text-amber-500 transition-colors">Private Events</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Career Opportunities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                <span>123 Culinary Ave, Gastronomy District<br />Foodie City, FC 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-600" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-600" />
                <span>hello@savoria-restaurant.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Location</h4>
            <div className="w-full h-48 rounded-2xl bg-stone-900 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              {/* Simulated Map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzEwLjEiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                className="w-full h-full border-0"
                loading="lazy"
                title="Google Maps"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 text-center text-xs">
          <p>© {new Date().getFullYear()} Savoria Fine Dining. All rights reserved. Designed with passion.</p>
        </div>
      </div>
    </footer>
  );
}