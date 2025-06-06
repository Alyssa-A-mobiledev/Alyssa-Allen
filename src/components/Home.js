import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <section className="home-container">
            <motion.div
                className="home-content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="home-header">
                    <h1>Design Portfolio</h1>
                    <p>Graphic Design | UX/UI | Marketing </p>
                </div>
            </motion.div>

            <div className="scrolling-bar">
                <p className="scrolling-text">
                    WELCOME TO MY PORTFOLIO ✦ HI I'M ALYSSA ALLEN  ✦ COME EXPLORE MY PORTFOLIO ✦ &nbsp;&nbsp;
                    WELCOME TO MY PORTFOLIO ✦ HI I'M ALYSSA ALLEN  ✦ COME EXPLORE MY PORTFOLIO ✦
                    &nbsp;&nbsp;
                    WELCOME TO MY PORTFOLIO ✦ HI I'M ALYSSA ALLEN  ✦ COME EXPLORE MY PORTFOLIO ✦
                </p>
            </div>
        </section>
    );
};

export default Home;

