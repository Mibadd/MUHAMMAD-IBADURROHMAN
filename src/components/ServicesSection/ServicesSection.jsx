import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Terima 'setActiveLink' sebagai prop
const ServicesSection = ({ setActiveLink }) => {
    const { ref, inView } = useInView({
        threshold: 0.5, // Memicu saat 50% dari seksi terlihat
    });

    // Gunakan useEffect untuk memberi tahu App.jsx saat seksi ini terlihat
    useEffect(() => {
        if (inView) {
            setActiveLink('#layanan');
        }
    }, [inView, setActiveLink]);

    const services = [
        {
            icon: (
                <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            ),
            title: 'Front-End Development',
            description: 'Membangun antarmuka pengguna yang responsif, interaktif, dan modern menggunakan teknologi terbaru seperti React dan Tailwind CSS.',
        },
        {
            icon: (
                <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
            ),
            title: 'Back-End Development',
            description: 'Mengembangkan sisi server aplikasi dengan logika bisnis yang kuat, API, dan manajemen database menggunakan PHP, Laravel, atau Node.js.',
        },
        {
            icon: (
                <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
            ),
            title: 'Cloud & DevOps',
            description: 'Mempublikasikan dan mengelola aplikasi di platform cloud, serta mengimplementasikan alur kerja CI/CD.',
        },
    ];

    return (
        <section
            id="layanan"
            ref={ref}
            className={`bg-stone-50 py-20 transition-all duration-700 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="w-20 h-1 bg-amber-500 mx-auto mb-4 rounded"></div>
                    <h2 className="font-serif text-4xl font-extrabold text-stone-800">Layanan yang Saya Tawarkan</h2>
                    <p className="font-sans mt-4 text-lg text-stone-600">Saya dapat membantu Anda membangun produk digital dari awal hingga akhir.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service) => (
                        // Pembungkus untuk perspektif 3D dan hover group
                        <div key={service.title} className="group" style={{ perspective: '1000px' }}>
                            {/* Efek Glow di Belakang SUDAH DIHAPUS */}

                            {/* Kartu Konten */}
                            <div className="relative bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-500 ease-in-out group-hover:rotate-y-6" style={{ transformStyle: 'preserve-3d' }}>
                                <div className="flex justify-center mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                                    {service.icon}
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-stone-800 mb-3">{service.title}</h3>
                                <p className="font-sans text-stone-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;