import React, { useState } from 'react';
import wireframe1 from '../img/AR/Wireframe.jpg';
import screen1 from '../img/AR/screen1.jpg';
import screen2 from '../img/AR/screen2.jpg';
import screen3 from '../img/AR/screen3.jpg';
import screen4 from '../img/AR/screen4.jpg';
import screen5 from '../img/AR/screen5.jpg';
import demoVideo from '../img/AR/Video.mp4';

const screens = [screen1, screen2, screen3, screen4, screen5];

const ARProject = () => {
    const [activeImage, setActiveImage] = useState(screen1);

    return (
        <section className="ar-project-container">
            <div className="ar-header">
                <h2>Augmented Reality Application</h2>
            </div>

            <div className="ar-section ar-process-container">
                <div className="ar-text">
                    <h1>The Process</h1>
                    <p>The concept behind my AR Experience: ApartmentVision is to help users, more specifically college students, post-grads, and young professionals, feel confident in designing and furnishing their new homes.</p>
                    <br />
                    <p>When first welcomed with the idea of moving, it's exciting to think about how you'll make this blank canvas your own, from scrolling on Pinterest to watching YouTube videos to finally envisioning what your place will look like.</p>
                    <br />
                    <p>This project started with defining the problem space, conducting user research, sketching ideas, and iterating on wireframes before testing.</p>
                </div>


                <div className="ar-image-carousel">
                    <div className="ar-carousel-container">
                        <img src={activeImage} alt="App Screen" className="ar-carousel-image" />
                    </div>
                    <div className="ar-thumbnails">
                        {screens.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                className={`ar-thumbnail ${activeImage === img ? 'active' : ''}`}
                                onClick={() => setActiveImage(img)}
                            />
                        ))}
                    </div>
                </div>

            </div>
            {/* Paper + Reviews Side by Side */}
            <div className="ar-section paper-and-reviews">
                {/* Research Paper */}
                <div className="paper-link">
                    <h2>Research Paper</h2>
                    <a
                        href={`${process.env.PUBLIC_URL}/Paper.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ar-paper-link"
                    >
                        View AR Paper ↗
                    </a>
                </div>

                {/* Reviews */}
                <div className="ar-reviews">
                    <h2>What People Are Saying</h2>
                    <div className="reviews-grid">
                        <div className="review-card">
                            <p>
                                “As for the design itself, it looks very intuitive and user friendly. Having the option to rescan the room to make sure it looks the way it's suppose to is a great add in! This prevents users having to unnecessarily back out of the application just to retry the scan option. Overall, great job with”
                            </p>
                            <span>— UX Research Feedback</span>
                        </div>
                        <br></br>
                        <div className="review-card">
                            <p>
                                “The usage of AR in this is perfect! Being able to see and style your apart-ment/space before committing to a single style is awesome! Good job!”
                            </p>
                            <span>— UX Research Feedback</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ar-wireframes-section">
                <h1>Wireframes</h1>
                <img src={wireframe1} alt="Process Diagram" />
            </div>


            <div className="ar-section">
                <video controls src={demoVideo} className="ar-video"></video>
            </div>

        </section>
    );
};

export default ARProject;
