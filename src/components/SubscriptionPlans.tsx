
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 29.99,
    billing: 'month',
    description: 'Perfect for beginners who want to explore a new hobby.',
    features: [
      'One hobby crate per month',
      'Basic materials and tools',
      'Digital guides and tutorials',
      'Community forum access',
      '30-day money-back guarantee'
    ],
    cta: 'Get Started',
    highlight: false
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 49.99,
    billing: 'month',
    description: 'Enhanced experience with premium materials and exclusive benefits.',
    features: [
      'One premium hobby crate per month',
      'Professional-grade materials',
      'Extended supplies (25% more)',
      'Live virtual workshops',
      'Exclusive community access',
      'Priority shipping',
      '30-day money-back guarantee'
    ],
    cta: 'Start Free Trial',
    highlight: true
  }
];

const SubscriptionPlans = () => {
  const [billingCycle, setBillingCycle] = useState<'month' | 'year'>('month');
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-crafty-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-crafty-navy mb-4">
            Choose Your <span className="text-crafty-terracotta">Creative Journey</span>
          </h2>
          <p className="text-lg text-crafty-navy/70 max-w-2xl mx-auto">
            Select the plan that best fits your creative aspirations and budget.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-white p-1 rounded-full shadow-sm inline-flex">
              <button
                onClick={() => setBillingCycle('month')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'month'
                    ? 'bg-crafty-navy text-white shadow-sm'
                    : 'text-crafty-navy hover:bg-gray-100'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('year')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'year'
                    ? 'bg-crafty-navy text-white shadow-sm'
                    : 'text-crafty-navy hover:bg-gray-100'
                }`}
              >
                Annual <span className="text-xs font-normal text-crafty-terracotta">Save 15%</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? 'bg-white border-2 border-crafty-terracotta shadow-xl hover:shadow-2xl scale-105 md:scale-110'
                  : 'bg-white border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-crafty-terracotta text-white text-xs font-medium px-3 py-1.5 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-crafty-navy">{plan.name}</h3>
                <div className="mt-2 mb-4">
                  <span className="text-3xl font-bold text-crafty-navy">
                    ${billingCycle === 'year' ? (plan.price * 0.85).toFixed(2) : plan.price}
                  </span>
                  <span className="text-crafty-navy/70 ml-1">
                    /{billingCycle === 'year' ? 'month, billed annually' : 'month'}
                  </span>
                </div>
                
                <p className="text-crafty-navy/70 mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-crafty-terracotta shrink-0 mt-0.5" />
                      <span className="ml-2 text-crafty-navy/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/subscription"
                  className={`w-full inline-flex items-center justify-center gap-2 text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-6 py-3 rounded-full group ${
                    plan.highlight
                      ? 'bg-crafty-terracotta text-white hover:bg-crafty-terracotta/90'
                      : 'bg-crafty-navy text-white hover:bg-crafty-navy/90'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                
                <p className="text-xs text-center text-crafty-navy/50 mt-4">
                  No credit card required for trial
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-crafty-navy/70">
            All plans include a 14-day free trial with full access to all features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
