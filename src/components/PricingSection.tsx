
import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<'hourly' | 'monthly'>('hourly');

  const plans = [
    {
      name: "Basic Rider",
      hourlyPrice: "$2",
      monthlyPrice: "$20",
      description: "Perfect for occasional riders",
      features: [
        "Unlimited 30-minute rides",
        "Access to standard e-cycles",
        "Mobile app access",
        "24/7 customer support",
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Campus Commuter",
      hourlyPrice: "$3",
      monthlyPrice: "$35",
      description: "For regular campus travelers",
      features: [
        "Unlimited 60-minute rides",
        "Access to all e-cycle models",
        "Priority booking",
        "No surge pricing",
        "Free cancellations",
      ],
      popular: true,
      buttonText: "Choose Plan",
      buttonVariant: "default" as const,
    },
    {
      name: "University Explorer",
      hourlyPrice: "$5",
      monthlyPrice: "$50",
      description: "For students who ride everywhere",
      features: [
        "Unlimited rides, any duration",
        "Premium e-cycles with extended range",
        "Exclusive cycle stations access",
        "Free guest passes",
        "Monthly maintenance check",
        "Cycle accessories included",
      ],
      popular: false,
      buttonText: "Choose Plan",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a plan that works for your campus commuting needs.
          </p>
          
          {/* Toggle between hourly and monthly */}
          <div className="flex justify-center mt-8">
            <div className="bg-white p-1 rounded-lg shadow-sm inline-flex">
              <button
                className={`px-6 py-2 rounded-md ${
                  billingPeriod === 'hourly'
                    ? 'bg-cycle-green-100 text-cycle-green-700 font-medium'
                    : 'text-gray-600'
                }`}
                onClick={() => setBillingPeriod('hourly')}
              >
                Pay-as-you-go
              </button>
              <button
                className={`px-6 py-2 rounded-md ${
                  billingPeriod === 'monthly'
                    ? 'bg-cycle-green-100 text-cycle-green-700 font-medium'
                    : 'text-gray-600'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300 ${
                plan.popular ? 'ring-2 ring-cycle-green-500 md:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-cycle-green-500 text-white py-1 px-4 text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {billingPeriod === 'hourly' ? plan.hourlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {billingPeriod === 'hourly' ? '/hour' : '/month'}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-cycle-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant} 
                  className={`w-full ${plan.popular ? 'bg-cycle-green-600 hover:bg-cycle-green-700' : ''}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-lg p-6 shadow">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            Additional Information
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-5 w-5 ml-2 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Details about our pricing structure</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Student Discounts</h4>
              <p className="text-gray-600 text-sm">Valid student ID gets you additional 10% off any plan</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Group Rates</h4>
              <p className="text-gray-600 text-sm">Discounts for university clubs and student organizations</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Damage Protection</h4>
              <p className="text-gray-600 text-sm">Optional $5/month coverage for damage and theft</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Late Fees</h4>
              <p className="text-gray-600 text-sm">$5 fee applies for returns over 15 minutes past reservation end</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
