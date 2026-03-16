'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Appointment', href: '#appointment' },
    { name: 'Contact', href: '#contact' },
    { name: 'Admin', href: '/admin' },
  ];

  return (
    <header className="w-full bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 min-w-0">
          <Image
            src="/images/gallery/logo.jpg"
            alt="RORX Clinic Logo"
            width={40}
            height={40}
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full flex-shrink-0 object-cover"
            priority
          />
          <div className="min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900 truncate">RORX Clinic</h1>
            <p className="text-xs text-gray-500 hidden sm:block">Healthcare Excellence</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200 text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919720381049"
            className="hidden md:inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-5 rounded-lg transition duration-200"
          >
            Call Now
          </a>
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919720381049"
              className="w-full inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mt-4"
            >
              Call Now
            </a>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mt-4">
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
