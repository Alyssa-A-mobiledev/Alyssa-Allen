import React from 'react';

const Contact = () => {
    return (
        <section className="contact-page">
            <div className="contact-left">
                <h2>Get in Touch</h2>
                <p>I'd love to hear from you! Whether you have a project, question, or just want to say hi—feel free to reach out!</p>
                <div className="contact-socials">
                    <a href="mailto:amaallen1@gmail.com" className="email-icon-link">
                        <img src={require('../img/contact-image.png')} alt="Email Alyssa" className="wiggle-icon" />
                    </a>

                    <div className="social-links">
                        <a href="https://linkedin.com/in/alyssa-allen01" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/alyssa.m.allen/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea rows="5" placeholder="Your Message" required />
                <button type="submit">Send Message</button>
            </form>
        </section >
    );
};

export default Contact;