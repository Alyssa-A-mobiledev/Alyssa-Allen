import React, { useState, useEffect } from 'react';
import shirt2 from '../img/florida/shirt2.jpg';
import poster from '../img/florida/poster.jpg';
import pants from '../img/florida/pants.jpg';
import shirt1 from '../img/florida/shirt1.jpg';
import sketch from '../img/florida/sketch.jpg';
import logo from '../img/florida/logo.jpg';

const floridaImages = [poster, pants, sketch, logo, shirt1, shirt2];
const flashingImages = [sketch, pants]; // <-- Added this, assuming you wanted to flash between these two

const FloridaMan = () => {
    const [activeImage, setActiveImage] = useState(floridaImages[0]);
    const [currentSketch, setCurrentSketch] = useState(sketch);
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // <-- Added this for flashing images

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Flash between sketch and pants every 1.5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % flashingImages.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="mood-project-container">
            <div className="mood-header">
                <h2>Florida Man Graphic Design Project</h2>
            </div>

            <div className="mood-section mood-process-container">
                <div className="mood-text">
                    <h1>Project Overview</h1>
                    <p>
                        This project explores the playful and chaotic energy of Florida's meme-worthy persona through bold, graphic
                        apparel and print designs. The Florida Man collection brings humor and cultural commentary together in a
                        visually striking series, capturing the eccentric essence of the iconic "Florida Man" stories in the style
                        of band tour posters.
                    </p>
                </div>

                <div className="mood-image-carousel">
                    <div className="mood-carousel-container">
                        <img src={activeImage} alt="Florida Man Design" className="mood-carousel-image" />
                    </div>
                    <div className="mood-thumbnails">
                        {floridaImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Florida Man Image ${idx + 1}`}
                                className={`mood-thumbnail ${activeImage === img ? 'active' : ''}`}
                                onClick={() => setActiveImage(img)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="florida-section paper-and-reviews">
                <div className="flashing-paper-link">
                    <img
                        src={flashingImages[currentImageIndex]}
                        alt="Flashing Sketch"
                        className="florida-flashing-image"
                    />
                </div>

                <div className="mood-wireframes-section">
                    <h1>Sketches & Logo</h1>

                    {/* Shirt 1 & Shirt 2 side by side */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            marginTop: '1rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src={shirt1}
                            alt="Florida Man Shirt 1"
                            style={{
                                width: '350px',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            }}
                        />
                        <img
                            src={poster}
                            alt="Florida Man Poster"
                            style={{
                                width: '350px',
                                gap: '1rem',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            }}
                        />
                        <img
                            src={shirt2}
                            alt="Florida Man Shirt 2"
                            style={{
                                width: '350px',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FloridaMan;
