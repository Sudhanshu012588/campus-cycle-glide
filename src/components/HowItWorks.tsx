
import React from 'react';
import { Search, Smartphone, Bike, Zap } from 'lucide-react';

const steps = [
  {
    title: "Find a Cycle",
    description: "Locate the nearest e-cycle station on our interactive map",
    icon: Search,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Scan QR Code",
    description: "Use our app to scan the QR code and unlock your cycle",
    icon: Smartphone,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Enjoy Your Ride",
    description: "Ride to your destination with electric-powered assistance",
    icon: Bike,
    color: "bg-cycle-green-100 text-cycle-green-600"
  },
  {
    title: "Return & Lock",
    description: "Park at any designated station and end your rental in the app",
    icon: Zap,
    color: "bg-amber-100 text-amber-600"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Renting an electric cycle has never been easier. Follow these simple steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 relative transition-transform hover:-translate-y-1 duration-300">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cycle-green-600 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-cycle-green-50 rounded-lg p-8 shadow-inner">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-gray-600">Download our app to start riding today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 3a2.5 2.5 0 0 1 2.5 2.5v13a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 5 18.5v-13A2.5 2.5 0 0 1 7.5 3Z"></path>
                    <path d="M12 17.5v.01"></path>
                    <path d="M8 6h8"></path>
                  </svg>
                </span>
                <span>
                  <span className="text-xs block">Download on the</span>
                  <span className="font-semibold">App Store</span>
                </span>
              </button>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-6 9 6-9 6Z"></path>
                    <path d="m3 9 9 6 9-6"></path>
                    <path d="M3 9v6l9 6"></path>
                    <path d="M21 9v6l-9 6"></path>
                  </svg>
                </span>
                <span>
                  <span className="text-xs block">GET IT ON</span>
                  <span className="font-semibold">Google Play</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
