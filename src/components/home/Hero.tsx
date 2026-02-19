'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <header className="relative h-[85vh] min-h-[600px] flex items-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#002B6B]/90 to-[#002B6B]/40 z-10" />
            <Image
            src="/images/hero-bg.png"
            alt="Medigas Oxygen Generator System"
            fill
            className="object-cover"
            priority
            quality={100}
            />
        </div>

      <div className="relative z-20 container mx-auto px-4 max-w-7xl">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full font-semibold text-accent text-sm tracking-widest uppercase mb-5">
                World Class Oxygen Provider Indonesia
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
              Solusi Ketersediaan<br />
              Oksigen Medis Terpercaya
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 font-light mb-10 leading-relaxed"
          >
            PT. Multi Gas Medika hadir untuk menjamin ketersediaan oksigen medis secara berkesinambungan melalui penyediaan Oksigen Generator dengan metode Kerjasama Operasi (KSO).
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#features"
              className="px-8 py-4 rounded-full font-semibold bg-primary text-white hover:bg-transparent hover:text-primary border-2 border-transparent hover:border-primary transition-all duration-300"
            >
              Pelajari Layanan
            </Link>
            <a
              href="tel:0214602345"
              className="px-8 py-4 rounded-full font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              (021) 460 2345
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
