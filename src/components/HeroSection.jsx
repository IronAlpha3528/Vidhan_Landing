import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import VortexArt from './VortexArt';
import { HERO_DATA } from '../data/content';

export default function HeroSection({ onOpenPartnerModal }) {
  const handleExploreClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('campus');
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-white dark:bg-vortex-navy-deep transition-colors duration-300"
    >
      {/* Subtle Grid & Gradient Canvas Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[55vw] h-[75vh] bg-gradient-to-bl from-blue-50/70 via-indigo-50/30 to-transparent dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-transparent -z-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[50vh] bg-gradient-to-tr from-rose-50/50 via-slate-50/40 to-transparent dark:from-rose-950/20 dark:via-slate-900/20 dark:to-transparent -z-10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Asymmetrical Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vortex-light-blue dark:bg-blue-950/60 text-vortex-blue dark:text-blue-300 text-xs font-semibold tracking-wide w-fit border border-blue-200/60 dark:border-blue-800/60 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-vortex-blue animate-pulse" />
              <span>{HERO_DATA.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-vortex-navy dark:text-white tracking-tight leading-[1.08] mb-6 text-balance"
            >
              From communities <br className="hidden sm:inline" />
              to <span className="text-gradient-blue-maroon">culture.</span>
            </motion.h1>

            {/* Concise Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8 max-w-xl text-balance"
            >
              {HERO_DATA.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <button
                onClick={() => onOpenPartnerModal()}
                id="hero-partner-cta"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-vortex-blue text-white text-sm sm:text-base font-semibold shadow-lg shadow-blue-500/25 hover:bg-vortex-blue-700 hover:shadow-xl hover:shadow-blue-500/35 active:scale-[0.98] transition-all duration-200 overflow-hidden"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
                <span>{HERO_DATA.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#campus"
                onClick={handleExploreClick}
                id="hero-explore-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-vortex-navy-surface text-vortex-navy dark:text-white text-sm sm:text-base font-semibold border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-[0.98] transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-vortex-blue dark:text-blue-400" />
                <span>{HERO_DATA.ctaSecondary}</span>
              </a>
            </motion.div>

            {/* Metric Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
            >
              {HERO_DATA.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-vortex-navy dark:text-white tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Immersive Vortex Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <VortexArt />
          </div>
        </div>
      </div>
    </section>
  );
}
