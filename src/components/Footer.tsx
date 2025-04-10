
import React from 'react';
import { Bike, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Bike className="h-7 w-7 text-cycle-green-400" />
              <span className="text-xl font-bold">CampusCycle</span>
            </div>
            <p className="text-gray-400 mb-4">
              Eco-friendly electric cycle rentals for university students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#map" className="text-gray-400 hover:text-white transition-colors">Find a Bike</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-cycle-green-400 mr-3 mt-0.5" />
                <span className="text-gray-400">University Campus, Building 5, Suite 201</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-cycle-green-400 mr-3" />
                <a href="mailto:info@campuscycle.com" className="text-gray-400 hover:text-white transition-colors">
                  info@campuscycle.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-cycle-green-400 mr-3" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Operating Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>24 hours</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>24 hours</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>24 hours</span>
              </li>
              <li className="mt-4 text-sm">
                <span className="block font-medium text-cycle-green-400 mb-1">Customer Support:</span>
                <span>8:00 AM - 8:00 PM Daily</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} CampusCycle. All rights reserved.</p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
