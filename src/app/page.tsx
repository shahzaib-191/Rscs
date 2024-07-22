import Image from "next/image";
import React from "react";
import '@/app/globals.css';
import Background from "../Components/background";
import Section from "../Components/section";
import Section1 from "../Components/section1";
import ContactUS from "../Components/contactus";

export default function Home() {
  return (
      <main>
        <div>
          <Background/>
          <Section/>
          <Section1/>
          <ContactUS/>
        </div>
      </main>
  )
}