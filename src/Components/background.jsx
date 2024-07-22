"use client";

import '@/app/globals.css';
import Image from 'next/image';
import image from '../../public/graficdesign-2@2x.png'; // Make sure this path matches your image location
import { motion } from 'framer-motion';

export default function Background() {
  return (
    <main className="flex flex-col md:flex-row h-full w-full bg-indigo-950">
      {/* Text Container */}
      <div className="flex flex-col justify-between md:w-1/2 w-full p-10 md:p-20">
        {/* Upper Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-xl md:text-2xl font-bold text-pink-400 hover:text-pink-300 transition-colors duration-300">
            Engaging:
          </h1>
          <p className="text-md md:text-lg text-white mt-2">
            The visuals attract the user and make them want to explore further.
          </p>
        </motion.div>
        {/* Lower Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl md:text-2xl font-bold text-pink-400 hover:text-pink-300 transition-colors duration-300">
            Usable:
          </h1>
          <p className="text-md md:text-lg text-white mt-2">
            The design is clear, functional, and allows users to complete their tasks easily and efficiently.
          </p>
        </motion.div>
      </div>
      {/* Image Container */}
      <motion.div
        className="md:w-1/2 w-full p-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          alt="A description of the image"
          src={image}
          width={500}
          height={400}
          className="object-cover object-center w-full h-auto"
        />
      </motion.div>
    </main>
  );
}
