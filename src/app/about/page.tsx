import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Target, Rocket, Award, Phone, Hospital, Settings, Wind, Headset } from "lucide-react";

export const metadata = {
  title: 'About Us - PT. Medigas',
  description: 'Mengenal lebih dekat PT. Multi Gas Medika, penyedia solusi oksigen medis terpercaya di Indonesia.',
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white bg-gray-900">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-slate-900/75 z-10" />
            <Image
                src="/images/hero-bg.png" 
                alt="About Hero"
                fill
                className="object-cover"
                priority
            />
        </div>
        <div className="relative z-20 max-w-4xl px-4 animate-fade-in-up">
            <span className="text-accent font-semibold tracking-[2px] uppercase mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Membangun Kemandirian<br/>Oksigen Medis Indonesia</h1>
            <p className="text-xl opacity-90 font-light">Mitra terpercaya bagi fasilitas kesehatan dalam penyediaan Oksigen Generator berkualitas tinggi dan efisien.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                         <div className="absolute inset-0 bg-accent/20 z-10 mix-blend-overlay"></div>
                         <Image 
                            src="/images/about-bg.png"
                            alt="Medigas Installation"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                         />
                    </div>
                    {/* Decorative Background Element */}
                    <div className="absolute -top-5 -left-5 w-full h-full bg-accent/20 rounded-3xl -z-10 hidden lg:block"></div>
                </div>
                
                <div>
                     <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-4">
                        Siapa Kami
                    </span>
                    <h2 className="text-4xl font-bold text-text-main mb-6 leading-tight">
                        Solusi Cerdas untuk Kebutuhan Oksigen Rumah Sakit
                    </h2>
                    <div className="space-y-5 text-gray-600 text-lg text-justify leading-relaxed">
                        <p>
                            PT. Multi Gas Medika hadir sebagai jawaban atas tantangan ketersediaan oksigen medis yang sering dihadapi fasilitas kesehatan. Melalui sistem <strong>Kerjasama Operasi (KSO)</strong>, kami menyediakan unit penghasil oksigen medis (PSA) tanpa membebani rumah sakit dengan biaya investasi awal.
                        </p>
                        <p>
                            Kami telah dipercaya oleh lebih dari 80 RSUD untuk mentransformasi sistem gas medis mereka menjadi mandiri, efisien, dan tidak lagi bergantung pada pasokan eksternal yang fluktuatif.
                        </p>
                    </div>
                    
                    <div className="mt-8 border-l-4 border-accent pl-6 py-2">
                        <p className="font-semibold text-text-main italic text-lg">
                            "Misi kami adalah menjamin tidak ada pasien yang kekurangan oksigen karena masalah distribusi."
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Stats Section (Custom for About) */}
      <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  {[
                      { icon: Hospital, count: "80+", label: "RSUD Bekerjasama" },
                      { icon: Settings, count: "100+", label: "Mesin Beroperasi" },
                      { icon: Wind, count: "90%+", label: "Kemurnian Oksigen" },
                      { icon: Headset, count: "24/7", label: "Dukungan Teknis" },
                  ].map((stat, idx) => (
                      <div key={idx} className="p-5 hover:-translate-y-2 transition-transform duration-300">
                          <stat.icon className="mx-auto h-10 w-10 text-accent mb-4 opacity-90" />
                          <div className="text-5xl font-bold mb-2">{stat.count}</div>
                          <div className="font-medium opacity-90">{stat.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Quality Section */}
      <section className="py-24 bg-bg-light text-center">
          <div className="max-w-3xl mx-auto px-4">
             <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-4">
                Standar Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                Kualitas Tanpa Kompromi untuk Keselamatan Pasien
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Oksigen adalah elemen vital. Mesin kami didesain presisi untuk beroperasi 24 jam nonstop dengan output kemurnian stabil {'>'}90%, sepenuhnya mematuhi <strong>Permenkes No. 4 Tahun 2016</strong>.
            </p>
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm text-primary font-bold">
                <CheckCircle className="text-accent" />
                Medical Grade Certified
            </div>
          </div>
      </section>

      {/* Visi Misi */}
      <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Visi */}
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                        <Target size={30} />
                    </div>
                    <h3 className="text-2xl font-bold text-text-main mb-4">Visi Kami</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Memberikan solusi terbaik dalam sistem gas medis, terus berinovasi, serta menciptakan <strong>independensi total</strong> bagi rumah sakit dalam pemenuhan kebutuhan gas medisnya.
                    </p>
                </div>

                {/* Misi */}
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 text-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                         <Rocket size={30} />
                    </div>
                    <h3 className="text-2xl font-bold text-text-main mb-4">Misi Kami</h3>
                    <ul className="space-y-4">
                        {[
                            "Memberikan alternatif pasokan oksigen yang ekonomis.",
                            "Mempromosikan standar internasional gas medis.",
                            "Mengembangkan teknologi terbaik untuk kesehatan Indonesia.",
                            "Menjadikan RSUD sebagai sentral pemenuhan gas medis wilayah."
                        ].map((misi, i) => (
                            <li key={i} className="flex gap-3 text-gray-600">
                                <Award className="text-accent mt-1 flex-shrink-0" size={20} />
                                <span>{misi}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
      </section>

      {/* CTA reused */}
      <section className="py-20 bg-gradient-to-br from-primary to-[#002d5e] text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Menjadi Rumah Sakit Mandiri?</h2>
             <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Diskusikan kebutuhan oksigen Anda dengan tim ahli kami. Tanpa biaya investasi awal.</p>
             <div className="flex flex-col sm:flex-row gap-5 justify-center">
                 <Link href="https://wa.me/6281119221718" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
                     Chat WhatsApp
                 </Link>
                 <Link href="tel:0214602345" className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                     <Phone size={20} /> Hubungi Kantor
                 </Link>
             </div>
        </div>
      </section>
    </div>
  );
}
