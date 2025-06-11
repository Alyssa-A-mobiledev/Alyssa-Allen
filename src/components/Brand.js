import React, { useState, useEffect } from 'react';
import flavor1 from '../img/drink/orange.jpg';
import flavor2 from '../img/drink/yellow.jpg';
import flavor3 from '../img/drink/pink.jpg';

import allFlavors from '../img/drink/all.jpg';
import pair1 from '../img/drink/pair1.jpg';
import pair2 from '../img/drink/pair2.jpg';

import label1 from '../img/drink/label-pink.jpg';
import label2 from '../img/drink/label-orange.jpg';
import label3 from '../img/drink/label-yellow.jpg';

const drinkScreens = [flavor1, flavor2, flavor3];

const BrandProject = () => {
    const [activeImage, setActiveImage] = useState(drinkScreens[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="ar-project-container">
            <div className="ar-header">
                <h2>Drink Branding Project</h2>
            </div>

            <div className="ar-section ar-process-container">
                <div className="ar-text">
                    <h1>Design Brief</h1>
                    <p>
                        This project explores the branding and packaging design for a line of refreshing non-alcoholic cocktails.
                        The goal was to create a look and feel that’s vibrant, playful, and modern, appealing to a youthful audience who enjoy the taste of cocktails with a clear head.
                    </p>
                    <br />
                    <p>
                        The process involved brand research, creative exploration, and developing packaging mockups that showcase three distinct flavors.
                    </p>
                </div>

                <div className="ar-image-carousel">
                    <div className="ar-carousel-container">
                        <img src={activeImage} alt="Drink Flavor" className="ar-carousel-image" />
                    </div>
                    <div className="ar-thumbnails">
                        {drinkScreens.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Flavor ${idx + 1}`}
                                className={`ar-thumbnail ${activeImage === img ? 'active' : ''}`}
                                onClick={() => setActiveImage(img)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="ar-section paper-and-reviews">
                {/* Brand Description or Info */}
                <div className="paper-link">
                    <h2>About the Brand</h2>
                    <p>
                        Brand Name: <strong>Mix It Up</strong><br />
                        These drinks deliver the fun of cocktails without the alcohol, packaged in vibrant, playful designs to stand out on the shelf.
                    </p>
                </div>

                {/* Reviews or Design Goals */}
                <div className="ar-reviews">
                    <h2>Design Highlights</h2>
                    <div className="reviews-grid">
                        <div className="review-card">
                            <p>
                                “Bright, fun, and approachable — this branding concept is perfect for a youthful market. The playful labels really stand out.”
                            </p>
                            <span>— Design Feedback</span>
                        </div>
                        <br />
                        <div className="review-card">
                            <p>
                                “Each flavor’s identity is distinct yet cohesive with the overall brand voice. Strong, fresh color palette.”
                            </p>
                            <span>— Feedback from peers</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ar-wireframes-section">
                <h1>Full Flavor Lineup</h1>
                <img src={allFlavors} alt="All Flavors Together" />
            </div>

            {/* Replacing the AR video with scrolling brand labels */}
            <div className="ar-section">
                <div className="scrolling-logos">
                    <div className="logos-track">
                        <img src={label1} alt="Pink Label" />
                        <img src={label2} alt="Orange Label" />
                        <img src={label3} alt="Yellow Label" />
                        <img src={label1} alt="Pink Label" />
                        <img src={label2} alt="Orange Label" />
                        <img src={label3} alt="Yellow Label" />
                    </div>
                </div>
            </div>

            <div className="ar-section flavor-pairs">
                <img src={pair1} alt="Flavor Pair 1" />
                <img src={pair2} alt="Flavor Pair 2" />
            </div>
        </section>
    );
};

export default BrandProject;
