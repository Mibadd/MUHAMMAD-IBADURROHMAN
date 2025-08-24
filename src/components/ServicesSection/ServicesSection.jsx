import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ServicesSection = ({ setActiveLink }) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: false, // Animasi hanya akan berjalan sekali
    });

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

    // Varian untuk seksi, meluncur dari KIRI
    const containerVariants = {
        hidden: { opacity: 0, x: -100 }, // Mengubah x: 100 menjadi x: -100
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2, // Efek stagger untuk setiap kartu
            },
        },
    };

    // Varian untuk setiap kartu, muncul dari bawah (sama seperti di PortfolioSection)
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.section
            id="layanan"
            ref={ref}
            className="bg-white py-20 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="w-20 h-1 bg-amber-500 mx-auto mb-4 rounded"></div>
                    <h2 className="font-serif text-4xl font-extrabold text-stone-800">Layanan yang Saya Tawarkan</h2>
                    <p className="font-sans mt-4 text-lg text-stone-600">Saya dapat membantu Anda membangun produk digital dari awal hingga akhir.</p>
                </div>
                {/* Grid sekarang menjadi motion.div untuk mengontrol stagger */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants} // Meneruskan varian
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={itemVariants} // Setiap kartu menerapkan itemVariants
                            className="group" style={{ perspective: '1000px' }}
                        >
                            <div className="relative bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-500 ease-in-out group-hover:rotate-y-6" style={{ transformStyle: 'preserve-3d' }}>
                                <div className="flex justify-center mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                                    {service.icon}
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-stone-800 mb-3">{service.title}</h3>
                                <p className="font-sans text-stone-600 text-base">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ServicesSection;