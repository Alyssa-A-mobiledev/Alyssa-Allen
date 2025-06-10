import React from 'react';
import wireframe1 from '../img/ar/wireframe1.jpg';
import wireframe2 from '../img/ar/wireframe2.jpg';
import demoImage from '../img/ar/demo.jpg';
import processImage from '../img/ar/process.jpg';
import demoVideo from '../videos/ar-demo.mp4';
import paperPDF from '../files/ar-research-paper.pdf';

const ARProject = () => {
    return (
        <section className="ar-project-container">
            <div className="ar-header">
                <h1>Augmented Reality Experience</h1>
                <p>An exploration of user interaction within AR environments through design, prototyping, and research.</p>
            </div>

            <div className="ar-section">
                <h2>The Process</h2>
                <img src={processImage} alt="Process Diagram" />
                <p>This project started with defining the problem space, conducting user research, sketching ideas, and iterating on wireframes before testing.</p>
            </div>

            <div className="ar-section wireframes">
                <h2>Wireframes</h2>
                <div className="ar-wireframes-grid">
                    <img src={wireframe1} alt="Wireframe 1" />
                    <img src={wireframe2} alt="Wireframe 2" />
                </div>
            </div>

            <div className="ar-section">
                <h2>Demo Preview</h2>
                <img src={demoImage} alt="AR Demo Screenshot" className="ar-demo-img" />
                <video controls src={demoVideo} className="ar-video"></video>
            </div>

            <div className="ar-section paper-link">
                <h2>Research Paper</h2>
                <a href={paperPDF} target="_blank" rel="noopener noreferrer" className="ar-paper-link">View Full Research Paper ↗</a>
            </div>
        </section>
    );
};

export default ARProject;
