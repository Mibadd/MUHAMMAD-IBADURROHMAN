import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ContactSection = ({ setActiveLink }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setActiveLink('#kontak');
        }
    }, [inView, setActiveLink]);

    return (
        <section
            id="kontak"
            ref={ref}
            className={`bg-stone-100 py-20 transition-all duration-700 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-serif text-4xl font-extrabold text-stone-800">Hubungi Saya</h2>
                <p className="font-sans mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
                    Punya ide proyek atau pertanyaan? Saya siap membantu. Isi formulir di bawah ini atau hubungi saya melalui email dan WhatsApp.
                </p>

                <div className="mt-10 max-w-xl mx-auto">
                    <form action="https://api.web3forms.com/submit" method="POST" className="text-left">
                        <input type="hidden" name="access_key" value="49d3e5dc-81a9-4be9-b7d0-e6372daf4558" />
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 text-sm font-semibold font-sans text-stone-600">Nama</label>
                            <input type="text" id="name" name="name" required className="font-sans w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-semibold font-sans text-stone-600">Alamat Email</label>
                            <input type="email" id="email" name="email" required className="font-sans w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-semibold font-sans text-stone-600">Pesan</label>
                            <textarea id="message" name="message" rows="4" required className="font-sans w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="font-sans w-full px-8 py-3 bg-amber-600 text-white font-bold rounded-lg shadow-lg hover:bg-amber-700 transition-all duration-300">
                                Kirim Pesan
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-12">
                    <p className="font-sans text-stone-600">Atau hubungi saya langsung melalui:</p>
                    <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
                        <a
                            href="mailto:mhmmdibad22@gmail.com"
                            className="font-sans w-full md:w-auto px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition-all duration-300"
                        >
                            Email
                        </a>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-sans w-full md:w-auto px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;