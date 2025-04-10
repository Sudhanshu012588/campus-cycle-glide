
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Zap, Clock, Bike } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Eco-Friendly Rides <span className="text-cycle-green-600">Across Campus</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Quick, convenient electric cycles for students to navigate university grounds effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-cycle-green-600 hover:bg-cycle-green-700 text-lg px-6 py-6">
                Rent a Cycle <ChevronRight className="ml-2" />
              </Button>
              <Button variant="outline" className="text-lg px-6 py-6">
                Learn More
              </Button>
            </div>
            
            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-cycle-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Multiple Stations</h3>
                  <p className="text-gray-600 text-sm">Located all around campus</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-6 w-6 text-cycle-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Electric Power</h3>
                  <p className="text-gray-600 text-sm">Effortless riding experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-cycle-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">24/7 Availability</h3>
                  <p className="text-gray-600 text-sm">Ready whenever you need</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="md:w-1/2 relative">
            <div className="bg-cycle-green-100 rounded-xl p-4">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-cycle-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Available Now
                </div>
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Bike className="h-24 w-24 mx-auto text-cycle-green-600 mb-4" />
                    <p className="text-gray-500">Electric Bike Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Standard E-Cycle</h3>
                  <p className="text-gray-600 mb-4">Our most popular model for quick campus commutes</p>
                  <div className="flex justify-between items-center">
                    <span className="text-cycle-green-600 font-bold">$2/hour</span>
                    <Button size="sm" className="bg-cycle-green-600 hover:bg-cycle-green-700">
                      Find Nearby
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-cycle-green-500/10 rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
