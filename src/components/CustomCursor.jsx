// src/components/CustomCursor.jsx
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
            className="fixed w-8 h-8 rounded-full bg-amber-500/30 backdrop-blur-sm pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out z-[9999]"
        ></div>
    );
};

export default CustomCursor;