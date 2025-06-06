import React, { useState, useEffect } from 'react';


const About = () => {
    const images = [
        '/images/my-image.jpg',
        '/images/my-image2.jpg',
        '/images/my-image3.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    },);

    return (
        <section className="about-section">
            <div className="about-text">
                <h2>About Me</h2>
                <p>
                    I'm a senior at the University of Central Florida, majoring in Digital Media with a specialization in Web and Interactive Media. I have a passion for art whether it's through drawing, mixed media, or crafting digital prints, creativity has consistently been at the heart of my work.
                    <br></br>
                    As I explored different creative paths, I'm fascinated by how thoughtful design and strategy can shape the way people interact with technology, brands, and information.
                    <br></br>
                    From personal projects to student organization collaborations, I've developed a strong passion for creating thoughtful, user-centered designs that blend function with aesthetic appeal.
                </p>
            </div>
            <div className="about-image">
                <img src={images[currentImageIndex]} alt="Alyssa Allen" />
            </div>
        </section>
    );
};

export default About;
