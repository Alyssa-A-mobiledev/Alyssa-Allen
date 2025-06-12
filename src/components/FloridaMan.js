import React, { useState, useEffect } from 'react';
import shirt2 from '../img/FloridaMan/shirt2.jpg';
import poster from '../img/FloridaMan/poster.jpg';
import pants from '../img/FloridaMan/pants.jpg';
import shirt1 from '../img/FloridaMan/shirt1.jpg';
import sketch from '../img/FloridaMan/sketch.jpg';
import logo from '../img/FloridaMan/logo.jpg';

const floridaImages = [
    shirt2,
    poster,
    pants,
    shirt1,
    sketch,
    logo
];

const FloridaMan = () => {
    const [activeImage, setActiveImage] = useState(floridaImages[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="mood-project-container">
            <div className="mood-header">
                <h2>Florida Man Graphic Design Project</h2>
            </div>

            <div className="mood-section mood-process-container">
                <div className="mood-text">
                    <h1>Project Overview</h1>

                    <br />
                    <p>
                        Brief: Create a captivating tour poster and a matching merchandise item for "Florida Man" that captures the essence of Florida's most eccentric stories, reflecting the style of iconic band tour posters.
                    </p>
                    <br></br>
                    <p>
                        The Florida Man project explores the playful and chaotic energy of Florida's meme-worthy persona through bold, graphic apparel and print designs. The project brings humor and cultural commentary together in a visually striking series.
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

            <div className="mood-wireframes-section">
                <h1>Sketches & Logo</h1>
                <img src={sketch} alt="Florida Man Sketch" />
                <img src={logo} alt="Florida Man Logo" />
            </div>
        </section>
    );
};

export default FloridaMan;
