import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Image imports
import project1 from '../img/project1.jpg';
import project2 from '../img/project2.jpg';
import project3 from '../img/project3.jpg';
import project4 from '../img/project4.jpg';

import UserP1 from '../img/UserP1.jpg';
import UserP2 from '../img/UserP2.jpg';
import PBuilding1 from '../img/PBuilding1.jpg';
import PBuilding2 from '../img/PBuilding2.jpg';
import sketch from '../img/florida/sketch.jpg';
import pants from '../img/florida/pants.jpg';

const Home = () => {
    const stackRef = useRef(null);
    const inView = useInView(stackRef, { margin: '-100px' });
    const images = [project1, project2, project3, project4];

    const [fullImage, setFullImage] = useState(null);
    const handleImageClick = (img) => setFullImage(img);
    const closeFullImage = () => setFullImage(null);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Only use animation on desktop
    const imageVariants = {
        initial: (i) => ({
            x: isMobile ? 0 : -i * 250,
            y: isMobile ? 0 : i * 30,
            scale: isMobile ? 1 : 0.95 + i * 0.02,
            zIndex: isMobile ? 1 : 10 - i,
            position: isMobile ? 'relative' : 'absolute',
        }),
        stacked: {
            x: 0,
            y: 0,
            scale: 1,
            zIndex: 1,
            position: 'relative',
            transition: {
                duration: 0.6,
                ease: 'easeInOut',
            },
        },
    };

    const [currentFloridaImage, setCurrentFloridaImage] = useState(sketch);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFloridaImage((prev) => (prev === sketch ? pants : sketch));
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="home-container">
            <motion.div
                className="home-header"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Design Portfolio</h1>
                <p>Graphic Design | UX/UI | Marketing</p>
            </motion.div>

            <p>
                Hi, I'm Alyssa — a digital media designer who loves mixing creativity with purpose. I'm a digital media creator with a strategic mindset and a passion for making user-centered ideas come to life. From content creation to UX design, I bring visual storytelling and thoughtful planning into every project I touch.
            </p>

            <div className="scrolling-bar">
                <p className="scrolling-text">
                    WELCOME! TAKE A PEEK INTO MY WORLD OF DIGITAL DESIGN AND CREATIVITY ✦ &nbsp;&nbsp;
                    WELCOME! TAKE A PEEK INTO MY WORLD OF DIGITAL DESIGN AND CREATIVITY ✦ &nbsp;&nbsp;
                </p>
            </div>

            {/* 🎵 Spotify Playlist Covers */}
            <section className="featured-section" ref={stackRef}>
                <h2>Spotify Playlist Covers</h2>
                <p>
                    A dynamic visual showcase of Spotify playlist covers. Eye-catching and memorable Spotify playlist covers crafted to capture the essence of each playlist, making it visually appealing and enhancing the listener's experience. I tailor each piece to reflect the unique vibe of the playlist.
                </p>

                <div className={`image-stack-container ${isMobile ? 'mobile-layout' : ''}`}>
                    {images.map((src, index) => (
                        <div key={index} className="image-wrapper">
                            <motion.img
                                custom={index}
                                initial="initial"
                                animate={inView ? 'stacked' : 'initial'}
                                variants={imageVariants}
                                src={src}
                                alt={`Project ${index + 1}`}
                                className="stacked-image"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* 👥 User Personas */}
            <section className="user-persona-section">
                <h2>User Personas & Persona Building</h2>
                <p>
                    In my process, I focus on building thoughtful, research-driven personas to guide design decisions. Below are examples of personas developed for UX projects, along with visual explorations of persona building.
                </p>
                <div className="user-personas-grid">
                    {[UserP1, UserP2, PBuilding1, PBuilding2].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`User Persona ${index + 1}`}
                            onClick={() => handleImageClick(img)}
                            className="clickable-image"
                        />
                    ))}
                </div>
            </section>

            {fullImage && (
                <div className="full-image-overlay" onClick={closeFullImage}>
                    <img src={fullImage} alt="Full View" />
                </div>
            )}
        </section>
    );
};

export default Home;
