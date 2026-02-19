import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - PT. Medigas',
  description: 'Hubungi PT. Multi Gas Medika untuk konsultasi kebutuhan oksigen medis Anda.',
};

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 dividing-y dividing-gray-200 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
              <p className="mt-4 leading-7 text-gray-600">
                Hubungi kami untuk mendapatkan penawaran terbaik atau konsultasi teknis mengenai sistem gas medis.
              </p>
              
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <MapPin className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    Jl. Rawa Terate II No.6<br />Jakarta Timur, 13920
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href="tel:+62214602345">
                      (021) 460 2345
                    </a>
                     <br />
                    <a className="hover:text-gray-900" href="tel:+6281119221718">
                      0811-1922-1718 (WA)
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href="mailto:info@medigas.co.id">
                      info@medigas.co.id
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            
            {/* Contact Form */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-2 lg:gap-x-10">
                <div className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold mb-6">Kirim Pesan</h3>
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                        <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Nama Lengkap
                        </label>
                        <div className="mt-2.5">
                            <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            placeholder='Nama Anda'
                            />
                        </div>
                        </div>
                        <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                             placeholder='email@contoh.com'
                            />
                        </div>
                        </div>
                         <div>
                        <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                            Nomor Telepon
                        </label>
                        <div className="mt-2.5">
                            <input
                            type="tel"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                             placeholder='0812...'
                            />
                        </div>
                        </div>
                        <div>
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Pesan
                        </label>
                        <div className="mt-2.5">
                            <textarea
                            name="message"
                            id="message"
                            rows={4}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            defaultValue={''}
                             placeholder='Tulis pesan Anda disini...'
                            />
                        </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                        <button
                            type="button"
                            className="rounded-md bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
                        >
                            Kirim Pesan
                        </button>
                        </div>
                    </form>
                </div>
                
                {/* Map */}
                 <div className="bg-gray-200 rounded-2xl overflow-hidden h-full min-h-[300px]">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.71714092591!2d106.91437!3d-6.20812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b3bd2b1b1b1%3A0x1234567890abcdef!2sJl.%20Rawa%20Terate%20II%20No.6%2C%20Jatinegara%2C%20Kec.%20Cakung%2C%20Kota%20Jakarta%20Timur!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        className="w-full h-full"
                        allowFullScreen 
                        loading="lazy"
                    ></iframe>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
