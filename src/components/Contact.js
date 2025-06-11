import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('https://formspree.io/f/mwpbovdn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('✅ Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('❌ Something went wrong.');
            }
        } catch (err) {
            setStatus('❌ Something went wrong.');
        }
    };

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

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send Message</button>
                {status && <p className="form-status">{status}</p>}
            </form>
        </section>
    );
};

export default Contact;
