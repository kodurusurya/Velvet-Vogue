import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">VELVET VOGUE</h3>
            <p className="text-gray-400">
              Luxury fashion for the modern connoisseur
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="/new-arrivals" className="text-gray-400 hover:text-white">New Arrivals</a></li>
              <li><a href="/bestsellers" className="text-gray-400 hover:text-white">Bestsellers</a></li>
              <li><a href="/collections" className="text-gray-400 hover:text-white">Collections</a></li>
              <li><a href="/sale" className="text-gray-400 hover:text-white">Sale</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="/shipping" className="text-gray-400 hover:text-white">Shipping</a></li>
              <li><a href="/returns" className="text-gray-400 hover:text-white">Returns</a></li>
              <li><a href="/sizing" className="text-gray-400 hover:text-white">Sizing Guide</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-lg font-medium mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="/our-story" className="text-gray-400 hover:text-white">Our Story</a></li>
              <li><a href="/sustainability" className="text-gray-400 hover:text-white">Sustainability</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="/press" className="text-gray-400 hover:text-white">Press</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Velvet Vogue. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;