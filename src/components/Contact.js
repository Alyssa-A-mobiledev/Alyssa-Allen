import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSend = () => {
        const subject = `Message from ${form.name}`;
        const body = `Hi Alyssa,%0D%0A%0D%0A${form.message}%0D%0A%0D%0AFrom: ${form.name} (${form.email})`;
        window.location.href = `mailto:allenalyssa.228@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-neutral-50 text-gray-900">
            <div className="max-w-xl w-full space-y-6">
                <h2 className="text-3xl font-display text-center text-purple-600">Get in Touch ✉️</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />

                <button
                    onClick={handleSend}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
                >
                    Send Message
                </button>

                <p className="text-center text-sm text-gray-500">
                    This opens your email app — no backend or form submission required.
                </p>
            </div>
        </section>
    );
};

export default Contact;
