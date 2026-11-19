import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';
import { fadeUp } from '../constants/animations';
import { contactInfo } from '../constants/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center py-24">
      <div className="section-container flex flex-col">
        {/* Section Header */}
        <SectionHeader
          label="contact"
          title="Start a quest?"
          description="Have a project in mind, an opportunity to discuss, or just want to connect? Send a dispatch below."
        />

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form Column */}
          <motion.div {...fadeUp(0.1, 16)} className="lg:col-span-7">
            {sent ? (
              <div
                role="status"
                aria-live="polite"
                className="p-6 rounded border border-(--accent-sage) bg-(--bg-surface) text-(--text-primary) space-y-2"
              >
                <div className="font-display font-medium text-base text-(--accent-sage)">Message dispatched!</div>
                <p className="font-sans text-sm text-(--text-secondary) leading-relaxed">
                  Thank you for reaching out. Your transmission arrived safely and I will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="font-mono text-xs text-(--text-muted) hover:text-(--accent-sage) underline pt-2 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate={false}>
                <input type="hidden" name="access_key" value={contactInfo.web3formsKey} />
                {/* Honeypot field for bot protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="font-mono text-xs uppercase tracking-wider text-(--text-secondary)">
                    Name <span className="text-(--accent-amber)">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name or organization"
                    value={form.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-(--bg-surface) border border-(--border-subtle) rounded px-4 py-3 text-sm text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:border-(--accent-sage) focus:ring-1 focus:ring-(--accent-sage) transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="font-mono text-xs uppercase tracking-wider text-(--text-secondary)">
                    Email <span className="text-(--accent-amber)">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-(--bg-surface) border border-(--border-subtle) rounded px-4 py-3 text-sm text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:border-(--accent-sage) focus:ring-1 focus:ring-(--accent-sage) transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="font-mono text-xs uppercase tracking-wider text-(--text-secondary)">
                    Message <span className="text-(--accent-amber)">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What are you building or exploring?"
                    value={form.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-(--bg-surface) border border-(--border-subtle) rounded px-4 py-3 text-sm text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:border-(--accent-sage) focus:ring-1 focus:ring-(--accent-sage) transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {/* Error Banner */}
                {error && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-3 rounded border border-rose-900/60 bg-rose-950/20 text-rose-300 font-mono text-xs"
                  >
                    Transmission failed. Please check your network or email directly at{' '}
                    <a href={`mailto:${contactInfo.email}`} className="underline font-bold">
                      {contactInfo.email}
                    </a>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-interactive self-start cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-3 h-3 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      <span>Sending transmission...</span>
                    </>
                  ) : (
                    <>
                      <span>Send dispatch</span>
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Direct Info & Socials Column */}
          <motion.div {...fadeUp(0.2, 16)} className="lg:col-span-5 flex flex-col gap-8 lg:pl-8 border-t lg:border-t-0 lg:border-l border-(--border-subtle) pt-8 lg:pt-0">
            {/* Direct Email */}
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[0.7rem] uppercase tracking-wider text-(--text-muted)">Direct Email</span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="font-mono text-sm text-(--text-primary) hover:text-(--accent-sage) transition-colors inline-flex items-center gap-2 group w-fit"
              >
                <span>{contactInfo.email}</span>
                <span className="text-(--text-muted) group-hover:text-(--accent-sage) transition-colors" aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[0.7rem] uppercase tracking-wider text-(--text-muted)">Location</span>
              <p className="font-sans text-sm text-(--text-primary)">{contactInfo.location}</p>
            </div>

            {/* Social Links (Single source of truth) */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[0.7rem] uppercase tracking-wider text-(--text-muted)">Elsewhere</span>
              <div className="flex flex-col gap-2.5">
                {contactInfo.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-(--text-secondary) hover:text-(--accent-sage) transition-colors inline-flex items-center gap-2 group w-fit"
                  >
                    <span>{social.label}</span>
                    <svg
                      className="w-3.5 h-3.5 text-(--text-muted) group-hover:text-(--accent-sage) transition-colors"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17l10-10M7 7h10v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Status / Availability */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="font-mono text-[0.7rem] uppercase tracking-wider text-(--text-muted)">Status</span>
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-(--bg-surface) border border-(--border-subtle) w-fit">
                <span className="w-2 h-2 rounded-full bg-(--accent-sage)" aria-hidden="true" />
                <span className="font-mono text-xs text-(--text-primary)">Open to opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
