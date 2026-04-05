"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Electrical Services', href: '/services/electrical' },
    { name: 'Appliance Repair', href: '/services/appliances' },
    { name: 'CCTV Camera Service', href: '/services/cctv' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md" role="banner">
      <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section - Brand Keyword in Title */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              title="NABHKAS Private Limited - Home"
              className="text-2xl font-black tracking-tighter text-blue-900"
            >
              NABHKAS<span className="text-orange-500">.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="tel:+91XXXXXXXXXX" 
              aria-label="Call Emergency Electrical Service"
              className="bg-red-600 text-white px-5 py-2.5 rounded-full flex items-center gap-2 font-bold hover:bg-red-700 transition-all animate-pulse"
            >
              <Phone size={18} aria-hidden="true" /> Emergency
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => {
                console.log("OLD STATE:"+ isOpen);
                setIsOpen(!isOpen);
              }
              } 
              className="text-blue-900 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block text-xl font-semibold text-gray-800 border-b pb-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;