import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Gambar sertifikat 
import sertifikatWeb from '../../assets/images/sertifikat-web.png';
import sertifikatWebFe from '../../assets/images/sertifikat-web-fe.png';
import sertifikatJs from '../../assets/images/sertifikat-js.png';
import sertifikatSql from '../../assets/images/sertifikat-sql.png';


const JourneySection = ({ setActiveLink }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const [activeTab, setActiveTab] = useState('pendidikan');

    useEffect(() => {
        // Logika untuk navigasi dinamis
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

    const TimelineItem = ({ item, index }) => (
        <div className="relative mb-8 flex justify-between items-center w-full">
            <div className={`hidden md:block w-[calc(50%-2rem)] ${index % 2 !== 0 ? 'order-2' : ''}`}></div>
            <div className="z-10 absolute left-1/2 w-4 h-4 bg-amber-600 rounded-full -translate-x-1/2 border-4 border-stone-100"></div>
            <div className={`w-full md:w-[calc(50%-2rem)] p-4 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                <p className="font-sans font-bold text-amber-600 flex items-center gap-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
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
            <img src={item.imageUrl} alt={item.title} className="w-full h-auto rounded-md mb-4 border border-stone-200" />
            <h4 className="font-serif font-bold text-lg text-stone-800">{item.title}</h4>
            <p className="font-sans text-sm text-stone-600 mt-1">{item.issuer} - {item.year}</p>
        </div>
    );

    return (
        <section
            id="journey"
            ref={ref}
            className={`py-20 transition-all duration-700 ease-in-out bg-gradient-to-br from-stone-50 to-stone-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="w-20 h-1 bg-amber-500 mx-auto mb-4 rounded"></div>
                    <h2 className="font-serif text-4xl font-extrabold text-stone-800">Perjalanan & Pencapaian</h2>
                    <p className="font-sans mt-4 text-lg text-stone-600">Latar belakang pendidikan dan sertifikasi yang saya miliki.</p>
                </div>

                {/* Navigasi Tab Interaktif */}
                <div className="flex justify-center items-center gap-8 mb-12">
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

                <div className={`transition-opacity duration-500 ${activeTab === 'pendidikan' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute left-1/2 w-0.5 h-full bg-stone-300 -translate-x-1/2"></div>
                        {education.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>

                <div className={`transition-opacity duration-500 ${activeTab === 'sertifikat' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {certificates.map((item, index) => (
                            <CertificateCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneySection;