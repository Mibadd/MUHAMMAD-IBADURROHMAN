import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Gambar sertifikat
import sertifikatWeb from '/src/assets/images/sertifikat-web.png';
import sertifikatWebFe from '/src/assets/images/sertifikat-web-fe.png';
import sertifikatJs from '/src/assets/images/sertifikat-js.png';
import sertifikatSql from '/src/assets/images/sertifikat-sql.png';


const JourneySection = ({ setActiveLink }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const [activeTab, setActiveTab] = useState('pendidikan');

    useEffect(() => {
        if (inView) {
            setActiveLink('#journey');
        }
    }, [inView, setActiveLink]);

    const education = [
        {
            period: '2022 - Sekarang',
            title: 'Mahasiswa Informatika',
            institution: 'Universitas Jenderal Achmad Yani',
        },
        {
            period: '2019 - 2022',
            title: 'Sekolah Menengah Atas',
            institution: 'SMAN 2 Cimahi',
        },
    ];

    const certificates = [
        {
            year: '2024',
            title: 'Sertifikat Web Development',
            issuer: 'Dicoding Indonesia',
            imageUrl: sertifikatWeb,
        },
        {
            year: '2024',
            title: 'Sertifikat Front-End Website',
            issuer: 'Dicoding Indonesia',
            imageUrl: sertifikatWebFe,
        },
        {
            year: '2024',
            title: 'Sertifikat JavaScript Dasar',
            issuer: 'Dicoding Indonesia',
            imageUrl: sertifikatJs,
        },
        {
            year: '2024',
            title: 'Sertifikat SQL & Database',
            issuer: 'Dicoding Indonesia',
            imageUrl: sertifikatSql,
        },
    ];

    // ... (Komponen TimelineItem dan CertificateCard tidak berubah) ...
    const TimelineItem = ({ item, index }) => (
        <div className="relative mb-8 flex justify-between items-center w-full">
            {/* Spacer ini hanya aktif di desktop */}
            <div className={`hidden md:block w-[calc(50%-2rem)] ${index % 2 !== 0 ? 'order-2' : ''}`}></div>

            {/* Titik penanda waktu: Posisinya diubah untuk seluler */}
            <div className="z-10 absolute left-4 md:left-1/2 w-4 h-4 bg-amber-600 rounded-full -translate-x-1/2 border-4 border-stone-100"></div>

            {/* Kartu Konten: Diberi padding kiri di seluler */}
            <div className={`w-full md:w-[calc(50%-2rem)] p-4 pl-12 md:p-4 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                <p className="font-sans font-bold text-amber-600 flex items-center gap-2" style={{ justifyContent: index % 2 === 0 ? 'md:flex-end' : 'flex-start' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span>{item.period || item.year}</span>
                </p>
                <h3 className="font-serif font-bold text-lg text-stone-800 mt-1">{item.title}</h3>
                <p className="font-sans text-sm text-stone-600 mt-2">{item.institution || item.event}</p>
            </div>
        </div>
    );

    const CertificateCard = ({ item }) => (
        <div
            className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-110 hover:z-10"
        >
            <img src={item.imageUrl} alt={item.title} loading="lazy" className="w-full h-auto rounded-md mb-4 border border-stone-200" />
            <h4 className="font-serif font-bold text-lg text-stone-800">{item.title}</h4>
            <p className="font-sans text-sm text-stone-600 mt-1">{item.issuer} - {item.year}</p>
        </div>
    );


    return (
        <motion.section
            id="journey"
            ref={ref}
            className="py-20 bg-gradient-to-br from-stone-50 to-stone-200 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="w-20 h-1 bg-amber-500 mx-auto mb-4 rounded"></div>
                    <h2 className="font-serif text-4xl font-extrabold text-stone-800">Perjalanan & Pencapaian</h2>
                    <p className="font-sans mt-4 text-lg text-stone-600">Latar belakang pendidikan dan sertifikasi yang saya miliki.</p>
                </div>

                <div className="flex justify-center items-center gap-8 mb-12">
                    {/* ... (kode tombol tab tidak berubah) ... */}
                    <h3
                        onClick={() => setActiveTab('pendidikan')}
                        className={`font-serif text-2xl font-bold cursor-pointer transition-all duration-300 flex items-center gap-2 ${activeTab === 'pendidikan' ? 'text-amber-600' : 'text-stone-500 hover:text-stone-800'
                            }`}
                    >
                        🎓
                        <span>Pendidikan</span>
                    </h3>
                    <h3
                        onClick={() => setActiveTab('sertifikat')}
                        className={`font-serif text-2xl font-bold cursor-pointer transition-all duration-300 flex items-center gap-2 ${activeTab === 'sertifikat' ? 'text-amber-600' : 'text-stone-500 hover:text-stone-800'
                            }`}
                    >
                        📜
                        <span>Sertifikat</span>
                    </h3>
                </div>

                {/* === BAGIAN YANG DIPERBAIKI === */}
                <div className="relative">
                    {/* Konten Pendidikan */}
                    <div className={`transition-opacity duration-500 ${activeTab === 'pendidikan' ? 'opacity-100' : 'opacity-0 invisible absolute'}`}>
                        <div className="relative max-w-2xl mx-auto">
                            <div className="absolute left-1/2 w-0.5 h-full bg-stone-300 -translate-x-1/2"></div>
                            {education.map((item, index) => (
                                <TimelineItem key={index} item={item} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Konten Sertifikat */}
                    <div className={`transition-opacity duration-500 ${activeTab === 'sertifikat' ? 'opacity-100' : 'opacity-0 invisible absolute'}`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {certificates.map((item, index) => (
                                <CertificateCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default JourneySection;