"use client";

import '@/app/globals.css';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <header className="bg-indigo-950 text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-4 md:mb-0"
          >
            <Image
              src="/Logo.png" // Adjust the path according to your project structure
              alt="Company Logo"
              width={150}
              height={50}
              quality={100}
              priority
              className="object-contain"
            />
          </motion.div>
          <button
            className="inline-flex items-center md:hidden focus:outline-none"
            onClick={toggleNavbar}
            aria-expanded={isOpen}
            aria-controls="navbar"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <title>{isOpen ? 'Close menu' : 'Open menu'}</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="hidden md:flex md:flex-grow items-center text-base justify-center md:space-x-5">
            {[
              { href: "#", label: "Viral CGI Videos" },
              { href: "#", label: "AI CGI Videos" },
              { href: "#", label: "Frame to Creative Videos" },
              { href: "#", label: "Graphic Design" },
              { href: "#", label: "CONTACT US: +971 56 211 0652" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: '#ddd' }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-3 py-2 transition-colors duration-300 hover:bg-indigo-700 rounded-md"
              >
                <Link href={item.href}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black opacity-50 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  onClick={toggleNavbar}
                />
                <motion.nav
                  id="navbar"
                  className="fixed inset-0 bg-indigo-950 text-white z-50 flex flex-col items-center justify-center"
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                >
                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 text-white p-2 focus:outline-none"
                    onClick={toggleNavbar}
                    aria-label="Close navigation"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  {[
                    { href: "#", label: "Viral CGI Videos" },
                    { href: "#", label: "AI CGI Videos" },
                    { href: "#", label: "Frame to Creative Videos" },
                    { href: "#", label: "Graphic Design" },
                    { href: "#", label: "CONTACT US: +971 56 211 0652" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, color: '#ddd' }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white px-3 py-2 transition-colors duration-300 hover:bg-indigo-700 rounded-md"
                    >
                      <Link href={item.href}>
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  {/* Social Media Links */}
                  <motion.div
                    className="mt-6 flex space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="text-white hover:text-pink-500 transition-colors duration-300"
                    >
                      <FaFacebook size={24} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-white hover:text-blue-700 transition-colors duration-300"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-white hover:text-pink-400 transition-colors duration-300"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="text-white hover:text-blue-500 transition-colors duration-300"
                    >
                      <FaTwitter size={24} />
                    </a>
                  </motion.div>
                </motion.nav>
              </>
            )}
          </AnimatePresence>
        </div>
      </header>
      <div className="bg-purple-900 text-center text-white py-2">
        Balancing stunning visuals with user-centered design for maximum impact.
      </div>
    </main>
  );
};

export default Header;
