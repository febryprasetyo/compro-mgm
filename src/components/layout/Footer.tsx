import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-[#94a3b8] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-5">
               <Image 
                 src="/images/logo-white.png" 
                 alt="MEDIGAS Logo" 
                 width={150} 
                 height={50} 
                 className="h-auto w-auto"
               />
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              World Class Oxygen Provider Indonesia. Menjawab kebutuhan fasilitas pelayanan kesehatan akan ketersediaan oksigen medis secara berkesinambungan.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Menu</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="text-sm hover:text-accent transition-colors">
                        {item}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-1 flex-shrink-0" />
                    <span>Jl. Rawa Terate II No.6, Jakarta Timur</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone size={18} className="flex-shrink-0" />
                    <a href="tel:0214602345" className="hover:text-accent transition-colors">(021) 460 2345</a>
                </li>
                <li className="flex items-center gap-3">
                    <Mail size={18} className="flex-shrink-0" />
                    <a href="mailto:info@medigas.co.id" className="hover:text-accent transition-colors">info@medigas.co.id</a>
                </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe untuk update terbaru.</p>
            <form className="flex">
                <input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="w-full px-4 py-2 rounded-l-md bg-white text-gray-900 focus:outline-none text-sm"
                />
                <button 
                    type="button"
                    className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-r-md transition-colors"
                >
                    <Send size={18} />
                </button>
            </form>
            <p className="text-xs mt-3 text-slate-500">* We never spam.</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} PT. Multi Gas Medika. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
