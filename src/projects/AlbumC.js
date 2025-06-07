// AlbumC.js
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import project1 from '../img/project1.jpg';
import project2 from '../img/project2.jpg';
import project3 from '../img/project3.jpg';
import project4 from '../img/project4.jpg';

const imageVariants = {
    stacked: (i) => ({
        x: -i * 80,
        y: -i * 20,
        scale: 0.95 + i * 0.02,
        zIndex: 10 - i,
        position: 'absolute',
    }),
    open: (i) => ({
        x: 0,
        y: 0,
        scale: 1,
        zIndex: 1,
        position: 'relative',
        transition: {
            duration: 0.6 + i * 0.1, // small stagger
            ease: 'easeInOut',
        },
    }),
};

const AlbumC = () => {
    const stackRef = useRef(null);
    const inView = useInView(stackRef, { once: true, margin: '-100px' });

    const images = [project1, project2, project3, project4];

    return (
        <section className="featured-section" ref={stackRef}>
            <h2 className="featured-title">Featured Project: Spotify Album Covers</h2>
            <p className="featured-description">
                A motion-based feature showing playlist cover designs crafted to reflect each playlist's theme and emotion.
            </p>
            <div className="image-stack-container">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        custom={index}
                        initial="stacked"
                        animate={inView ? 'open' : 'stacked'}
                        variants={imageVariants}
                        src={src}
                        alt={`Album Cover ${index + 1}`}
                        className="stacked-image"
                    />
                ))}
            </div>
        </section>
    );
};

export default AlbumC;

