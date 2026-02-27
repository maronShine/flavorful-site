import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Clock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '19:00',
    guests: '2',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Reservation Request Sent!', {
        description: `We'll confirm your table for ${formData.guests} guests on ${formData.date}.`,
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', date: '', time: '19:00', guests: '2', message: '' });
    }, 1500);
  };

  return (
    <section id="reservations" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e8c3913c-7d94-410c-9804-ada8fcaf93a0/restaurant-interior-5464b691-1772112312940.webp" 
          alt="Atmosphere" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-stone-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-stone-700">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Info */}
            <div className="p-10 md:p-14 bg-amber-600 text-white flex flex-col justify-center">
              <h2 className="text-4xl font-serif font-bold mb-6">Reserve Your Experience</h2>
              <p className="mb-10 text-amber-50/80 leading-relaxed">
                Join us for an unforgettable culinary journey. Secure your table online and let us prepare for your arrival.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Opening Hours</h4>
                    <p className="text-sm text-amber-50/70">Mon-Sun: 12:00 PM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Group Dining</h4>
                    <p className="text-sm text-amber-50/70">Parties larger than 10, please call us.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <form onSubmit={handleSubmit} className="p-10 md:p-14 bg-white text-stone-900">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-stone-200 border bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input
                        required
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-stone-200 border bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Guests</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border-stone-200 border bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                          <option key={n} value={n}>{n} People</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Special Request (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-stone-200 border bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none"
                    placeholder="Anniversary, dietary needs, etc."
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      Confirm Reservation
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}