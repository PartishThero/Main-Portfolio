import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';
import { fadeUp } from '../constants/animations';
import { contactInfo } from '../constants/portfolioData';

const inputStyle = { width: '100%', backgroundColor: 'var(--surface)', border: '1.5px solid var(--ink)', borderRadius: '0.5rem', padding: '0.85rem 1rem', color: 'var(--ink)', fontFamily: '"Courier New", monospace', fontSize: '0.85rem', outline: 'none', transition: 'box-shadow 0.15s ease', resize: 'none' };
const maindivStyle = { backgroundColor: 'transparent', color: 'var(--ink)', paddingTop: '7rem', paddingBottom: '6rem', paddingLeft: 'clamp(1.25rem, 14vw, 14vw)', paddingRight: 'clamp(1.25rem, 14vw, 14vw)' };
const buttonStyle = { letterSpacing: '0.12em', padding: '0.75rem 2rem', borderRadius: '0.5rem', backgroundColor: 'var(--primary)', color: 'var(--surface)', border: '1.5px solid var(--ink)', boxShadow: '4px 4px 0px var(--shadow)', transition: 'all 0.12s ease', marginTop: '0.5rem' };
const formInputStyle = { letterSpacing: '0.1em', color: 'var(--muted)' };

const labelClassName = 'font-mono text-[0.7rem] uppercase';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleFocus = e => e.target.style.boxShadow = '4px 4px 0px var(--shadow)';
  const handleBlur  = e => e.target.style.boxShadow = 'none';

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleButtonEnter = e => { e.currentTarget.style.backgroundColor = 'var(--primary-hover)'; e.currentTarget.style.transform = 'translate(0, -3px)'; e.currentTarget.style.boxShadow = '4px 8px 0px var(--shadow)'; };
  const handleButtonLeave = e => { e.currentTarget.style.backgroundColor = 'var(--primary)'; e.currentTarget.style.transform = 'translate(0, 0)';    e.currentTarget.style.boxShadow = '4px 4px 0px var(--shadow)'; };
  const handleButtonDown  = e => { e.currentTarget.style.backgroundColor = 'var(--primary-active)'; e.currentTarget.style.transform = 'translate(2px, 2px)'; e.currentTarget.style.boxShadow = '2px 2px 0px var(--shadow)'; };
  const handleButtonUp    = e => { e.currentTarget.style.backgroundColor = 'var(--primary-hover)'; e.currentTarget.style.transform = 'translate(0, 0)';    e.currentTarget.style.boxShadow = '4px 4px 0px var(--shadow)'; };

  async function handleSubmit(e) {
    e.preventDefault();
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
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  const baseInputProps = { required: true, style: inputStyle, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur };
  const buttonProps = { onMouseEnter: handleButtonEnter, onMouseLeave: handleButtonLeave, onMouseDown: handleButtonDown, onMouseUp: handleButtonUp };

  return (
    <div className="min-h-screen flex flex-col" style={maindivStyle}>
      <SectionHeader label="contact" title="Start a" highlightWord="quest?" />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24" style={{ alignItems: 'flex-start' }}>
        <motion.div {...fadeUp(0.2, 20)} style={{ flex: 1, width: '100%' }}>
          {sent ? (
            <div className="font-mono text-sm" style={{ color: 'var(--primary)', lineHeight: 1.8 }}>
              Message sent! I&apos;ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <input type="hidden" name="access_key" value={contactInfo.web3formsKey} />

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className={labelClassName} style={formInputStyle}>Name</label>
                <input id="contact-name" name="name" type="text" placeholder="Your name" value={form.name} {...baseInputProps} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className={labelClassName} style={formInputStyle}>Email</label>
                <input id="contact-email" name="email" type="email" placeholder="your@email.com" value={form.email} {...baseInputProps} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className={labelClassName} style={formInputStyle}>Message</label>
                <textarea id="contact-message" name="message" placeholder="What should we work on? :3" value={form.message} rows={5} {...baseInputProps} />
              </div>

              {error && (
                <p className="font-mono text-xs" style={{ color: 'var(--primary-active)' }}>
                  Something went wrong — please try again or email me directly.
                </p>
              )}

              <button type="submit" className="font-mono text-xs self-start" style={buttonStyle} {...buttonProps}>
                Send the message →
              </button>
            </form>
          )}
        </motion.div>

        <motion.div {...fadeUp(0.3, 20)} className="flex flex-row flex-wrap lg:flex-col gap-8 lg:gap-8" style={{ minWidth: '200px' }}>
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: '0.1em', color: 'var(--muted)' }}>Email</p>
            <a href={`mailto:${contactInfo.email}`} className="font-mono text-sm" style={{ color: 'var(--primary)', textDecoration: 'none', borderBottom: '1px solid var(--primary)', paddingBottom: '2px', width: 'fit-content' }}>
              {contactInfo.email}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: '0.1em', color: 'var(--muted)' }}>Location</p>
            <p className="font-mono text-sm" style={{ color: 'var(--ink)' }}>{contactInfo.location}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: '0.1em', color: 'var(--muted)' }}>My socials</p>
            {contactInfo.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" style={{ color: 'var(--ink)' }}>
                <p className="font-mono text-sm flex items-center gap-3 transition-colors duration-150 hover:text-[var(--primary)]">
                  {social.label} <i className="fa-solid fa-up-right-from-square text-[10px]"></i>
                </p>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: '0.1em', color: 'var(--muted)' }}>Availability</p>
            <div className="flex items-center gap-2">
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)', boxShadow: '0 0 6px var(--primary)' }} />
              <p className="font-mono text-sm" style={{ color: 'var(--primary)' }}>Open to work</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
