import React from 'react';

export default function VortexLogo({ variant = 'auto', className = '' }) {
  // variant can be 'light' (always white text), 'dark' (always dark text), or 'auto' (adapts to light/dark mode)
  const isAlwaysLight = variant === 'light';
  const isAlwaysDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Company Logo Emblem */}
      <div className={`relative flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105 ${
        isAlwaysLight ? 'bg-white/90 p-1 rounded-xl shadow-sm' : 'dark:bg-white/10 dark:p-1 dark:rounded-xl dark:backdrop-blur-sm'
      }`}>
        <img
          src="/vortex-logo.png"
          alt="Vortex Ventures"
          className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
          loading="eager"
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-tight text-lg sm:text-xl transition-colors duration-200 ${
            isAlwaysLight
              ? 'text-white'
              : isAlwaysDark
              ? 'text-vortex-navy'
              : 'text-vortex-navy dark:text-white'
          }`}
        >
          VORTEX
        </span>
        <span
          className={`font-bold tracking-[0.22em] text-[10px] sm:text-[11px] uppercase transition-colors duration-200 ${
            isAlwaysLight
              ? 'text-blue-300'
              : isAlwaysDark
              ? 'text-vortex-blue'
              : 'text-vortex-blue dark:text-blue-400'
          }`}
        >
          VENTURES
        </span>
      </div>
    </div>
  );
}
