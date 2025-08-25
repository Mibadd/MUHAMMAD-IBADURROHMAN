import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeLink, setActiveLink }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#beranda', label: 'Beranda' },
        { href: '#tentang', label: 'Tentang' },
        { href: '#keahlian', label: 'Keahlian' },
        { href: '#layanan', label: 'Layanan' },
        { href: '#portofolio', label: 'Portofolio' },
        { href: '#kontak', label: 'Kontak' },
    ];

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setActiveLink(targetId);
        setIsMenuOpen(false);
    };

    // 2. Definisikan varian animasi untuk menu
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    };

    return (
        <header className="bg-stone-50/70 backdrop-blur-lg shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-stone-900 font-serif">
                    Muhammad Ibadurrohman
                </div>
                <ul className="hidden md:flex items-center space-x-6 font-sans">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className={`transition-colors duration-300 ${activeLink === link.href ? 'text-amber-600 font-bold' : 'text-stone-600 hover:text-amber-600'}`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Buka atau Tutup Menu">
                        {/* 3. Ikon berubah secara dinamis */}
                        {isMenuOpen ? (
                            <svg className="w-6 h-6 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> // Ikon 'X'
                        ) : (
                            <svg className="w-6 h-6 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg> // Ikon hamburger
                        )}
                    </button>
                </div>
            </nav>

            {/* 4. Terapkan animasi pada menu seluler */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-stone-50/95 backdrop-blur-sm px-6 pb-4 absolute w-full shadow-lg"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <ul className="flex flex-col items-center space-y-4 font-sans py-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleScroll(e, link.href)}
                                        className={`block text-lg transition-colors duration-300 ${activeLink === link.href ? 'text-amber-600 font-bold' : 'text-stone-700 hover:text-amber-600'}`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;