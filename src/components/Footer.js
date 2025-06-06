import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const threshold = document.body.offsetHeight - 100; // 100px from bottom
            setIsVisible(scrollPosition >= threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.footer
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="footer-container"
            style={{ position: 'relative', color: '#fff', textAlign: 'center' }}
        >
            <h2>Let's Connect</h2>
            <p>Now booking freelance + collab projects!<br />
                Let's build something intentional, aligned, and beautiful.
            </p>
            <h4>Reach Me at:</h4>
            <a href="https://www.linkedin.com/in/alyssa-allen01/" target="_blank" rel="noreferrer">LinkedIn</a><br />
            <a href="https://www.instagram.com/alyssa.m.allen/" target="_blank" rel="noreferrer">Instagram</a>
            <p style={{ marginTop: '1rem' }}>© {new Date().getFullYear()} All Rights Reserved</p>
        </motion.footer>
    );
};

export default Footer;
