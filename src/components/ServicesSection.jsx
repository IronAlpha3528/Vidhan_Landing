import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, GraduationCap, Building2, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

export default function ServicesSection({ onOpenPartnerModal }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="services" className="py-24 lg:py-32 bg-white dark:bg-vortex-navy-deep relative overflow-hidden transition-colors duration-300">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[600px] bg-radial-vortex pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-vortex-navy-surface text-vortex-navy dark:text-blue-300 border border-slate-200/50 dark:border-slate-700/60 text-xs font-bold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-vortex-blue dark:text-blue-400" />
            <span>{SERVICES_DATA.eyebrow}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vortex-navy dark:text-white tracking-tight mb-6"
          >
            {SERVICES_DATA.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {SERVICES_DATA.subtext}
          </motion.p>
        </div>

        {/* Two Large Interactive Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* 1. Vortex Campus Card */}
          <div id="campus" className="scroll-mt-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredCard('campus')}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-vortex-navy flex flex-col justify-between min-h-[560px] sm:min-h-[600px] border border-slate-200/50 hover:border-blue-500/50"
            >
              {/* Background Photography with Zoom & Gradient Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={SERVICES_DATA.campus.image}
                  alt="Vortex Campus Activations and College Fests"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.75] contrast-[1.05]"
                  loading="lazy"
                />
                {/* Electric Blue Gradient Tone */}
                <div className="absolute inset-0 bg-gradient-to-t from-vortex-navy via-vortex-navy/80 to-vortex-navy/40 group-hover:from-vortex-navy/95 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Top: Badges & Category */}
              <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vortex-blue text-white text-xs font-bold tracking-wide shadow-md">
                  <GraduationCap className="w-4 h-4" />
                  <span>{SERVICES_DATA.campus.badge}</span>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-vortex-blue group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Card Bottom: Content, Tags, Stats & Action */}
              <div className="relative z-10 p-6 sm:p-8 pt-0 flex flex-col justify-end">
                <div className="text-blue-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-1">
                  {SERVICES_DATA.campus.tagline}
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  {SERVICES_DATA.campus.title}
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  {SERVICES_DATA.campus.description}
                </p>

                {/* Focus Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {SERVICES_DATA.campus.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-100 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Micro Stats Strip */}
                <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 mb-6">
                  {SERVICES_DATA.campus.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-xs text-blue-200/80 font-medium">{stat.label}</div>
                      <div className="text-sm sm:text-base font-bold text-white mt-0.5">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Interactive Action Button */}
                <button
                  onClick={() => onOpenPartnerModal('Campus')}
                  id="campus-inquire-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-vortex-blue text-white text-sm font-semibold hover:bg-blue-600 active:scale-95 transition-all shadow-lg shadow-blue-600/30"
                >
                  <span>Explore Campus Partnerships</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* 2. Vortex City Card */}
          <div id="city" className="scroll-mt-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              onMouseEnter={() => setHoveredCard('city')}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-vortex-navy flex flex-col justify-between min-h-[560px] sm:min-h-[600px] border border-slate-200/50 hover:border-rose-500/50"
            >
              {/* Background Photography with Zoom & Gradient Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={SERVICES_DATA.city.image}
                  alt="Vortex City Cultural Experiences and Metro Festivals"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.75] contrast-[1.05]"
                  loading="lazy"
                />
                {/* Deep Maroon Gradient Tone */}
                <div className="absolute inset-0 bg-gradient-to-t from-vortex-navy via-vortex-navy/80 to-vortex-navy/40 group-hover:from-vortex-navy/95 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Top: Badges & Category */}
              <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vortex-maroon text-white text-xs font-bold tracking-wide shadow-md">
                  <Building2 className="w-4 h-4" />
                  <span>{SERVICES_DATA.city.badge}</span>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-vortex-maroon group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Card Bottom: Content, Tags, Stats & Action */}
              <div className="relative z-10 p-6 sm:p-8 pt-0 flex flex-col justify-end">
                <div className="text-rose-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-1">
                  {SERVICES_DATA.city.tagline}
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  {SERVICES_DATA.city.title}
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  {SERVICES_DATA.city.description}
                </p>

                {/* Focus Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {SERVICES_DATA.city.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-100 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Micro Stats Strip */}
                <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 mb-6">
                  {SERVICES_DATA.city.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-xs text-rose-200/80 font-medium">{stat.label}</div>
                      <div className="text-sm sm:text-base font-bold text-white mt-0.5">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Interactive Action Button */}
                <button
                  onClick={() => onOpenPartnerModal('City')}
                  id="city-inquire-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-vortex-maroon text-white text-sm font-semibold hover:bg-rose-700 active:scale-95 transition-all shadow-lg shadow-rose-700/30"
                >
                  <span>Explore City Partnerships</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
