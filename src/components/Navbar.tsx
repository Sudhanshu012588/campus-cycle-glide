
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Bike } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Bike className="h-8 w-8 text-cycle-green-600" />
            <span className="text-xl font-bold">CampusCycle</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-cycle-green-600 transition-colors">
              How It Works
            </a>
            <a href="#map" className="text-gray-700 hover:text-cycle-green-600 transition-colors">
              Find a Bike
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-cycle-green-600 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-gray-700 hover:text-cycle-green-600 transition-colors">
              FAQ
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Log In</Button>
            <Button className="bg-cycle-green-600 hover:bg-cycle-green-700">Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#map" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Find a Bike
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full">Log In</Button>
              <Button className="w-full bg-cycle-green-600 hover:bg-cycle-green-700">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
