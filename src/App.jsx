import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OpportunitySection from './components/OpportunitySection';
import ServicesSection from './components/ServicesSection';
import ProcessTimeline from './components/ProcessTimeline';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PartnerModal from './components/PartnerModal';

export default function App() {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [modalFocus, setModalFocus] = useState('Campus');
  
  // Safe helper to apply theme to DOM and localStorage
  const applyThemeToDOM = (newTheme) => {
    try {
      const root = document.documentElement;
      const body = document.body;
      if (newTheme === 'dark') {
        root.classList.add('dark');
        if (body) body.classList.add('dark');
        try {
          localStorage.setItem('vortex-theme', 'dark');
        } catch (e) {
          // Ignore private browsing storage restrictions
        }
      } else {
        root.classList.remove('dark');
        if (body) body.classList.remove('dark');
        try {
          localStorage.setItem('vortex-theme', 'light');
        } catch (e) {
          // Ignore private browsing storage restrictions
        }
      }
    } catch (err) {
      console.warn('DOM theme application warning:', err);
    }
  };

  // Theme state: initialized from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedTheme = localStorage.getItem('vortex-theme');
        if (savedTheme === 'dark' || savedTheme === 'light') {
          return savedTheme;
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
      } catch (e) {
        console.warn('Theme storage read warning:', e);
      }
    }
    return 'light';
  });

  // Ensure DOM strictly reflects theme state on mount and on every theme change
  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);

  // Guaranteed bidirectional toggle handler
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      // Determine if currently dark by inspecting both state and documentElement
      const isCurrentlyDark =
        prevTheme === 'dark' ||
        (typeof document !== 'undefined' && document.documentElement.classList.contains('dark'));
      const nextTheme = isCurrentlyDark ? 'light' : 'dark';
      applyThemeToDOM(nextTheme);
      return nextTheme;
    });
  };

  const handleOpenPartnerModal = (focus = 'Campus') => {
    setModalFocus(focus);
    setPartnerModalOpen(true);
  };

  const handleClosePartnerModal = () => {
    setPartnerModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-vortex-navy-deep text-vortex-navy dark:text-white font-sans antialiased selection:bg-vortex-blue selection:text-white flex flex-col transition-colors duration-300">
      {/* Dynamic Navigation with Theme Toggle */}
      <Navbar
        onOpenPartnerModal={() => handleOpenPartnerModal('General')}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenPartnerModal={() => handleOpenPartnerModal('General')} />

        {/* Opportunity / Brand Message */}
        <OpportunitySection />

        {/* Services: Two Worlds, One Partner */}
        <ServicesSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* Our Process: 5 Stages Timeline */}
        <ProcessTimeline />

        {/* Final Call to Action */}
        <FinalCTA onOpenPartnerModal={handleOpenPartnerModal} />
      </main>

      {/* Clean Compact Footer */}
      <Footer />

      {/* Interactive Partner Inquiry Modal with direct Inbox routing */}
      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={handleClosePartnerModal}
        initialFocus={modalFocus}
      />
    </div>
  );
}
