
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Contact form submitted');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-crafty-navy mb-6">
              Contact <span className="text-crafty-terracotta">CraftyCrate</span>
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
              <div>
                <p className="text-lg text-crafty-navy/70 mb-8">
                  Have questions or need assistance? We're here to help you discover your next creative passion.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-crafty-cream mr-4 shrink-0">
                      <Mail className="w-5 h-5 text-crafty-terracotta" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-crafty-navy">Email Us</h3>
                      <p className="text-crafty-navy/70">
                        <a href="mailto:hello@craftycrate.com" className="hover:text-crafty-terracotta">
                          hello@craftycrate.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-crafty-cream mr-4 shrink-0">
                      <Phone className="w-5 h-5 text-crafty-terracotta" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-crafty-navy">Call Us</h3>
                      <p className="text-crafty-navy/70">
                        <a href="tel:+1-555-CRAFTY" className="hover:text-crafty-terracotta">
                          +1-555-CRAFTY
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-crafty-cream mr-4 shrink-0">
                      <MapPin className="w-5 h-5 text-crafty-terracotta" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-crafty-navy">Visit Us</h3>
                      <p className="text-crafty-navy/70">
                        123 Craft Avenue<br />
                        Creativity District<br />
                        Artisan City, AC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-crafty-navy mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-crafty-navy mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-crafty-terracotta/50 focus:border-crafty-terracotta"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-crafty-navy mb-1">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-crafty-terracotta/50 focus:border-crafty-terracotta"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-crafty-navy mb-1">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-crafty-terracotta/50 focus:border-crafty-terracotta"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-crafty-navy mb-1">
                      Your Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-crafty-terracotta/50 focus:border-crafty-terracotta"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full inline-flex items-center justify-center text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-6 py-3 bg-crafty-terracotta text-white hover:bg-crafty-terracotta/90 rounded-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
