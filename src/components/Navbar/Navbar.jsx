import React, { useState } from 'react';

// Terima 'activeLink' dan 'setActiveLink' sebagai props
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
        const targetElement = document.getElementById(targetId.substring(1));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setActiveLink(targetId); // Perbarui state yang ada di App.jsx
        setIsMenuOpen(false);
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
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Buka Menu">
                        <svg className="w-6 h-6 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden bg-stone-50/95 backdrop-blur-sm px-6 pb-4">
                    <ul className="flex flex-col items-center space-y-4 font-sans">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className={`block transition-colors duration-300 ${activeLink === link.href ? 'text-amber-600 font-bold' : 'text-stone-700 hover:text-amber-600'}`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;