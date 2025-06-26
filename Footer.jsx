import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        
        <div>
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Shop Site</h2>
          <p className="text-sm text-gray-400 mb-4">
            Trendy fashion for Men, Women, and Kids. Discover style, comfort, and quality.
          </p>
          
          
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-orange-400" />
              <span>123 Fashion St, Style City</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2 text-orange-400" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-orange-400" />
              <span>support@shopsite.com</span>
            </div>
          </div>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
            <li><Link to="/men" className="hover:text-orange-400 transition-colors">Men</Link></li>
            <li><Link to="/women" className="hover:text-orange-400 transition-colors">Women</Link></li>
            <li><Link to="/kids" className="hover:text-orange-400 transition-colors">Kids</Link></li>
            <li><Link to="/cart" className="hover:text-orange-400 transition-colors">Cart</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact" className="hover:text-orange-400 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="/faq" className="hover:text-orange-400 transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-orange-400 transition-colors">
                Shipping Information
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-orange-400 transition-colors">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/size-guide" className="hover:text-orange-400 transition-colors">
                Size Guide
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl mb-4">
            <a 
              href="https://facebook.com/shopsite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://twitter.com/shopsite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://instagram.com/shopsite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://youtube.com/shopsite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="mt-4">
            <h4 className="font-medium mb-2">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe for updates and exclusive offers
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
              />
              <button 
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="pt-6 pb-4 px-6">
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-4">
            We accept the following payment methods:
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <img
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="Visa"
              className="h-8 cursor-pointer hover:scale-105 transition"
            />
            <img
              src="https://img.icons8.com/color/48/000000/mastercard.png"
              alt="MasterCard"
              className="h-8 cursor-pointer hover:scale-105 transition"
            />
            <img
              src="https://img.icons8.com/color/48/000000/paypal.png"
              alt="PayPal"
              className="h-8 cursor-pointer hover:scale-105 transition"
            />
            <img
              src="https://img.icons8.com/color/48/000000/amex.png"
              alt="Amex"
              className="h-8 cursor-pointer hover:scale-105 transition"
            />
            <img
              src="https://img.icons8.com/color/48/000000/apple-pay.png"
              alt="Apple Pay"
              className="h-8 cursor-pointer hover:scale-105 transition"
            />
            <img
              src="https://img.icons8.com/color/48/000000/google-pay.png"
              alt="Google Pay"
              className="h-8 cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

    
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 py-4">
        &copy; {new Date().getFullYear()} Shop Site. All rights reserved.
      </div>
    </footer>
  );
}