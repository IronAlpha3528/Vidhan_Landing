import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Handshake, Sparkles, BarChart3, CheckCircle2 } from 'lucide-react';
import { PROCESS_DATA } from '../data/content';

const STEP_ICONS = [
  <Search className="w-5 h-5" />,
  <PenTool className="w-5 h-5" />,
  <Handshake className="w-5 h-5" />,
  <Sparkles className="w-5 h-5" />,
  <BarChart3 className="w-5 h-5" />,
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 lg:py-32 bg-vortex-soft dark:bg-vortex-navy-deep/60 border-t border-slate-200/60 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 dark:bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 dark:bg-rose-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-vortex-blue dark:text-blue-400 text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-vortex-blue" />
            <span>The Vortex Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vortex-navy dark:text-white tracking-tight mb-6">
            End-to-End Execution.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A structured framework designed to eliminate friction, secure guaranteed value, and ensure immaculate live activations.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Timeline */}
        <div className="hidden lg:block">
          {/* Animated Connecting Line */}
          <div className="relative mb-12">
            <div className="absolute top-6 left-10 right-10 h-0.5 bg-slate-200 dark:bg-slate-800" />
            <motion.div
              className="absolute top-6 left-10 h-0.5 bg-gradient-to-r from-vortex-blue via-indigo-500 to-vortex-maroon"
              initial={{ width: '0%' }}
              whileInView={{ width: '85%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />

            {/* 5 Numbered Stage Nodes */}
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {PROCESS_DATA.map((item, index) => {
                const isSelected = activeStep === index;

                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    onClick={() => setActiveStep(index)}
                    className="cursor-pointer group flex flex-col items-center text-center"
                  >
                    {/* Node Circle */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md ${
                        isSelected
                          ? 'bg-vortex-blue text-white ring-4 ring-blue-100 dark:ring-blue-900/50 scale-110 shadow-blue-500/30'
                          : 'bg-white dark:bg-vortex-navy-surface text-vortex-navy dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 group-hover:border-vortex-blue/50 group-hover:scale-105'
                      }`}
                    >
                      {item.step}
                    </div>

                    {/* Step Title & Tagline */}
                    <div className="mt-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-vortex-blue dark:text-blue-400">
                        Stage {item.step}
                      </span>
                      <h3
                        className={`text-lg font-bold transition-colors mt-0.5 ${
                          isSelected
                            ? 'text-vortex-blue dark:text-blue-400'
                            : 'text-vortex-navy dark:text-white'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                        {item.tagline}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detailed Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto p-8 rounded-3xl bg-white dark:bg-vortex-navy-surface/80 border border-slate-200/80 dark:border-slate-700/70 shadow-lg"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center text-vortex-blue dark:text-blue-400 flex-shrink-0">
                {STEP_ICONS[activeStep]}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-vortex-blue dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md">
                    Stage {PROCESS_DATA[activeStep].step}
                  </span>
                  <h4 className="text-2xl font-extrabold text-vortex-navy dark:text-white">
                    {PROCESS_DATA[activeStep].title} — {PROCESS_DATA[activeStep].tagline}
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">
                  {PROCESS_DATA[activeStep].description}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-lg w-fit">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Vortex Guaranteed Deliverable & Dedicated Campaign Manager</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-8">
          {PROCESS_DATA.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white dark:bg-vortex-navy-surface/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm"
            >
              {/* Timeline Dot on line */}
              <div className="absolute -left-[35px] top-6 w-8 h-8 rounded-xl bg-vortex-blue text-white flex items-center justify-center text-xs font-extrabold shadow-md">
                {item.step}
              </div>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-vortex-blue dark:text-blue-400">
                  Stage {item.step}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-vortex-navy dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                {item.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
