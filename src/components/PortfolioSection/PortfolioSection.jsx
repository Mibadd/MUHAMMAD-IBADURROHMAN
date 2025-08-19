import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectModal from './ProjectModal';

// Impor semua gambar proyek
import serviceKendaraanImg from '../../assets/images/Service-kendaraan.png';
import parkirKendaraanImg from '../../assets/images/Parkir.png';
import todoListImg from '../../assets/images/to-do list.png';

const PortfolioSection = ({ setActiveLink }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
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
            description: 'Aplikasi manajemen untuk layanan servis kendaraan.',
            imageUrl: serviceKendaraanImg,
            link: 'https://github.com/Mibadd/Service-Kendaraan.git',
            longDescription: 'Proyek ini dibangun untuk mempermudah bengkel dalam mengelola data servis dan antrian pelanggan secara digital. Sebagai Full-Stack Developer, saya merancang database, membangun API, dan mengembangkan antarmuka admin menggunakan PHP.'
        },
        {
            id: 2,
            title: 'ParkEase',
            description: 'Aplikasi manajemen parkir kendaraan berbasis mobile.',
            imageUrl: parkirKendaraanImg,
            link: 'https://github.com/Mibadd/ParkEase.git',
            longDescription: 'ParkEase adalah aplikasi mobile untuk membantu pengguna menemukan dan memesan tempat parkir secara real-time. Sebagai Backend Developer, saya bertanggung jawab merancang dan membangun REST API untuk mengelola semua data terkait parkir dan pengguna.',
            imageStyle: 'contain'
        },
        {
            id: 3,
            title: 'Aplikasi To-Do List',
            description: 'Aplikasi sederhana untuk mencatat dan mengelola tugas harian.',
            imageUrl: todoListImg,
            link: 'https://github.com/Mibadd/To-do-List.git',
            longDescription: 'Ini adalah aplikasi To-Do List yang dibangun untuk membantu pengguna mengatur tugas sehari-hari dengan antarmuka yang bersih dan mudah digunakan.'
        },
    ];

    return (
        <>
            <section
                id="portofolio"
                ref={ref}
                className={`py-20 transition-all duration-700 ease-in-out bg-gradient-to-br from-stone-50 to-stone-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="w-20 h-1 bg-amber-500 mx-auto mb-4 rounded"></div>
                        <h2 className="font-serif text-4xl font-extrabold text-stone-800">Portofolio Proyek</h2>
                        <p className="font-sans mt-4 text-lg text-stone-600">Beberapa proyek yang telah saya kerjakan.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {portfolio.map((item) => (
                            <div key={item.id} className="bg-slate-50 rounded-xl shadow-md overflow-hidden flex flex-col">
                                {/* --- PERUBAHAN LOGIKA PADA TAG <img> --- */}
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    );
};

export default PortfolioSection;