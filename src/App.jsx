import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoBanner from './components/PromoBanner';
import UnitShowcase from './components/UnitShowcase';
import FloorPlanViewer from './components/FloorPlanViewer';
import VideoTour from './components/VideoTour';
import LocationSection from './components/LocationSection';
import FacilitiesSection from './components/FacilitiesSection';
import GallerySection from './components/GallerySection';
import BookingForm from './components/BookingForm';
import DeveloperSection from './components/DeveloperSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedUnit, setSelectedUnit] = useState('Tipe 30+');

  const scrollToBooking = (unitName) => {
    if (unitName && typeof unitName === 'string') {
      setSelectedUnit(unitName);
    }
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <Hero onScrollToBooking={() => scrollToBooking()} />

        {/* Promo Banner Overlay */}
        <PromoBanner />

        {/* Unit Showcase (Type 30+ & Type 36+) */}
        <UnitShowcase onSelectUnitForBooking={scrollToBooking} />

        {/* Floor Plan & Architectural Blueprints */}
        <FloorPlanViewer />

        {/* Video Tour & Aerial Masterplan */}
        <VideoTour />

        {/* Strategic Location & Accessibility */}
        <LocationSection />

        {/* Cluster Facilities & Master Environment */}
        <FacilitiesSection />

        {/* Photo Gallery & Documentation */}
        <GallerySection />

        {/* Booking Survey Form */}
        <BookingForm preselectedUnit={selectedUnit} />

        {/* Developer Credibility (CIPTA Group) */}
        <DeveloperSection />

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
