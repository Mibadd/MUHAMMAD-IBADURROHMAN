import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SkillsSection = ({ setActiveLink }) => {
    // Data technologies tidak berubah
    const technologies = {
        languages: [
            { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
            { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        ],
        frameworks: [
            { name: 'CodeIgniter 4', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
            { name: 'Laravel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
            { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        ]
    };

    const allTech = [...technologies.languages, ...technologies.frameworks];

    const { ref, inView } = useInView({
        threshold: 0.2, // Atur threshold agar animasi terpicu lebih awal
        triggerOnce: false, // Animasi hanya berjalan sekali
    });

    useEffect(() => {
        if (inView) {
            setActiveLink('#keahlian');
        }
    }, [inView, setActiveLink]);

    // 2. Definisikan varian untuk kontainer (pembungkus) dan item (ikon)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Beri jeda 0.1 detik untuk setiap item
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 }, // Mulai dari bawah dan transparan
        visible: {
            y: 0,
            opacity: 1, // Selesai di posisi asli dan terlihat penuh
        },
    };

    return (
        // 3. Ubah <section> menjadi <motion.section> dan hapus kelas transisi CSS
        <motion.section
            id="keahlian"
            ref={ref}
            className="bg-stone-50 py-20 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl font-extrabold text-stone-800">
                        Teknologi yang Saya Kuasai
                    </h2>
                    <p className="font-sans mt-4 text-lg text-stone-600">
                        Beberapa teknologi dan alat yang saya gunakan dalam pengembangan web.
                    </p>
                </div>
                {/* 4. Gunakan motion.div sebagai pembungkus untuk menerapkan varian */}
                <motion.div
                    className="flex flex-wrap justify-center items-center gap-x-10 gap-y-12 md:gap-x-16"
                    variants={containerVariants} // Terapkan varian kontainer di sini
                >
                    {allTech.map((tech) => (
                        // 5. Setiap ikon sekarang adalah motion.div dengan varian item
                        <motion.div
                            key={tech.name}
                            className="flex flex-col items-center gap-3 text-center transition-transform duration-300 hover:scale-110"
                            title={tech.name}
                            variants={itemVariants} // Terapkan varian item
                        >
                            <img
                                src={tech.iconUrl}
                                alt={tech.name}
                                className="h-20 w-20 md:h-24 md:w-24"
                            />
                            <span className="font-sans font-semibold text-stone-700">{tech.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default SkillsSection;