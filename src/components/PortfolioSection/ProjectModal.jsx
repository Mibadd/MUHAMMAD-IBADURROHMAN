import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                onClick={onClose}
                className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="p-6 relative">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-stone-500 hover:text-stone-800 z-10"
                        >
                            {/* ... (kode SVG tombol close) ... */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> </svg>
                        </button>

                        <div className="w-full h-56 flex items-center justify-center bg-slate-100 rounded-lg mb-4 overflow-hidden">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className={`${project.imageStyle === "contain"
                                    ? "object-contain h-full w-auto"
                                    : "object-cover w-full h-full"
                                    }`}
                            />
                        </div>

                        <h3 className="font-serif text-3xl font-bold text-stone-900">
                            {project.title}
                        </h3>

                        {/* Tags Teknologi */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags?.map((tag) => (
                                <span key={tag} className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Deskripsi */}
                        <div className="mt-4 text-left">
                            <p className="font-sans text-stone-600 leading-relaxed text-base">
                                {project.longDescription}
                            </p>
                        </div>

                        {/* Tombol Aksi */}
                        <div className="mt-6 text-right">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans inline-block px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700"
                            >
                                Selengkapnya
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;