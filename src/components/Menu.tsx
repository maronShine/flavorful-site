import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, WheatOff, Info } from 'lucide-react';

type Category = 'Appetizers' | 'Mains' | 'Desserts' | 'Drinks';
type Filter = 'All' | 'Vegan' | 'Gluten-Free';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: Category;
  tags: Filter[];
  image: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Truffle Burrata',
    description: 'Fresh burrata cheese, black truffle oil, honey balsamic, heirloom tomatoes.',
    price: '$18',
    category: 'Appetizers',
    tags: ['Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Wagyu Ribeye',
    description: 'A5 Wagyu steak, smoked marrow butter, roasted fingerling potatoes, asparagus.',
    price: '$64',
    category: 'Mains',
    tags: [],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e8c3913c-7d94-410c-9804-ada8fcaf93a0/hero-steak-da689a61-1772112311915.webp'
  },
  {
    id: 3,
    name: 'Mediterranean Platter',
    description: 'House-made hummus, falafel, roasted peppers, marinated olives, and warm pita.',
    price: '$22',
    category: 'Appetizers',
    tags: ['Vegan'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e8c3913c-7d94-410c-9804-ada8fcaf93a0/vegan-platter-d710f6df-1772112314545.webp'
  },
  {
    id: 4,
    name: 'Lobster Ravioli',
    description: 'Handmade pasta filled with butter-poached lobster in a saffron cream sauce.',
    price: '$38',
    category: 'Mains',
    tags: [],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e8c3913c-7d94-410c-9804-ada8fcaf93a0/hero-pasta-59daefca-1772112312143.webp'
  },
  {
    id: 5,
    name: 'Lava Cake',
    description: 'Valrhona dark chocolate, raspberry coulis, Madagascar vanilla gelato.',
    price: '$14',
    category: 'Desserts',
    tags: [],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e8c3913c-7d94-410c-9804-ada8fcaf93a0/dessert-special-811df28b-1772112312334.webp'
  },
  {
    id: 6,
    name: 'Hibiscus Spritz',
    description: 'Aperol, prosecco, house-made hibiscus syrup, fresh mint.',
    price: '$16',
    category: 'Drinks',
    tags: ['Vegan', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400'
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('Mains');
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const categories: Category[] = ['Appetizers', 'Mains', 'Desserts', 'Drinks'];
  const filters: Filter[] = ['All', 'Vegan', 'Gluten-Free'];

  const filteredItems = MENU_ITEMS.filter(item => {
    const categoryMatch = item.category === activeCategory;
    const filterMatch = activeFilter === 'All' || item.tags.includes(activeFilter);
    return categoryMatch && filterMatch;
  });

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Our Culinary Story</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-xl mx-auto italic">
            "Taste is not just a sense, it's a journey."
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-amber-600 text-white shadow-lg' 
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-amber-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center gap-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeFilter === filter ? 'text-amber-700 underline underline-offset-8' : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {filter === 'Vegan' && <Leaf className="w-3.5 h-3.5 text-green-500" />}
                {filter === 'Gluten-Free' && <WheatOff className="w-3.5 h-3.5 text-amber-500" />}
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                        {tag === 'Vegan' ? <Leaf className="w-4 h-4 text-green-600" /> : <WheatOff className="w-4 h-4 text-amber-600" />}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-serif font-bold text-amber-600">{item.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <button className="text-xs font-bold text-stone-400 hover:text-amber-600 flex items-center gap-1 transition-colors uppercase tracking-widest">
                    <Info className="w-4 h-4" /> Ingredients Info
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-stone-400">
            No items found for this selection.
          </div>
        )}
      </div>
    </section>
  );
}