
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Users, Calendar } from 'lucide-react';

const CommunityPreview = () => {
  return (
    <section className="py-20 bg-crafty-cream/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1740&auto=format&fit=crop" 
                  alt="CraftyCrate community members" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800";
                  }}
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-crafty-sage/20 rounded-2xl -z-10 floating"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-crafty-terracotta/10 rounded-2xl -z-10 floating" style={{animationDelay: '1s'}}></div>
              
              <div className="absolute top-4 left-4 glass-card rounded-lg p-4 shadow-lg backdrop-blur-md bg-white/70">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Community member" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100";
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-crafty-navy">Emily R.</p>
                    <p className="text-xs text-crafty-navy/70">Just shared a project</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 glass-card rounded-lg p-4 shadow-lg backdrop-blur-md bg-white/70">
                <p className="text-sm text-crafty-navy">
                  <span className="font-medium">2,500+</span> active members
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-crafty-navy mb-4">
              Join Our <span className="text-crafty-terracotta">Creative Community</span>
            </h2>
            
            <p className="text-lg text-crafty-navy/70 mb-8">
              Connect with fellow crafters, share your projects, get feedback, and find inspiration in our thriving community of creative enthusiasts.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-crafty-sage/30 mr-4 shrink-0">
                  <Book className="w-5 h-5 text-crafty-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-crafty-navy">Tutorials & Resources</h3>
                  <p className="text-crafty-navy/70">
                    Access our extensive library of step-by-step tutorials and resources.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-crafty-terracotta/20 mr-4 shrink-0">
                  <Users className="w-5 h-5 text-crafty-terracotta" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-crafty-navy">Community Forums</h3>
                  <p className="text-crafty-navy/70">
                    Share your progress, ask questions, and connect with other creators.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-crafty-orange/20 mr-4 shrink-0">
                  <Calendar className="w-5 h-5 text-crafty-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-crafty-navy">Live Workshops</h3>
                  <p className="text-crafty-navy/70">
                    Join virtual workshops led by experts and master new techniques.
                  </p>
                </div>
              </div>
            </div>
            
            <Link
              to="/community"
              className="group inline-flex items-center justify-center gap-2 text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-6 py-3 bg-crafty-navy text-white hover:bg-crafty-navy/90 rounded-full"
            >
              Explore Community
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPreview;
