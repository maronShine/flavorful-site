import { Calendar, Users, MapPin, Music } from 'lucide-react';

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Host Your Event</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-2 mb-6">Unforgettable Moments Start Here</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                Whether it's a corporate gala, a romantic wedding, or an intimate birthday celebration, our dedicated events team will ensure every detail is perfect.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Users, title: 'Private Dining', desc: 'Up to 50 guests' },
                { icon: Music, title: 'Live Events', desc: 'Full AV setup available' },
                { icon: Calendar, title: 'Flexible Booking', desc: 'Available 7 days a week' },
                { icon: MapPin, title: 'Prime Location', desc: 'Heart of the culinary district' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-stone-50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">{item.title}</h4>
                    <p className="text-sm text-stone-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold hover:bg-stone-800 transition-all shadow-xl">
              Inquire About Events
            </button>
          </div>

          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" 
                  alt="Event Decor" 
                  className="rounded-3xl w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400" 
                  alt="Party" 
                  className="rounded-3xl w-full h-80 object-cover"
                />
              </div>
              <div className="pt-12 space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=400" 
                  alt="Dining Table" 
                  className="rounded-3xl w-full h-80 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1470753937643-efad93c239fa?auto=format&fit=crop&q=80&w=400" 
                  alt="Flowers" 
                  className="rounded-3xl w-full h-64 object-cover"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}