import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
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
        triggerOnce: false,
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

    const imageVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
        },
    };

    return (
        <section
            ref={ref}
            id="beranda"
            className="bg-stone-50 min-h-screen flex flex-col justify-center relative overflow-hidden"
        >
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <motion.div
                    className="md:w-2/5 flex justify-center order-1 md:order-1"
                    variants={imageVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <div className="group relative w-64 h-64 md:w-72 md:h-72">
                        <div className="absolute inset-0 rounded-full bg-amber-400 animate-pulse-deep transition-all duration-500 group-hover:scale-110 group-hover:opacity-70"></div>
                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-3">
                            <img src={profilePhoto} alt="Foto Profil Anda" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="md:w-3/5 order-2 md:order-2"
                    variants={textVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
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

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <a
                            href="#kontak"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#kontak').scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="font-sans w-full sm:w-auto text-center px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Hubungi Saya
                        </a>
                        <a
                            href="/Muhammad-Ibdurrohman-CV-in.pdf"
                            download
                            className="font-sans w-full sm:w-auto text-center px-8 py-3 bg-stone-200 text-stone-800 font-semibold rounded-lg shadow-lg hover:bg-stone-300 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Unduh CV
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;