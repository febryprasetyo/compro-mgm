import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary-dark text-white py-2.5 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
        <span>Jl. Rawa Terate II No.6, Jakarta Timur</span>
        <div className="flex gap-5">
          <a href="mailto:info@medigas.co.id" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={14} />
            <span>info@medigas.co.id</span>
          </a>
          <a href="tel:0214602345" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={14} />
            <span>(021) 460 2345</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
