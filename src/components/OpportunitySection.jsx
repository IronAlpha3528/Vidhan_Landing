import React from 'react';
import { motion } from 'motion/react';
import { Target, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { OPPORTUNITY_DATA } from '../data/content';

export default function OpportunitySection() {
  const icons = [
    <Zap className="w-5 h-5 text-vortex-blue dark:text-blue-400" />,
    <Target className="w-5 h-5 text-vortex-maroon dark:text-rose-400" />,
    <ShieldCheck className="w-5 h-5 text-vortex-blue dark:text-blue-400" />,
  ];

  return (
    <section
      id="opportunity"
      className="relative py-20 lg:py-28 bg-vortex-soft dark:bg-vortex-navy-deep/60 border-y border-slate-100 dark:border-slate-800/80 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Vortex Wave Graphic in Background */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-vortex-blue/5 dark:bg-vortex-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/3 w-80 h-80 bg-vortex-maroon/5 dark:bg-vortex-maroon/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side: Asymmetrical Curated Photography with Vortex Accent */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            {/* Main Visual Frame with Curved Vortex Accent */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                  alt="Young diverse community experiencing culture together"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-vortex-navy/90 via-vortex-navy/20 to-transparent" />

                {/* Bottom caption overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Real-World Connection</span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold leading-relaxed text-slate-100">
                    "Brands aren't remembered by impressions. They are remembered by how they made people feel at their favorite moments."
                  </p>
                </div>
              </div>

              {/* Decorative Vortex Ribbon Overlay */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-[6px] border-vortex-blue/20 dark:border-blue-500/20 pointer-events-none -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full border-[6px] border-vortex-maroon/20 dark:border-rose-500/20 pointer-events-none -z-10" />

              {/* Floating Stat Pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 right-4 sm:-right-4 bg-white dark:bg-vortex-navy-surface px-5 py-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700/80 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center flex-shrink-0 text-vortex-blue dark:text-blue-400 font-black text-lg">
                  #1
                </div>
                <div>
                  <div className="text-xs font-bold text-vortex-navy dark:text-white">
                    Experiential Retention
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    High Recall Across Gen-Z
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Copy Side: Clear Message & 3 Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-vortex-blue dark:text-blue-400 mb-3">
              <span className="w-6 h-0.5 bg-vortex-blue dark:bg-blue-400 rounded-full" />
              <span>{OPPORTUNITY_DATA.eyebrow}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vortex-navy dark:text-white tracking-tight leading-tight mb-6 text-balance">
              {OPPORTUNITY_DATA.headline}
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {OPPORTUNITY_DATA.description}
            </p>

            {/* 3 Pillars */}
            <div className="space-y-4">
              {OPPORTUNITY_DATA.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-vortex-navy-surface/60 border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:border-blue-200 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {icons[idx]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-vortex-navy dark:text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
