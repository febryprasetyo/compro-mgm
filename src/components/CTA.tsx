import Link from 'next/link';
import { Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-[#002B6B] text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Siap Meningkatkan Efisiensi Rumah Sakit?
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light">
          Kami dengan senang hati memberikan dukungan penuh kami melalui kontrak pemeliharaan atau layanan sesuai permintaan yang fleksibel.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            href="https://wa.me/6281119221718"
            className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
          >
            Chat WhatsApp
          </Link>
          <a
            href="tel:0214602345"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Phone size={20} /> (021) 460 2345
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
