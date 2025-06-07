import React from 'react';
import myImage from '../img/my-image.jpg';
import filmStrip from '../img/film-strip.png';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-text">
                <h2>About Me</h2>
                <p>
                    I'm a senior at the University of Central Florida, majoring in Digital Media with a specialization in Web and Interactive Media. I have a passion for art whether it's through drawing, mixed media, or crafting digital prints, creativity has consistently been at the heart of my work.
                </p>
                <br />
                <p>
                    As I explored different creative paths, I'm fascinated by how thoughtful design and strategy can shape the way people interact with technology, brands, and information.
                </p>
                <br />
                <p>
                    From personal projects to student organization collaborations, I've developed a strong passion for creating thoughtful, user-centered designs that blend function with aesthetic appeal.
                </p>
                <br />
                <div
                    className="not-designing">
                    <p>
                        When I'm not designing, you'll find me experimenting with film photography, exploring local coffee shops, thrifting, or playing on my Nintendo Switch.
                    </p>
                </div>

            </div>
            <div className="about-image-wrapper">
                <div className="my-image">
                    <img src={myImage} alt="Alyssa Allen" />
                    <img src={filmStrip} alt="Film Strip" className="film-strip-overlay" />
                </div>
            </div>
        </section>
    );
};

export default About;
