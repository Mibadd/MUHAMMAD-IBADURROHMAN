import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import profilePhoto from '../../assets/images/profile-photo.png';

const roles = [
    'Web Developer.',
    'Backend Developer.',
];

const HeroSection = ({ setActiveLink }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setActiveLink('#beranda');
        }
    }, [inView, setActiveLink]);

    useEffect(() => {
        if (isDeleting && text === '') {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
            setSubIndex(0);
            return;
        }

        if (!isDeleting && text === roles[index]) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        const typingSpeed = isDeleting ? 100 : 200;

        const timeout = setTimeout(() => {
            setText(roles[index].substring(0, subIndex + (isDeleting ? -1 : 1)));
            setSubIndex((prevSubIndex) => prevSubIndex + (isDeleting ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, text]);

    return (
        <section ref={ref} id="beranda" className="bg-stone-50 min-h-screen flex flex-col justify-center relative">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="md:w-2/5 flex justify-center order-1 md:order-1">
                    <div className="group relative w-64 h-64 md:w-72 md:h-72">
                        <div className="absolute inset-0 rounded-full bg-amber-400 animate-pulse-deep transition-all duration-500 group-hover:scale-110 group-hover:opacity-70"></div>

                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-3">
                            <img src={profilePhoto} alt="Foto Profil Anda" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="md:w-3/5 order-2 md:order-2">
                    <h2 className="text-amber-600 font-semibold font-sans">HALO, SAYA MUHAMMAD IBADURROHMAN</h2>
                    <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-stone-800 mt-2 leading-tight">
                        Saya seorang{' '}
                        <span className="text-amber-600">
                            {text}
                            <span className="inline-block w-1 h-8 md:h-10 bg-amber-600 animate-blink align-bottom ml-1"></span>
                        </span>
                    </h1>
                    <p className="font-sans mt-4 text-stone-600">
                        Saya mengubah ide dan desain menjadi aplikasi web yang fungsional, modern, dan mudah digunakan.
                    </p>
                    <a href="#kontak" className="font-sans mt-8 inline-block px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transform hover:-translate-y-1 transition-all duration-300">
                        Hubungi Saya
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;