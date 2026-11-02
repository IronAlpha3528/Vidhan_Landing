import React, { useState } from 'react';
import VortexLogo from './VortexLogo';
import { NAV_LINKS, CONTACT_EMAIL } from '../data/content';
import { ArrowUp, Mail, Copy, Check } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
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

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-vortex-navy-deep text-slate-400 py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80 items-start">
          {/* Logo & Statement */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <VortexLogo variant="light" />
            <p className="text-xs sm:text-sm text-slate-400 mt-3 max-w-sm leading-relaxed">
              Connecting brands with the campuses, cities, and communities that move the next generation.
            </p>
          </div>

          {/* Direct Contact Email Card */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Official Inquiries
            </span>
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-xl px-3.5 py-2 hover:border-blue-500/50 transition-colors">
              <Mail className="w-4 h-4 text-vortex-blue flex-shrink-0" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-xs sm:text-sm text-slate-200 hover:text-white font-medium transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-1"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            {copied && (
              <span className="text-[10px] text-emerald-400 mt-1 font-medium">
                Email copied to clipboard!
              </span>
            )}
          </div>

          {/* Navigation & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between h-full gap-4">
            <nav className="flex flex-wrap md:justify-end gap-x-5 gap-y-2 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-vortex-blue self-start md:self-end mt-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Vortex Ventures. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Brand Partnerships & Live Experiences</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
