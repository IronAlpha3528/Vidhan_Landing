import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Users, Flame } from 'lucide-react';

export default function VortexArt() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[480px] sm:h-[540px] lg:h-[620px] flex items-center justify-center select-none"
    >
      {/* Background Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-10 w-80 h-80 bg-vortex-blue/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-vortex-maroon/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl" />
      </div>

      {/* Kinetic Vortex Ribbons (Original SVG Graphic) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[110%] h-[110%] opacity-40 sm:opacity-55"
        >
          <defs>
            <linearGradient id="artRibbonBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="artRibbonMaroon" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B91C3C" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#FB7185" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#BE123C" stopOpacity="0.05" />
            </linearGradient>

            <linearGradient id="artRibbonCyan" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
            </linearGradient>

            <filter id="ribbonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ribbon Spiral Track A */}
          <path
            d="M300,70 C427,70 530,173 530,300 C530,427 427,530 300,530 C173,530 70,427 70,300 C70,210 120,135 195,95"
            stroke="url(#artRibbonBlue)"
            strokeWidth="3"
            strokeDasharray="16 12"
            strokeLinecap="round"
          />

          {/* Ribbon Spiral Track B */}
          <path
            d="M300,120 C399,120 480,201 480,300 C480,399 399,480 300,480 C201,480 120,399 120,300 C120,230 160,170 220,140"
            stroke="url(#artRibbonMaroon)"
            strokeWidth="2.5"
            strokeDasharray="24 16"
            strokeLinecap="round"
          />

          {/* Elliptical Flowing Vortex Curves */}
          <ellipse
            cx="300"
            cy="300"
            rx="240"
            ry="110"
            transform="rotate(-25 300 300)"
            stroke="url(#artRibbonCyan)"
            strokeWidth="2"
            strokeDasharray="30 20"
            strokeOpacity="0.7"
          />
          <ellipse
            cx="300"
            cy="300"
            rx="210"
            ry="95"
            transform="rotate(40 300 300)"
            stroke="url(#artRibbonBlue)"
            strokeWidth="1.5"
            strokeDasharray="12 18"
            strokeOpacity="0.6"
          />
        </svg>
      </motion.div>

      {/* Floating Compositions Layer */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        animate={{
          x: mousePos.x * 24,
          y: mousePos.y * 24,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
      >
        {/* Floating Panel 1: Live Concert Excitement (Center-Right Anchor) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-2 sm:right-6 top-10 sm:top-14 w-52 sm:w-64 lg:w-72 rounded-2xl overflow-hidden shadow-2xl border border-white/60 dark:border-white/15 bg-white/40 dark:bg-slate-900/60 backdrop-blur-md group hover:z-30 transition-all duration-300 hover:scale-[1.03]"
          style={{
            transform: 'rotate(2.5deg)',
          }}
        >
          <div className="relative h-36 sm:h-44 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=80"
              alt="City Cultural Experience and Music Festival"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vortex-navy/90 via-vortex-navy/30 to-transparent" />
            <div className="absolute top-3 left-3 bg-vortex-maroon/90 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm shadow flex items-center gap-1">
              <Flame className="w-3 h-3" />
              <span>City Arenas</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <p className="text-xs sm:text-sm font-bold leading-snug drop-shadow-sm">
                Metropolitan Music & Arts
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-200">
                15+ Metro City Experiences
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floating Panel 2: College Campus Festival (Top-Left Anchor) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="absolute left-2 sm:left-4 top-4 sm:top-8 w-48 sm:w-60 lg:w-64 rounded-2xl overflow-hidden shadow-2xl border border-white/60 dark:border-white/15 bg-white/40 dark:bg-slate-900/60 backdrop-blur-md group hover:z-30 transition-all duration-300 hover:scale-[1.03]"
          style={{
            transform: 'rotate(-4deg)',
          }}
        >
          <div className="relative h-32 sm:h-40 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=700&q=80"
              alt="College Campus Festival Stage"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vortex-navy/90 via-vortex-navy/20 to-transparent" />
            <div className="absolute top-3 left-3 bg-vortex-blue/90 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm shadow flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>Campus Culture</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <p className="text-xs sm:text-sm font-bold leading-snug drop-shadow-sm">
                Annual College Festivals
              </p>
              <p className="text-[10px] sm:text-[11px] text-blue-100">
                Tier-1 University Activations
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floating Panel 3: Creator & Experiential Pop-up (Bottom-Center / Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-6 sm:left-12 bottom-6 sm:bottom-12 w-52 sm:w-64 lg:w-72 rounded-2xl overflow-hidden shadow-2xl border border-white/70 dark:border-white/15 bg-white/50 dark:bg-slate-900/60 backdrop-blur-md group hover:z-30 transition-all duration-300 hover:scale-[1.03]"
          style={{
            transform: 'rotate(1deg)',
          }}
        >
          <div className="relative h-32 sm:h-36 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=700&q=80"
              alt="Live Brand Activation and Creator Zone"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vortex-navy/90 via-vortex-navy/30 to-transparent" />
            <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/20 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Experiential Pop-Up</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <p className="text-xs sm:text-sm font-bold leading-snug">
                Interactive Brand Lounges
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-300">
                High-touch product trial & immersion
              </p>
            </div>
          </div>
        </motion.div>

        {/* Central Dynamic Energy Orbit Badge */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-6 sm:right-16 bottom-20 sm:bottom-28 z-20"
        >
          <div className="flex items-center gap-2.5 bg-white/95 dark:bg-vortex-navy-surface/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-blue-100 dark:border-slate-700/80 hover:shadow-2xl transition-all">
            <div className="w-3 h-3 rounded-full bg-vortex-blue animate-ping" />
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Status
              </span>
              <span className="text-xs font-bold text-vortex-navy dark:text-white">
                50+ Upcoming Festivals
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
