import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links Data
  const navLinks = [
    { name: 'Home', href: '/', isExternal: false },
    { name: 'About Us', href: '#about', isExternal: false },
    { name: 'Recruiters', href: '#recruiters', isExternal: false },
    { name: 'Students', href: '#students', isExternal: false },
    { name: 'Contact', href: '#contact', isExternal: false },
    { name: 'College Website', href: 'https://www.gecjehanabad.ac.in', isExternal: true },
  ];

  return (
    <nav className="w-full bg-white border-b border-slate-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* 1. Brand Logo & Name */}
          <a href="#home" className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 rounded flex items-center justify-center mr-3">
              <img src="src/assets/images/logo.png" alt="GECJ Logo" className="object-contain" />
            </div>
            <span className="text-xl font-black text-slate-800 tracking-tighter group-hover:text-blue-900 transition-colors">
              GEC<span className="text-blue-700">JEHANABAD</span>
            </span>
          </a>

          {/* 2. Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : ""}
                className={`text-[13px] font-bold uppercase tracking-wider transition-all duration-200 ${
                  link.isExternal 
                    ? 'text-orange-600 hover:text-orange-700' 
                    : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Login Button */}
            <button className="ml-4 bg-blue-900 text-white px-6 py-2 rounded font-bold text-sm hover:bg-blue-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              LOGIN
            </button>
          </div>

          {/* 3. Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-700 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Sidebar Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
              target={link.isExternal ? "_blank" : "_self"}
              rel={link.isExternal ? "noopener noreferrer" : ""}
              className={`block text-sm font-bold p-2 rounded-md ${
                link.isExternal ? 'text-orange-600' : 'text-slate-700 hover:bg-slate-50 hover:text-blue-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-4 bg-blue-900 text-white py-3 rounded font-bold shadow-md active:scale-95 transition-transform">
            LOGIN
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;