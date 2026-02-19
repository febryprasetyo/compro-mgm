import { 
  HandCoins, 
  Building2, 
  Leaf, 
  FileText, 
  Users, 
  Plug 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'Bebas Biaya Investasi',
      description: 'Tidak ada biaya investasi mesin, maintenance, service, dan penggantian sparepart bagi Rumah Sakit.',
      icon: HandCoins,
    },
    {
      name: 'Mandiri & Independen',
      description: 'Rumah sakit tidak lagi bergantung dengan supplier luar dan menjadi mandiri dalam memenuhi kebutuhan oksigen.',
      icon: Building2,
    },
    {
      name: 'Kemurnian >90%',
      description: 'Kualitas kemurnian oksigen >90% dengan mesin kompresor bebas pelumas, sesuai syarat Permenkes.',
      icon: Leaf,
    },
    {
      name: 'Kerjasama Fleksibel',
      description: 'Kontrak kerjasama yang fleksibel. Mesin dapat di-upgrade apabila kapasitas produksi sudah tidak mencukupi.',
      icon: FileText,
    },
    {
      name: 'Bebas Penggunaan',
      description: 'Bebas penggunaan untuk kebutuhan rumah sakit sendiri maupun kebutuhan fasilitas kesehatan sekitar.',
      icon: Users,
    },
    {
      name: 'Plug and Play',
      description: 'Mesin produksi oksigen ditempatkan dalam container yang mudah dipindahkan dengan sistem plug and play.',
      icon: Plug,
    },
  ];

  return (
    <section id="features" className="bg-bg-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
            Why You Choose Us
          </span>
          <h2 className="text-4xl font-bold text-text-main">
            Keunggulan Layanan Kami
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-primary transition-all duration-300 group h-full">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary text-3xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors">
                {feature.name}
              </h3>
              <p className="text-text-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
