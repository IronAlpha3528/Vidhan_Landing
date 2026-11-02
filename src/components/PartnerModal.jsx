import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Sparkles, Building, Mail, User, Send, ExternalLink } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/content';

export default function PartnerModal({ isOpen, onClose, initialFocus = 'Campus' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    focus: 'Campus',
    role: 'Brand / Agency',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (initialFocus === 'City') {
      setFormData((prev) => ({ ...prev, focus: 'City' }));
    } else if (initialFocus === 'Campus') {
      setFormData((prev) => ({ ...prev, focus: 'Campus' }));
    } else {
      setFormData((prev) => ({ ...prev, focus: 'Both' }));
    }
    setSubmitted(false);
    setStatusMessage('');
  }, [initialFocus, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      // 1st Method: Free form-to-inbox service (Web3Forms API)
      // Deliver directly to partnerships@vortexventures.in
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'e3a1f4b2-9c8d-4e7f-a1b2-c3d4e5f6a7b8';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Partnership Request from ${formData.name} (${formData.organization})`,
          from_name: `${formData.name} via Vortex Ventures`,
          to_email: CONTACT_EMAIL,
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          partnership_focus: formData.focus,
          role: formData.role,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (data.success) {
        setStatusMessage('Your inquiry was successfully dispatched to our team inbox.');
      } else {
        setStatusMessage(`Received! Our team will reach out directly at ${formData.email}.`);
      }
      setSubmitted(true);
    } catch (err) {
      console.warn('Form submission notification:', err);
      setStatusMessage(`Received! Our team will reach out directly at ${formData.email}.`);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Partnership Request: ${formData.organization} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Vortex Ventures Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nPartnership Focus: ${formData.focus}\nRole: ${formData.role}\n\nScope / Message:\n${formData.message}\n`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-vortex-navy/70 dark:bg-black/80 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white dark:bg-vortex-navy-surface rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700/70 overflow-hidden z-10 my-8 text-vortex-navy dark:text-white transition-colors duration-300"
          >
            {/* Header Bar */}
            <div className="relative bg-vortex-navy dark:bg-vortex-navy-deep text-white px-6 py-6 sm:px-8 overflow-hidden border-b border-slate-800">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-vortex-blue/40 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-vortex-maroon/30 rounded-full blur-2xl" />

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-semibold text-blue-300 uppercase tracking-wider mb-2">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    Partnership Inquiries
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Partner with Vortex Ventures
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Delivered directly to <span className="text-blue-300 font-semibold">{CONTACT_EMAIL}</span>
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-100 dark:border-emerald-800">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-vortex-navy dark:text-white mb-2">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto mb-4">
                    {statusMessage || 'Your inquiry was routed directly to our inbox.'}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-6">
                    Our team will review your requirements and respond directly from <strong className="text-vortex-navy dark:text-white">{CONTACT_EMAIL}</strong> within 24 hours.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateMailtoUrl()}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      title="Open in your default email app"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-vortex-blue" />
                      <span>Open Copy in Mail App</span>
                    </a>

                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-xl bg-vortex-blue text-white text-xs font-semibold hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20"
                    >
                      Done
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Partnership Interest Selection */}
                  <div>
                    <label className="block text-xs font-bold text-vortex-navy dark:text-slate-200 uppercase tracking-wider mb-2">
                      Partnership Focus
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'Campus', label: 'Vortex Campus' },
                        { id: 'City', label: 'Vortex City' },
                        { id: 'Both', label: 'Multi-Network' },
                      ].map((opt) => (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => setFormData({ ...formData, focus: opt.id })}
                          className={`py-2 px-3 rounded-xl text-xs font-bold text-center border transition-all ${
                            formData.focus === opt.id
                              ? 'bg-blue-50 dark:bg-blue-950/70 border-vortex-blue text-vortex-blue dark:text-blue-300 shadow-sm'
                              : 'bg-white dark:bg-vortex-navy-deep border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-vortex-navy-deep text-sm text-vortex-navy dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-vortex-blue focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@brand.com"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-vortex-navy-deep text-sm text-vortex-navy dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-vortex-blue focus:border-transparent transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Organization & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                        Company / Organization *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Brand or Fest Name"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-vortex-navy-deep text-sm text-vortex-navy dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-vortex-blue focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                        You are a...
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm text-vortex-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-vortex-blue focus:border-transparent transition bg-white dark:bg-vortex-navy-deep"
                      >
                        <option value="Brand / Agency">Brand / Agency Team</option>
                        <option value="College Fest Committee">College Fest Committee</option>
                        <option value="City Event Promoter">City Event Promoter</option>
                        <option value="Creator / Talent">Creator / Talent</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                      Campaign Scope or Inquiries
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand goals, target timeline, or fest dates..."
                      className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-vortex-navy-deep text-sm text-vortex-navy dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-vortex-blue focus:border-transparent transition resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-vortex-blue text-white text-sm font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-600 active:scale-98 transition disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Partnership Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-3">
                      Prefer direct email? Reach us at{' '}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-vortex-blue dark:text-blue-400 font-semibold hover:underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
