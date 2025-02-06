<<<<<<< HEAD
import { HeroSection } from "@/components/hero-section";
=======

>>>>>>> 0463540 (first commit)
import { SkillsSection } from "@/components/skills-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { GallerySection } from "@/components/gallery-section";

import Testimonial from "@/components/Testimonial";
import Chatbot from "@/components/Chatbot";

<<<<<<< HEAD
import BrandSection from "@/components/BrandSection";
import VantaBackground from "@/components/VantaBackground";
=======

import BrandSection from "@/components/BrandSection";

>>>>>>> 0463540 (first commit)

// Import WhatsApp Icon from react-icons
import { FaWhatsapp } from "react-icons/fa";

<<<<<<< HEAD
export default function Home() {
  return (
    <main>
      <VantaBackground />
=======
import VantaBackground from "../components/VantaBackground";
import { HeroSection } from "@/components/hero-section";
import Background from "@/components/Background";





export default function Home() {
  return (
    <main>
      <Background />
>>>>>>> 0463540 (first commit)
     <div className="gap-7">
     {/* <Chatbot/> */}
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/9407578673" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-7 right-5 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
     </div>

      {/* Chatbot Component moved up */}
      
    
      <section id="hero">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <BrandSection />
      <section id="gallery">
        <GallerySection />
      </section>
      <section id="footer">
      </section>
    </main>
  );
}
