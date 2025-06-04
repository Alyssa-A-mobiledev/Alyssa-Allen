import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../img/my-image.jpg'; // Make sure this path is correct

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
                    <h1>Hello</h1>
                    <p>Welcome to Alyssa's Portfolio 🎨</p>
                </div>
                <div className="home-image">
                    <img src={myImage} alt="Alyssa" />
                </div>
            </motion.div>
        </section>
    );
};

export const projects = [
    {
        id: 1,
        title: "Project One",
        description: "UX design and branding for a startup.",
        img: "https://www.pinterest.com/pin/4644405860216337/",
        tags: ["UX", "Branding"],
    },
    {
        id: 2,
        title: "Project Two",
        description: "Responsive website built with React.",
        img: "https://www.pinterest.com/pin/415879346860814458/",
        tags: ["Web Dev"],
    },
];

export default Home;

