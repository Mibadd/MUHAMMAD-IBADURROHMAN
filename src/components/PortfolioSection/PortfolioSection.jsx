import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import serviceKendaraanImg from '../../assets/images/Service-kendaraan.png';
import parkirKendaraanImg from '../../assets/images/Parkir.png';
import todoListImg from '../../assets/images/to-do list.png';


const PortfolioSection = ({ setActiveLink }) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: false,
    });

    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (inView) {
            setActiveLink('#portofolio');
        }
    }, [inView, setActiveLink]);

    const portfolio = [
        {
            id: 1,
            title: 'Service Kendaraan',
            description: 'Mendigitalkan proses servis untuk meningkatkan efisiensi bengkel dan kepuasan pelanggan.',
            imageUrl: serviceKendaraanImg,
            link: 'https://github.com/Mibadd/Service-Kendaraan.git',
            longDescription: 'Aplikasi ini dirancang untuk menggantikan pencatatan manual di bengkel, memungkinkan manajemen data servis dan antrian pelanggan yang lebih cepat dan akurat. Tujuannya adalah mengurangi waktu tunggu pelanggan dan mempermudah mekanik dalam melacak riwayat servis kendaraan.',
            tags: ['PHP', 'MySQL', 'Bootstrap'],
        },
        {
            id: 2,
            title: 'ParkEase',
            description: 'Mempermudah pencarian parkir real-time melalui aplikasi mobile yang terintegrasi.',
            imageUrl: parkirKendaraanImg,
            link: 'https://github.com/Mibadd/ParkEase.git',
            longDescription: 'ParkEase mengatasi masalah sulitnya mencari tempat parkir dengan menyediakan platform bagi pengguna untuk menemukan dan memesan slot parkir secara efisien. Sebagai Backend Developer, saya membangun API yang andal untuk memastikan sinkronisasi data ketersediaan parkir berjalan secara real-time.',
            imageStyle: 'contain',
            tags: ['Java', 'Firebase'],
        },
        {
            id: 3,
            title: 'Aplikasi To-Do List',
            description: 'Meningkatkan produktivitas harian dengan antarmuka manajemen tugas yang intuitif.',
            imageUrl: todoListImg,
            link: 'https://github.com/Mibadd/To-do-List.git',
            longDescription: 'Aplikasi To-Do List ini dirancang dengan fokus pada kesederhanaan dan kemudahan penggunaan, membantu pengguna untuk tetap terorganisir dan fokus pada tugas terpenting mereka. Proyek ini menunjukkan kemampuan saya dalam membangun aplikasi CRUD (Create, Read, Update, Delete) yang fungsional dan responsif.',
            tags: ['Vue', 'JavaScript', 'Tailwind CSS'],
        },
    ];


    const containerVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <>
            <motion.section
                id="portofolio"
                ref={ref}
                className="py-50 bg-gradient-to-br from-stone-50 to-stone-200 overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="w-20 h-1 bg-amber-500 mx-auto mb-4 rounded"></div>
                        <h2 className="font-serif text-4xl font-extrabold text-stone-800">Portofolio Proyek</h2>
                        <p className="font-sans mt-4 text-lg text-stone-600">Beberapa proyek yang telah saya kerjakan.</p>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {portfolio.map((item) => (
                            <motion.div key={item.id} variants={itemVariants} className="bg-slate-50 rounded-xl shadow-md overflow-hidden flex flex-col">
                                <div className="w-full h-56 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className={`
                                            ${item.imageStyle === 'contain'
                                                ? 'object-contain h-full w-auto'
                                                : 'object-cover w-full h-full'}
                                        `}
                                    />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="font-serif text-2xl font-bold text-stone-800 mb-2">{item.title}</h3>
                                    <p className="font-sans text-stone-600 mb-4">{item.description}</p>
                                    <div className="mt-auto">
                                        <button
                                            onClick={() => setSelectedProject(item)}
                                            className="w-full font-sans px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700"
                                        >
                                            Detail Proyek
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    );
};

export default PortfolioSection;