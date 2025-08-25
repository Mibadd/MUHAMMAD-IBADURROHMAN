import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutSection = ({ setActiveLink }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            setActiveLink('#tentang');
        }
    }, [inView, setActiveLink]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section
            id="tentang"
            ref={ref}
            className="py-20 bg-gradient-to-br from-stone-50 to-stone-200 overflow-hidden"
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="w-20 h-1 bg-amber-500 mx-auto mb-4 rounded"></div>
                    <h2 className="font-serif text-4xl font-extrabold text-stone-800">Tentang Saya</h2>
                </div>
                <div className="max-w-3xl mx-auto text-center text-lg text-stone-600 leading-relaxed font-sans">
                    <p>
                        Saya adalah seorang web developer yang berdedikasi dengan hasrat untuk membangun aplikasi yang cepat, efisien, dan ramah pengguna. Dengan keahlian di bidang front-end dan back-end, saya mampu menghadirkan solusi digital yang lengkap dari awal hingga akhir.
                    </p>
                    <p className="mt-4">
                        Saya percaya bahwa teknologi adalah alat yang kuat untuk memecahkan masalah, dan saya selalu bersemangat untuk mempelajari hal-hal baru dan meningkatkan kemampuan saya.
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutSection;