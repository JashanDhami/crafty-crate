
import React, { useEffect } from 'react';
import { ArrowRight, Book, Users, Calendar, Image } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="bg-crafty-cream/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-crafty-navy mb-4">
                Join Our Creative <span className="text-crafty-terracotta">Community</span>
              </h1>
              <p className="text-lg text-crafty-navy/70">
                Connect with fellow craft enthusiasts, share your projects, and get inspired by others.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" 
                  alt="CraftyCrate community members collaborating" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 md:p-8 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Community Showcase</h2>
                    <p className="text-white/80 max-w-2xl">
                      See what our members are creating and get inspired for your next project.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-crafty-sage/30 rounded-2xl -z-10 floating"></div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="p-6">
                  <div className="w-12 h-12 bg-crafty-cream rounded-full flex items-center justify-center mb-4">
                    <Book className="w-6 h-6 text-crafty-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-crafty-navy mb-2">Tutorial Library</h3>
                  <p className="text-crafty-navy/70 mb-4">
                    Access our extensive collection of step-by-step tutorials for all skill levels.
                  </p>
                  <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=1974&auto=format&fit=crop" 
                      alt="Tutorial demonstration" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to="/login"
                    className="inline-flex items-center text-crafty-terracotta font-medium hover:underline"
                  >
                    Browse Tutorials
                    <ArrowRight size={16} className="ml-1.5" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="p-6">
                  <div className="w-12 h-12 bg-crafty-terracotta/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-crafty-terracotta" />
                  </div>
                  <h3 className="text-xl font-semibold text-crafty-navy mb-2">Discussion Forum</h3>
                  <p className="text-crafty-navy/70 mb-4">
                    Share your experiences, ask questions, and connect with fellow crafters.
                  </p>
                  <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1740&auto=format&fit=crop" 
                      alt="Community discussion" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to="/login"
                    className="inline-flex items-center text-crafty-terracotta font-medium hover:underline"
                  >
                    Join Discussion
                    <ArrowRight size={16} className="ml-1.5" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="p-6">
                  <div className="w-12 h-12 bg-crafty-orange/20 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-crafty-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-crafty-navy mb-2">Live Workshops</h3>
                  <p className="text-crafty-navy/70 mb-4">
                    Attend virtual workshops led by expert crafters and learn new techniques.
                  </p>
                  <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?q=80&w=1740&auto=format&fit=crop" 
                      alt="Live workshop session" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to="/login"
                    className="inline-flex items-center text-crafty-terracotta font-medium hover:underline"
                  >
                    View Schedule
                    <ArrowRight size={16} className="ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-crafty-cream/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-crafty-navy mb-8 text-center">
                Featured Community Projects
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item}
                    className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={`https://source.unsplash.com/random/400x400?craft&sig=${item}`}
                        alt={`Community project ${item}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-sm font-medium">View Project</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden">
                          <img
                            src={`https://source.unsplash.com/random/100x100?face&sig=${item}`}
                            alt="User avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm text-crafty-navy font-medium">@crafter{item}</span>
                      </div>
                      <p className="text-crafty-navy/70 text-sm">Handmade Project #{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-6 py-3 bg-crafty-navy text-white hover:bg-crafty-navy/90 rounded-full"
                >
                  View All Projects
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-crafty-navy mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-crafty-navy/70 mb-8">
                Start your creative journey today and connect with fellow craft enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/login"
                  className="px-6 py-3 bg-transparent border border-crafty-navy text-crafty-navy rounded-full text-sm font-medium hover:bg-crafty-navy/5 transition-colors w-full sm:w-auto text-center"
                >
                  Sign In
                </Link>
                <Link
                  to="/subscription"
                  className="px-6 py-3 bg-crafty-terracotta text-white rounded-full text-sm font-medium hover:bg-crafty-terracotta/90 transition-colors w-full sm:w-auto text-center"
                >
                  Start Free Trial
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

export default Community;
