
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = [
  { id: 'all', name: 'All Hobbies' },
  { id: 'art', name: 'Art & Design' },
  { id: 'diy', name: 'DIY & Crafts' },
  { id: 'outdoors', name: 'Outdoors & Nature' },
  { id: 'culinary', name: 'Culinary Arts' },
  { id: 'music', name: 'Music & Audio' },
  { id: 'wellness', name: 'Wellness & Mindfulness' },
];

const hobbies = [
  {
    id: 'calligraphy',
    title: 'Modern Calligraphy',
    category: 'art',
    image: 'https://images.unsplash.com/photo-1604567596020-d39ebb3332c5?q=80&w=1740&auto=format&fit=crop',
    description: 'Learn the art of beautiful handwriting with our premium calligraphy set.',
    difficulty: 'Beginner'
  },
  {
    id: 'watercolor',
    title: 'Watercolor Painting',
    category: 'art',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1760&auto=format&fit=crop',
    description: 'Express yourself with vibrant watercolors and professional techniques.',
    difficulty: 'Beginner'
  },
  {
    id: 'woodworking',
    title: 'Beginner Woodworking',
    category: 'diy',
    image: 'https://images.unsplash.com/photo-1567964253473-59a24525de78?q=80&w=1760&auto=format&fit=crop',
    description: 'Craft beautiful wooden items with our beginner-friendly tools and materials.',
    difficulty: 'Intermediate'
  },
  {
    id: 'candles',
    title: 'Artisan Candle Making',
    category: 'diy',
    image: 'https://images.unsplash.com/photo-1608263053514-717b4e0af8cb?q=80&w=1742&auto=format&fit=crop',
    description: 'Create your own signature scents with premium waxes and essential oils.',
    difficulty: 'Beginner'
  },
  {
    id: 'gardening',
    title: 'Indoor Herb Garden',
    category: 'outdoors',
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1872&auto=format&fit=crop',
    description: 'Grow your own culinary herbs with our complete indoor gardening kit.',
    difficulty: 'Beginner'
  },
  {
    id: 'birdwatching',
    title: 'Birdwatching Essentials',
    category: 'outdoors',
    image: 'https://images.unsplash.com/photo-1567301074247-9e8ad1d7b7f0?q=80&w=1887&auto=format&fit=crop',
    description: 'Start your birdwatching journey with high-quality binoculars and guides.',
    difficulty: 'Beginner'
  },
  {
    id: 'bread-baking',
    title: 'Artisan Bread Baking',
    category: 'culinary',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=1887&auto=format&fit=crop',
    description: 'Master the art of bread making with professional tools and premium ingredients.',
    difficulty: 'Intermediate'
  },
  {
    id: 'pottery',
    title: 'Hand-built Pottery',
    category: 'art',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0af771b71a?q=80&w=2070&auto=format&fit=crop',
    description: 'Create beautiful ceramic pieces with our hand-building pottery kit.',
    difficulty: 'Intermediate'
  }
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredHobbies, setFilteredHobbies] = useState(hobbies);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (activeCategory === 'all') {
      setFilteredHobbies(hobbies);
    } else {
      setFilteredHobbies(hobbies.filter(hobby => hobby.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="bg-crafty-cream/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-crafty-navy mb-4">
                Explore Our <span className="text-crafty-terracotta">Hobby Collection</span>
              </h1>
              <p className="text-lg text-crafty-navy/70">
                Browse our curated selection of hobby kits designed to help you discover new creative passions.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-crafty-navy text-white shadow-sm'
                      : 'bg-white text-crafty-navy hover:bg-crafty-navy/5 border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredHobbies.map((hobby) => (
                <div 
                  key={hobby.id}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-crafty-navy">{hobby.title}</h3>
                      <span className="text-xs font-medium px-2 py-1 bg-crafty-cream rounded-full text-crafty-navy">
                        {hobby.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-sm text-crafty-navy/70 mb-4 line-clamp-2">
                      {hobby.description}
                    </p>
                    
                    <Link
                      to={`/catalog/${hobby.id}`}
                      className="inline-flex items-center text-crafty-terracotta font-medium text-sm hover:underline"
                    >
                      Learn more
                      <ArrowRight size={14} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredHobbies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-crafty-navy text-lg">No hobbies found in this category.</p>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="mt-4 px-6 py-2 bg-crafty-navy text-white rounded-full text-sm font-medium"
                >
                  View all hobbies
                </button>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-crafty-cream/50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-crafty-navy mb-4">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-crafty-navy/70">
                  We're constantly adding new hobby kits to our collection. Let us know what you're interested in!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-transparent border border-crafty-navy text-crafty-navy rounded-full text-sm font-medium hover:bg-crafty-navy/5 transition-colors w-full sm:w-auto text-center"
                >
                  Request a Hobby
                </Link>
                <Link
                  to="/subscription"
                  className="px-6 py-3 bg-crafty-terracotta text-white rounded-full text-sm font-medium hover:bg-crafty-terracotta/90 transition-colors w-full sm:w-auto text-center"
                >
                  Start Your Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
