import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true });

    return (
        <motion.footer
            ref={footerRef}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="footer-container"
        >
            <div className="footer-content">
                <h2>Let's Connect</h2>
                <p>Now booking freelance + collab projects!
                    Let's build something intentional, aligned, and beautiful.
                </p>
                <h3>Reach Me at:</h3>
                <a href="https://linkedin.com/in/alyssa" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
                <a href="https://www.instagram.com/alyssa.m.allen/" target="_blank" rel="noreferrer" aria-label="LinkedIn">Instagram</a>

                <p>© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
        </motion.footer>
    );
};

export default Footer;
