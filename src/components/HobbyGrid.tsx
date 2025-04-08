
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const hobbyCategories = [
  {
    id: 'art',
    name: 'Art & Design',
    items: [
      {
        id: 'calligraphy',
        title: 'Modern Calligraphy',
        image: 'https://images.unsplash.com/photo-1597401989360-07ff2c24c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        description: 'Learn the art of beautiful handwriting with our premium calligraphy set.'
      },
      {
        id: 'watercolor',
        title: 'Watercolor Painting',
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1760&auto=format&fit=crop',
        description: 'Express yourself with vibrant watercolors and professional techniques.'
      }
    ]
  },
  {
    id: 'diy',
    name: 'DIY & Crafts',
    items: [
      {
        id: 'woodworking',
        title: 'Beginner Woodworking',
        image: 'https://factorydirectsupplyonline.com/cdn/shop/articles/5-basic-woodworking-tools-for-beginner.png?v=1722518140',
        description: 'Craft beautiful wooden items with our beginner-friendly tools and materials.'
      },
      {
        id: 'candles',
        title: 'Artisan Candle Making',
        image: 'https://m.media-amazon.com/images/I/817B1GteZwL.jpg',
        description: 'Create your own signature scents with premium waxes and essential oils.'
      }
    ]
  },
  {
    id: 'outdoors',
    name: 'Outdoors & Nature',
    items: [
      {
        id: 'gardening',
        title: 'Indoor Herb Garden',
        image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1872&auto=format&fit=crop',
        description: 'Grow your own culinary herbs with our complete indoor gardening kit.'
      },
      {
        id: 'birdwatching',
        title: 'Birdwatching Essentials',
        image: 'https://images.squarespace-cdn.com/content/v1/6049f59709679f3dadbb2d5d/1687072275128-EO5BXMKW55P6J8JMEV8S/image-asset.jpeg',
        description: 'Start your birdwatching journey with high-quality binoculars and guides.'
      }
    ]
  }
];

const HobbyGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-crafty-navy mb-4">
              Explore Our <span className="text-crafty-terracotta">Hobby Crates</span>
            </h2>
            <p className="text-lg text-crafty-navy/70 max-w-2xl">
              Discover curated supplies and expert guidance to help you explore new creative passions.
            </p>
          </div>
          
          <Link
            to="/catalog"
            className="group mt-4 md:mt-0 inline-flex items-center text-crafty-navy font-medium hover:text-crafty-terracotta transition-colors duration-200"
          >
            View all hobbies
            <ArrowRight size={18} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="space-y-16">
          {hobbyCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <h3 className="text-2xl font-medium text-crafty-navy border-b border-gray-100 pb-2">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((hobby) => (
                  <div 
                    key={hobby.id}
                    className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={hobby.image}
                        alt={hobby.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-crafty-navy mb-2">{hobby.title}</h4>
                      <p className="text-crafty-navy/70 mb-4">{hobby.description}</p>
                      
                      <Link
                        to={`/catalog/${hobby.id}`}
                        className="inline-flex items-center text-crafty-terracotta font-medium hover:underline"
                      >
                        Learn more
                        <ArrowRight size={16} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbyGrid;
