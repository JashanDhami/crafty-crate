
import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const frequentlyAskedQuestions = [
  {
    question: "How does the free trial work?",
    answer: "Your 14-day free trial gives you full access to all features of your chosen subscription plan. You won't be charged until the trial period ends, and you can cancel anytime during the trial with no obligations."
  },
  {
    question: "Can I change my subscription plan?",
    answer: "Yes, you can upgrade or downgrade your subscription plan at any time. The changes will take effect at the start of your next billing cycle."
  },
  {
    question: "How do returns work?",
    answer: "If you're not satisfied with your CraftyCrate, you can return unopened boxes within 30 days of delivery for a full refund, minus shipping costs. Partially used boxes may be eligible for store credit."
  },
  {
    question: "Can I customize the hobbies I receive?",
    answer: "Yes! After signing up, you'll complete a hobby preference quiz that helps us match you with hobbies you'll love. You can update your preferences anytime."
  },
  {
    question: "When will my CraftyCrate ship?",
    answer: "New subscriptions ship within 3-5 business days. Recurring monthly subscriptions ship on the same date each month. You'll receive tracking information via email when your box ships."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship to the United States and Canada. We're working on expanding to more countries soon!"
  }
];

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    monthlyPrice: 29.99,
    yearlyPrice: 24.99,
    description: 'Perfect for beginners who want to explore a new hobby.',
    features: [
      'One hobby crate per month',
      'Basic materials and tools',
      'Digital guides and tutorials',
      'Community forum access',
      '30-day money-back guarantee'
    ],
    notIncluded: [
      'Live virtual workshops',
      'Extended supplies',
      'Priority shipping',
      'Exclusive community access'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    monthlyPrice: 49.99,
    yearlyPrice: 42.49,
    description: 'Enhanced experience with premium materials and exclusive benefits.',
    features: [
      'One premium hobby crate per month',
      'Professional-grade materials',
      'Extended supplies (25% more)',
      'Digital guides and tutorials',
      'Live virtual workshops',
      'Exclusive community access',
      'Priority shipping',
      'Community forum access',
      '30-day money-back guarantee'
    ],
    notIncluded: []
  }
];

const Subscription = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="bg-crafty-cream/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-crafty-navy mb-4">
                Choose Your <span className="text-crafty-terracotta">Subscription Plan</span>
              </h1>
              <p className="text-lg text-crafty-navy/70">
                Find the perfect plan to embark on your creative journey with CraftyCrate.
              </p>
              
              <div className="flex items-center justify-center mt-8">
                <div className="bg-white p-1 rounded-full shadow-sm inline-flex">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      billingCycle === 'monthly'
                        ? 'bg-crafty-navy text-white shadow-sm'
                        : 'text-crafty-navy hover:bg-gray-100'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      billingCycle === 'yearly'
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
                    plan.id === 'premium'
                      ? 'bg-white border-2 border-crafty-terracotta shadow-xl'
                      : 'bg-white border border-gray-100 shadow-md'
                  }`}
                >
                  {plan.id === 'premium' && (
                    <div className="absolute top-0 right-0 bg-crafty-terracotta text-white text-xs font-medium px-3 py-1.5 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-crafty-navy">{plan.name}</h3>
                    <div className="mt-2 mb-4">
                      <span className="text-3xl font-bold text-crafty-navy">
                        ${billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-crafty-navy/70 ml-1">
                        /month{billingCycle === 'yearly' ? ', billed annually' : ''}
                      </span>
                    </div>
                    
                    <p className="text-crafty-navy/70 mb-6">
                      {plan.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-crafty-terracotta shrink-0 mt-0.5" />
                          <span className="ml-2 text-crafty-navy/80">{feature}</span>
                        </li>
                      ))}
                      
                      {plan.notIncluded.map((feature, index) => (
                        <li key={index} className="flex items-start opacity-50">
                          <X className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                          <span className="ml-2 text-crafty-navy/60 line-through">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="#checkout"
                      className={`w-full inline-flex items-center justify-center gap-2 text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-6 py-3 rounded-full group ${
                        plan.id === 'premium'
                          ? 'bg-crafty-terracotta text-white hover:bg-crafty-terracotta/90'
                          : 'bg-crafty-navy text-white hover:bg-crafty-navy/90'
                      }`}
                    >
                      Start 14-Day Free Trial
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    
                    <p className="text-xs text-center text-crafty-navy/50 mt-4">
                      No credit card required for trial
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white" id="faq">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-crafty-navy mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {frequentlyAskedQuestions.map((faq, index) => (
                  <div 
                    key={index}
                    className="border border-gray-100 rounded-lg overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-crafty-navy">{faq.question}</span>
                      <span className={`transform transition-transform duration-200 ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crafty-navy/70">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    
                    {expandedFAQ === index && (
                      <div className="p-4 bg-gray-50 border-t border-gray-100">
                        <p className="text-crafty-navy/80">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-crafty-navy/70 mb-4">
                  Have more questions? We're here to help.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-transparent border border-crafty-navy text-crafty-navy hover:bg-crafty-navy/5 rounded-full"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-crafty-cream/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1534705867302-2a41394d2a3b?q=80&w=1740&auto=format&fit=crop"
                  alt="A person opening their CraftyCrate box"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-crafty-navy mb-4">
                  Our Satisfaction Guarantee
                </h2>
                <p className="text-crafty-navy/70 mb-6">
                  We want your CraftyCrate experience to be perfect. If you're not completely satisfied with your crate, we offer hassle-free returns within 30 days.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-crafty-sage/30 mr-4 shrink-0">
                      <Check className="w-5 h-5 text-crafty-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-crafty-navy">30-Day Money Back</h3>
                      <p className="text-crafty-navy/70">
                        Return unopened crates within 30 days for a full refund.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-crafty-terracotta/20 mr-4 shrink-0">
                      <Check className="w-5 h-5 text-crafty-terracotta" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-crafty-navy">Cancel Anytime</h3>
                      <p className="text-crafty-navy/70">
                        No long-term contracts. Cancel your subscription whenever you want.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-crafty-orange/20 mr-4 shrink-0">
                      <Check className="w-5 h-5 text-crafty-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-crafty-navy">Responsive Support</h3>
                      <p className="text-crafty-navy/70">
                        Our customer support team is available 7 days a week to assist you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Subscription;
