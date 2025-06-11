import React, { useState, useEffect } from 'react';
import mockup from '../img/Mood/Mockup1.jpg';
import feel from '../img/Mood/Feel.jpg';
import home from '../img/Mood/Home.jpg'; // This is your All.jpg (used later, not in carousel)
import mood1 from '../img/Mood/Happy.jpg';
import mood2 from '../img/Mood/Neutral.jpg';
import mood3 from '../img/Mood/Anxious.jpg';
import mood4 from '../img/Mood/Mad.jpg';
import mood5 from '../img/Mood/Sad.jpg';
import mood6 from '../img/Mood/Tired.jpg';
import week from '../img/Mood/Week.jpg';
import month from '../img/Mood/Month.jpg';
import moodWireframe from '../img/Mood/Wire.jpg';

const moodScreens = [
    mockup,    // 1. Mockup1
    feel,      // 2. Feel
    home,     // 3. Mood (assuming you meant All.jpg = "Mood")
    mood1,     // 4. Happy
    mood2,     // 5. Neutral
    mood3,     // 6. Anxious
    mood4,     // 7. Mad
    mood5,     // 8. Sad
    mood6,     // 9. Tired
    week,      // 10. Week
    month      // 11. Month
];

const MoodTracker = () => {
    const [activeImage, setActiveImage] = useState(moodScreens[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="mood-project-container">
            <div className="mood-header">
                <h2>Mood Tracker Application</h2>
            </div>

            <div className="mood-section mood-process-container">
                <div className="mood-text">
                    <h1>Project Overview</h1>
                    <p>
                        This mood tracking application was designed to help users reflect on and monitor their emotions each day. The goal is to promote mindfulness and emotional well-being by providing an easy-to-use interface and engaging visual elements.
                    </p>
                    <br />
                    <p>
                        Through user research and iterative design, I developed wireframes and prototypes to shape an intuitive experience. Below is the process and visual design of this project.
                    </p>
                </div>

                <div className="mood-image-carousel">
                    <div className="mood-carousel-container">
                        <img src={activeImage} alt="Mood Tracker Screen" className="mood-carousel-image" />
                    </div>
                    <div className="mood-thumbnails">
                        {moodScreens.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Mood Screen ${idx + 1}`}
                                className={`mood-thumbnail ${activeImage === img ? 'active' : ''}`}
                                onClick={() => setActiveImage(img)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mood-wireframes-section">
                <h1>Wireframes</h1>
                <img src={moodWireframe} alt="Mood Tracker Wireframe" />
            </div>
        </section>
    );
};

export default MoodTracker;
