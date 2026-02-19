'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import TopBar from './TopBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <TopBar />
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <div className="relative h-10 w-32">
                  <Image
                    src="/images/logo-white.png" 
                    alt="MEDIGAS"
                    fill
                    className="object-contain filter " 
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-baseline space-x-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.path}
                    className="text-text-main hover:text-primary font-semibold text-[0.95rem] transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Link
                href="https://wa.me/6281119221718"
                className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-transparent hover:text-primary border-2 border-transparent hover:border-primary transition-all duration-300"
              >
                Hubungi Sekarang
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-text-main hover:text-primary focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.path}
                  className="block text-text-main hover:text-primary px-3 py-3 rounded-md text-base font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="https://wa.me/6281119221718"
                  className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Hubungi Sekarang
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
