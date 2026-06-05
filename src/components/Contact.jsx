import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./common/SectionHeader";
import { fadeUp } from "../constants/animations";
import { contactInfo } from "../constants/portfolioData";

//Styles
const inputStyle = { width: "100%", backgroundColor: "var(--bg-surface)", border: "1.5px solid var(--accent-main)", borderRadius: "0.5rem", padding: "0.85rem 1rem", color: "var(--text-primary)", fontFamily: '"Courier New", monospace', fontSize: "0.85rem", outline: "none", transition: "box-shadow 0.15s ease", resize: "none" };
const maindivStyle = { backgroundColor: "var(--bg-primary)", color: "var(--text-primary)", paddingTop: "7rem", paddingBottom: "6rem", paddingLeft: "clamp(1.25rem, 14vw, 14vw)", paddingRight: "clamp(1.25rem, 14vw, 14vw)" };
const buttonStyle = {letterSpacing: "0.12em", padding: "0.75rem 2rem", borderRadius: "0.5rem", backgroundColor: "var(--accent-main)", color: "var(--bg-primary)", border: "1.5px solid var(--accent-main)", boxShadow: "4px 4px 0px var(--bg-surface)", transition: "all 0.12s ease", marginTop: "0.5rem"};
const formInputStyle = { letterSpacing: "0.1em", color: "var(--text-secondary)" };

//Class Names
const InputClassName = "font-mono text-[0.7rem] uppercase";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleFocus = e => e.target.style.boxShadow = "4px 4px 0px var(--accent-main)";
  const handleBlur = e => e.target.style.boxShadow = "none";

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  //Button hover/click effects
  const handleButtonEnter = e => {
    e.currentTarget.style.transform = "translate(0, -3px)";
    e.currentTarget.style.boxShadow = "4px 8px 0px var(--bg-surface)";
  };
  const handleButtonLeave = e => {
    e.currentTarget.style.transform = "translate(0, 0)";
    e.currentTarget.style.boxShadow = "4px 4px 0px var(--bg-surface)";
  };
  const handleButtonDown = e => {
    e.currentTarget.style.transform = "translate(2px, 2px)";
    e.currentTarget.style.boxShadow = "2px 2px 0px var(--bg-surface)";
  };
  const handleButtonUp = e => {
    e.currentTarget.style.transform = "translate(0, 0)";
    e.currentTarget.style.boxShadow = "4px 4px 0px var(--bg-surface)";
  };

  //Api submit
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) setSent(true);
  }

  const baseInputProps = {required: true, style: inputStyle, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur};
  const buttonProps = { onMouseEnter: handleButtonEnter, onMouseLeave: handleButtonLeave, onMouseDown:handleButtonDown, onMouseUp : handleButtonUp};

  return (
    <div className="min-h-screen flex flex-col" style={maindivStyle}>

      {/* Header */}
      <SectionHeader label="contact" title="Start a" highlightWord="quest?" />

      {/* Two columns */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24" style={{ alignItems: "flex-start" }}>

        {/* Form */}
        <motion.div {...fadeUp(0.2, 20)} style={{ flex: 1, width: "100%" }}>

          {sent ? (
            <div className="font-mono text-sm" style={{ color: "var(--accent-main)", lineHeight: 1.8 }}>
              Message sent! I&apos;ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <input type="hidden" name="access_key" value={contactInfo.web3formsKey}/>

              {/* Name */}
              <div className="flex flex-col gap-2"> 
                <label className={InputClassName} style={formInputStyle}> Name </label>
                <input name="name" type="text" placeholder="Your name" value={form.name} {...baseInputProps}/>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className={InputClassName} style={formInputStyle}> Email </label>
                <input name="email" type="email" placeholder="your@email.com" value={form.email} {...baseInputProps}/>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className={InputClassName} style={formInputStyle}> Message </label>
                <textarea name="message" placeholder="What should we work on? :3" value={form.message} rows={5} {...baseInputProps}/>
              </div>

              <button type="submit" className="font-mono text-xs self-start" style={buttonStyle} {...buttonProps}>
                Send the message →
              </button>
            </form>
          )}
        </motion.div>

        {/* Info panel */}
        <motion.div {...fadeUp(0.3, 20)} className="flex flex-row flex-wrap lg:flex-col gap-8 lg:gap-8" style={{ minWidth: "200px" }}>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: "0.1em", color: "var(--text-secondary)" }}> Email </p>
            <a href={`mailto:${contactInfo.email}`} className="font-mono text-sm" style={{ color: "var(--accent-main)", textDecoration: "none", borderBottom: "1px solid var(--accent-main)", paddingBottom: "2px", width: "fit-content"}}>
              {contactInfo.email}
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: "0.1em", color: "var(--text-secondary)" }}> Location </p>
            <p className="font-mono text-sm" style={{ color: "var(--text-primary)" }}> {contactInfo.location} </p> 
          </div>

          {/* My socials */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: "0.1em", color: "var(--text-secondary)" }}> My socials</p>
            {contactInfo.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                <p className="font-mono text-sm flex items-center gap-3">
                  {social.label} <i className="fa-solid fa-up-right-from-square text-[10px]"></i>
                </p>
              </a>
            ))}
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: "0.1em", color: "var(--text-secondary)" }}> Availability </p>
            <div className="flex items-center gap-2">
              <div style={{width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--accent-main)", boxShadow: "0 0 6px var(--accent-main)"}}/>
              <p className="font-mono text-sm" style={{ color: "var(--accent-main)" }}> Open to work</p>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
}

export default Contact;
