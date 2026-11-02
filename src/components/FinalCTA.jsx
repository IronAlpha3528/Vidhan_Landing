import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Sparkles, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/content';

export default function FinalCTA({ onOpenPartnerModal }) {
  return (
    <section className="relative py-28 lg:py-36 bg-vortex-navy text-white overflow-hidden">
      {/* Cinematic Background Event Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80"
          alt="Immersive live event with stage lighting and crowd"
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125"
          loading="lazy"
        />
        {/* Dark Navy Overlays */}
        <div className="absolute inset-0 bg-vortex-navy/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-vortex-navy via-transparent to-vortex-navy" />
      </div>

      {/* Restrained Electric Blue and Maroon Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-vortex-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-vortex-maroon/25 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Animated Ambient Light Trail */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-300" />
          <span>Start Your Campaign</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto text-balance leading-tight"
        >
          Turn ideas into <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-rose-300">
            real-world impact.
          </span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-300 font-normal mb-10 max-w-xl mx-auto"
        >
          Let's build your next partnership.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <button
            onClick={() => onOpenPartnerModal('General')}
            id="final-partner-cta"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-vortex-blue text-white text-base font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95 transition-all duration-200 overflow-hidden"
          >
            <span className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
            <span>Partner With Us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => onOpenPartnerModal('ScheduleCall')}
            id="final-schedule-cta"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white text-base font-semibold backdrop-blur-md border border-white/20 active:scale-95 transition-all duration-200"
          >
            <Calendar className="w-4 h-4 text-blue-300" />
            <span>Schedule a Call</span>
          </button>
        </motion.div>

        {/* Direct Email Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400"
        >
          <span>Prefer direct email?</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white font-medium underline underline-offset-4 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{CONTACT_EMAIL}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
