import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import VortexLogo from './VortexLogo';
import { NAV_LINKS } from '../data/content';

export default function Navbar({ onOpenPartnerModal, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section for clean indicator
      const sections = ['hero', 'opportunity', 'campus', 'city', 'process'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-vortex-navy-deep/90 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-vortex-blue rounded-lg"
            aria-label="Vortex Ventures Home"
          >
            <VortexLogo variant="auto" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-50/80 dark:bg-vortex-navy-surface/80 p-1.5 rounded-full border border-slate-200/70 dark:border-slate-700/60 shadow-inner">
            {NAV_LINKS.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-vortex-navy dark:text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-vortex-navy dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 bg-white dark:bg-vortex-navy-deep rounded-full shadow-sm border border-slate-200/50 dark:border-slate-700 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar: Theme Toggle & Partner CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark / Light Mode Toggle Button */}
            <button
              type="button"
              id="theme-toggle-desktop"
              onClick={toggleTheme}
              className="relative p-2.5 rounded-full bg-slate-100 dark:bg-vortex-navy-surface text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200/70 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-vortex-blue cursor-pointer select-none"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-pressed={isDark}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-300 transition-transform hover:rotate-45 pointer-events-none" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 dark:text-slate-200 transition-transform hover:-rotate-12 pointer-events-none" />
              )}
            </button>

            <button
              type="button"
              onClick={() => onOpenPartnerModal()}
              id="nav-partner-btn"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-vortex-blue text-white text-xs lg:text-sm font-semibold shadow-md shadow-blue-500/20 hover:bg-vortex-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-all duration-200 overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 pointer-events-none" />
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle & Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              id="theme-toggle-mobile"
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer select-none"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-pressed={isDark}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-300 pointer-events-none" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 pointer-events-none" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-vortex-navy dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-vortex-blue cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 pointer-events-none" />
              ) : (
                <Menu className="w-6 h-6 pointer-events-none" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 dark:bg-vortex-navy-deep/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 pt-4 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-vortex-blue dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Drawer Dedicated Theme Toggle */}
              <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-vortex-navy-surface border border-slate-200/60 dark:border-slate-700/60 mt-1">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  Theme: <span className="text-vortex-blue dark:text-blue-400 font-bold">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
                </span>
                <button
                  type="button"
                  id="theme-toggle-drawer"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer"
                >
                  {isDark ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-300 pointer-events-none" />
                      <span>Switch to Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-slate-700 pointer-events-none" />
                      <span>Switch to Dark</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPartnerModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-vortex-blue text-white text-sm font-semibold shadow-md shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4 pointer-events-none" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
