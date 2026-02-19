import Image from 'next/image';

const TechInfo = () => {
  return (
    <div className="overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-secondary tracking-wide uppercase">Technical Info</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Sistem PSA (Pressure Swing Adsorption)
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Sistem Pressure Swing Adsorption (PSA) adalah teknologi yang digunakan PT. Medigas Solusi Indonesia untuk memproduksi Oksigen dengan proses pemisahan oksigen dari udara terkompresi.
              </p>
              <div className="mt-8 space-y-4 text-gray-600">
                 <p>
                    PSA ini diakui sebagai salah satu metode paling efisien yang digunakan untuk memproduksi oksigen.
                    Proses ini menggunakan adsorben (Zeolite Molecular Sieve) untuk menyerap nitrogen dari udara pada tekanan tinggi, sehingga menghasilkan oksigen dengan kemurnian tinggi.
                 </p>
                 <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-primary">
                    <li className="pl-2">Efisiensi Tinggi</li>
                    <li className="pl-2">Biaya Operasional Rendah</li>
                    <li className="pl-2">Produksi On-Site (Mandiri)</li>
                    <li className="pl-2">Otomatisasi Penuh</li>
                 </ul>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center lg:justify-end">
            <div className="relative w-full max-w-xl rounded-2xl shadow-2xl ring-1 ring-gray-900/10 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                    src="https://placehold.co/800x600/e2e8f0/0056b3?text=PSA+System+Diagram"
                    alt="PSA System Diagram"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                />
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechInfo;
