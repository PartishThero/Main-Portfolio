import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});

const inputStyle = {
  width: '100%',
  backgroundColor: 'var(--bg-surface)',
  border: '1.5px solid var(--accent-main)',
  borderRadius: '0.5rem',
  padding: '0.85rem 1rem',
  color: 'var(--text-primary)',
  fontFamily: '"Courier New", monospace',
  fontSize: '0.85rem',
  outline: 'none',
  transition: 'box-shadow 0.15s ease',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    // Hook up to your backend / EmailJS / Formspree here
    setSent(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        paddingTop: '10rem',
        paddingBottom: '8rem',
        paddingLeft: '14vw',
        paddingRight: '14vw',
      }}
    >
      {/* ── Header ── */}
      <div className="flex flex-col gap-4" style={{ marginBottom: '4rem' }}>
        <motion.p {...fadeUp(0)}
          className="font-mono text-xs uppercase"
          style={{ letterSpacing: '0.2em', color: 'var(--accent-secondary)' }}
        >
          / contact
        </motion.p>
        <motion.h2 {...fadeUp(0.1)}
          className="leading-none"
          style={{ fontFamily: '"Boldonse", system-ui', fontSize: '4rem' }}
        >
          Let's{' '}
          <span style={{ color: 'var(--accent-main)' }}>talk.</span>
        </motion.h2>
        <motion.div {...fadeUp(0.15)}
          style={{ width: '3rem', height: '2px', backgroundColor: 'var(--accent-main)' }}
        />
      </div>

      {/* ── Two columns ── */}
      <div className="flex gap-24" style={{ alignItems: 'flex-start' }}>

        {/* LEFT: Form */}
        <motion.div {...fadeUp(0.2)} style={{ flex: 1 }}>
          {sent ? (
            <div
              className="font-mono text-sm"
              style={{ color: 'var(--accent-main)', lineHeight: 1.8 }}
            >
              Message sent! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.boxShadow = '4px 4px 0px var(--accent-main)'}
                  onBlur={e => e.target.style.boxShadow = 'none'}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="your@email.com"
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.boxShadow = '4px 4px 0px var(--accent-main)'}
                  onBlur={e => e.target.style.boxShadow = 'none'}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  placeholder="What's on your mind?"
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => e.target.style.boxShadow = '4px 4px 0px var(--accent-main)'}
                  onBlur={e => e.target.style.boxShadow = 'none'}
                />
              </div>

              <button
                type="submit"
                className="font-mono text-xs uppercase self-start"
                style={{
                  letterSpacing: '0.12em',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'var(--accent-main)',
                  color: 'var(--bg-primary)',
                  border: '1.5px solid var(--accent-main)',
                  boxShadow: '4px 4px 0px var(--bg-surface)',
                  transition: 'all 0.12s ease',
                  marginTop: '0.5rem',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translate(0, -3px)';
                  e.currentTarget.style.boxShadow = '4px 8px 0px var(--bg-surface)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow = '4px 4px 0px var(--bg-surface)';
                }}
                onMouseDown={e => {
                  e.currentTarget.style.transform = 'translate(2px, 2px)';
                  e.currentTarget.style.boxShadow = '2px 2px 0px var(--bg-surface)';
                }}
                onMouseUp={e => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow = '4px 4px 0px var(--bg-surface)';
                }}
              >
                Send message →
              </button>

            </form>
          )}
        </motion.div>

        {/* RIGHT: Info */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col"
          style={{ gap: '2rem', minWidth: '220px' }}
        >
          {/* Email */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
              Email
            </p>
            <a
              href="mailto:hello@partish.dev"
              className="font-mono text-sm"
              style={{
                color: 'var(--accent-main)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--accent-main)',
                paddingBottom: '2px',
                width: 'fit-content',
              }}
            >
              hello@partish.dev
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
              Location
            </p>
            <p className="font-mono text-sm" style={{ color: 'var(--text-primary)' }}>
              Your City, Country
            </p>
          </div>

          {/* Timezone */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
              Timezone
            </p>
            <p className="font-mono text-sm" style={{ color: 'var(--text-primary)' }}>
              UTC+5:30 · IST
            </p>
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
              Availability
            </p>
            <div className="flex items-center gap-2">
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-main)',
                boxShadow: '0 0 6px var(--accent-main)',
              }} />
              <p className="font-mono text-sm" style={{ color: 'var(--accent-main)' }}>
                Open to work
              </p>
            </div>
          </div>

        </motion.div>
      </div>

      {/* ── Footer ── */}
      <motion.p
        {...fadeUp(0.4)}
        className="font-mono text-xs uppercase"
        style={{
          marginTop: '6rem',
          letterSpacing: '0.2em',
          color: 'var(--text-secondary)',
          opacity: 0.4,
        }}
      >
        © 2026 Partish · All Rights Reserved
      </motion.p>

    </div>
  );
}