"use client";

import '@/app/globals.css';
import Image from "next/image";
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'UI/UX DESIGN', href: '#', imageSrc: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/07/30182024/UX-UI-Design.jpg' },
  { id: 2, name: 'GRAPHIC DESIGN', href: '#', imageSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3FdHxx_Q01fnUuIW284tbjxYHs1RrWH5AsmqGeVvMip_USJk-' },
  { id: 3, name: 'PACKEGING DESIGN', href: '#', imageSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdsNkOg2wqG2SooCBdRgMH54Xo99Bs9o9M0HZNKViJf3Riy7qi' },
];

export default function Section() {
  return (
    <div className="bg-indigo-950 flex justify-center">
      <div className="max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.a
              key={product.id}
              href={product.href}
              className="group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * product.id }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3
                className="mt-4 text-center text-xl text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * product.id }}
              >
                {product.name}
              </motion.h3>
              <motion.div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * product.id }}
              >
                <img
                  alt={product.name}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
