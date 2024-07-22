// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/globals.css';
import Header from "@/Components/header";
import Footer from "@/Components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Royal Step Studio",
  description: "A creative space for dance and movement.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
