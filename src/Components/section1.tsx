"use client";

import '@/app/globals.css';
import Heading from '@/Components/heading';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    name: 'VIRAL CGI VIDEOS',
    detail: 'Make your videos unforgettable with our jaw-dropping CGI.',
    imageSrc: '/3d-2@2x.png', // Update with the correct path in your public folder
    imageAlt: 'Example image for Viral CGI Videos',
  },
  {
    id: 2,
    name: 'PROMO & CREATIVE VIDEOS',
    detail: 'Create videos that connect with your audience, tell your brand story, and inspire actions.',
    imageSrc: '/vedio-2@2x.png', // Update with the correct path in your public folder
    imageAlt: 'Example image for Promo & Creative Videos',
  },
  {
    id: 3,
    name: 'GRAPHIC DESIGN UI/UX DESIGN',
    detail: 'Crafting beautiful and intuitive experiences through graphic & UI/UX design.',
    imageSrc: '/design-2@2x.png', // Update with the correct path in your public folder
    imageAlt: 'Example image for Graphic Design UI/UX Design',
  },
];

export default function Example() {
  return (
    <div className="bg-indigo-950">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Heading title={"Our Services"} />
        <div className="grid grid-cols-1 gap-y-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * service.id }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image container */}
              <motion.div
                className="w-30 h-30 flex-shrink-0 overflow-hidden rounded-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  alt={service.imageAlt}
                  src={service.imageSrc}
                  width={128} // Specify width
                  height={128} // Specify height
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
              {/* Text content container */}
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * service.id }}
              >
                <h3 className="text-xl text-white font-bold">{service.name}</h3>
                <p className="mt-1 text-white">{service.detail}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
