import React from "react";
import Navbar from "../components/pub/NavBar";
import HeroSection from "../components/pub/HeroSection";
import AboutSection from "../components/pub/AboutSection";
import MenuSection from "../components/pub/MenuSection";
import EventsSection from "../components/pub/EventsSection";
import ContactSection from "../components/pub/ContactSection";
import Footer from "../components/pub/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}