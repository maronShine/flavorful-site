import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Sarah Jenkins',
    rating: 5,
    text: "The Wagyu Ribeye was life-changing. From the atmosphere to the service, everything was absolutely world-class.",
    role: 'Food Blogger'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: "Finally a place that understands flavor balance. The vegetarian options are just as impressive as the meat dishes.",
    role: 'Regular Guest'
  },
  {
    name: 'Emily Thompson',
    rating: 4,
    text: "An incredible dining experience. The attention to detail in the presentation of the desserts is simply stunning.",
    role: 'Event Designer'
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Grateful for Our Guests</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col relative">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-stone-50" />
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-amber-500 text-amber-500' : 'text-stone-200'}`} />
                ))}
              </div>
              <p className="text-stone-600 italic mb-8 relative z-10 leading-relaxed">
                "{review.text}"
              </p>
              <div className="mt-auto pt-6 border-t border-stone-100">
                <h4 className="font-bold text-stone-900">{review.name}</h4>
                <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}