import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Intro = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <Image
                    src="/images/about-bg.png" /* Using standard generated asset */
                    alt="Mesin Oksigen Medis"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                />
             </div>
             {/* Decorative element if needed, matching custom CSS from html? */}
          </div>
          
          <div>
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
                Teknologi PSA Modern
            </span>
            <h2 className="text-4xl font-bold text-text-main mb-6">
                Oksigen (O2) Generator
            </h2>
            <div className="space-y-6 text-text-light text-lg text-justify leading-relaxed">
                <p>
                    PT. Multi Gas Medika menawarkan alternatif dan solusi terhadap pemecahan permasalahan supply oksigen medis di Indonesia menggunakan sistem <strong>Pressure Swing Adsorption (PSA)</strong>.
                </p>
                <p>
                    Kami mentransformasi rumah sakit umum daerah menjadi unit pelayanan kesehatan yang mandiri dan independen dalam pemenuhan kebutuhannya, tanpa bergantung pada supplier luar.
                </p>
            </div>
            
            <div className="mt-8">
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                    Baca Selengkapnya <ArrowRight size={18} />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
