
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    
    if (heading) {
      heading.classList.add('animate-fade-in');
      heading.style.opacity = '1'; // Ensure it stays visible
    }
    
    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add('animate-fade-in');
        subtitle.style.opacity = '1'; // Ensure it stays visible
      }, 200);
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-crafty-cream to-white -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-[15%] w-40 h-40 bg-crafty-sage/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-[10%] w-60 h-60 bg-crafty-terracotta/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 pt-16 md:pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-crafty-navy text-balance"
            style={{ opacity: '0' }} // Start invisible, but JS will make it visible
          >
            Discover Your Next <span className="text-shimmer">Creative Passion</span>
          </h1>
          
          <p 
            ref={subtitleRef} 
            className="text-lg md:text-xl text-crafty-navy/80 max-w-2xl mx-auto text-balance"
            style={{ opacity: '0' }} // Start invisible, but JS will make it visible
          >
            Curated hobby subscription boxes delivered to your door, complete with all the supplies you need to start your creative journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8" style={{ opacity: '1' }}>
            <Link
              to="/subscription"
              className="group inline-flex items-center justify-center gap-2 text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-8 py-4 bg-crafty-terracotta text-white hover:bg-crafty-terracotta/90 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start Your Free Trial
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/catalog"
              className="group inline-flex items-center justify-center gap-2 text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-8 py-4 bg-transparent border border-crafty-navy text-crafty-navy hover:bg-crafty-navy/5 rounded-full"
            >
              Explore Hobbies
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        <div className="relative mt-16 md:mt-24 w-full max-w-5xl mx-auto" style={{ opacity: '1' }}>
          <div className="aspect-video relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-crafty-sage/30 to-crafty-terracotta/30 mix-blend-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?q=80&w=1760&auto=format&fit=crop"
              alt="Person enjoying a CraftyCrate hobby box" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-crafty-cream rounded-2xl -z-10 floating"></div>
          <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-32 h-32 md:w-48 md:h-48 bg-crafty-sage/30 rounded-2xl -z-10 floating" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
