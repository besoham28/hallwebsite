import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import DineInSection from "@/components/DineInSection";
import BookingBanner from "@/components/BookingBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import AnimatedBackground from "@/components/AnimatedBackground";

import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll to top on refresh
    window.scrollTo(0, 0);
    // Remove hash from URL to prevent browser's default scroll-to-id behavior on refresh
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <main className="relative bg-transparent">
      <AnimatedBackground />
      <Navbar />
    <HeroSlider />
    <AboutSection />
    <FacilitiesSection />
    <ServicesSection />
    <GallerySection />
    <DineInSection />
    <BookingBanner />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    <WhatsAppFloating />
    </main>
  );
};

export default Index;
