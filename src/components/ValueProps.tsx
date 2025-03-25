
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 1,
    title: "Risk-Free Returns",
    description: "Not feeling inspired? Return your unopened crate within 30 days for a full refund."
  },
  {
    id: 2,
    title: "50+ Hobbies",
    description: "From watercolor painting to woodworking, we have a hobby that's perfect for you."
  },
  {
    id: 3,
    title: "Expert Community",
    description: "Join our community of crafters and get tips, feedback, and inspiration from experts."
  }
];

const ValueProps = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-crafty-navy mb-4">
            Crafted With <span className="text-crafty-terracotta">Care</span>
          </h2>
          <p className="text-lg text-crafty-navy/70 max-w-2xl mx-auto">
            We've designed every aspect of CraftyCrate to help you discover and develop new creative skills with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-crafty-cream rounded-full mb-4">
                <Check className="w-6 h-6 text-crafty-terracotta" />
              </div>
              <h3 className="text-xl font-semibold text-crafty-navy mb-2">{feature.title}</h3>
              <p className="text-crafty-navy/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-20 max-w-3xl mx-auto">
          <div className="p-8 md:p-10 bg-crafty-cream rounded-3xl">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-crafty-navy mb-2">Still have questions?</h3>
                <p className="text-crafty-navy/70 mb-4">
                  Our team is here to help you find the perfect hobby match.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-crafty-terracotta font-medium hover:underline"
                >
                  Contact us <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
              <div className="hidden md:block h-16 w-px bg-crafty-navy/10"></div>
              <div>
                <p className="text-lg font-medium text-crafty-navy">
                  "CraftyCrate rekindled my passion for creating. I've discovered talents I never knew I had."
                </p>
                <p className="mt-2 text-sm text-crafty-navy/70">— Sarah T., Member since 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
