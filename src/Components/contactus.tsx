"use client";

import '@/app/globals.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });
    const [submitMessage, setSubmitMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitMessage('Thank you for contacting us! We will get back to you soon.');
            } else {
                setSubmitMessage('There was an error submitting the form. Please try again.');
            }
        } catch (error) {
            setSubmitMessage('There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-indigo-950 min-h-screen flex flex-col items-center justify-center px-4 py-16">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center mb-10"
            >
                <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
                <p className="text-lg text-gray-300 mb-6">
                    We would love to hear from you. For any inquiries, feel free to reach out to us!
                </p>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-indigo-800 text-white p-8 rounded-lg shadow-xl mx-auto max-w-md w-full"
            >
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="mb-6">
                    <h3 className="text-lg font-medium">Address</h3>
                    <p className="text-md">Marasi Drive, Demac Business Tower 907<br />Business Bay - Dubai</p>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-medium">Whatsapp</h3>
                    <p className="text-md">+971 56 211 0652</p>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-md">info@royalstep.ae</p>
                </div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name</label>
                        <motion.input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="block w-full px-4 py-2 border border-gray-700 rounded-md bg-indigo-900 text-white focus:ring-2 focus:ring-indigo-500"
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">Phone Number</label>
                        <motion.input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="block w-full px-4 py-2 border border-gray-700 rounded-md bg-indigo-900 text-white focus:ring-2 focus:ring-indigo-500"
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email Address</label>
                        <motion.input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="block w-full px-4 py-2 border border-gray-700 rounded-md bg-indigo-900 text-white focus:ring-2 focus:ring-indigo-500"
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 transition-transform transform active:scale-95"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </motion.button>
                    </motion.div>
                </motion.form>

                {/* Display confirmation message */}
                {submitMessage && (
                    <motion.p
                        className="mt-4 text-center text-green-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        {submitMessage}
                    </motion.p>
                )}
            </motion.div>
        </main>
    );
}
