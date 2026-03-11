import React, { useState } from "react";
import { motion } from "framer-motion";

//Styles
const fadeUp = (delay = 0) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay } });
const inputStyle = { width: "100%", backgroundColor: "var(--bg-surface)", border: "1.5px solid var(--accent-main)", borderRadius: "0.5rem", padding: "0.85rem 1rem", color: "var(--text-primary)", fontFamily: '"Courier New", monospace', fontSize: "0.85rem", outline: "none", transition: "box-shadow 0.15s ease", resize: "none" };
const maindivStyle = { backgroundColor: "var(--bg-primary)", color: "var(--text-primary)", paddingTop: "7rem", paddingBottom: "6rem", paddingLeft: "clamp(1.25rem, 14vw, 14vw)", paddingRight: "clamp(1.25rem, 14vw, 14vw)" }
const buttonStyle = {letterSpacing: "0.12em", padding: "0.75rem 2rem", borderRadius: "0.5rem", backgroundColor: "var(--accent-main)", color: "var(--bg-primary)", border: "1.5px solid var(--accent-main)", boxShadow: "4px 4px 0px var(--bg-surface)", transition: "all 0.12s ease", marginTop: "0.5rem"}
const formInputStyle = { letterSpacing: "0.1em", color: "var(--text-secondary)" }

//Class Names
const InputClassName = "font-mono text-[0.7rem] uppercase"

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleFocus = e => e.target.style.boxShadow = "4px 4px 0px var(--accent-main)";
  const handleBlur = e => e.target.style.boxShadow = "none";


  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  //Button
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

  //Api
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
  const buttonProps = { onMouseEnter: handleButtonEnter, onMouseLeave: handleButtonLeave, onMouseDown:handleButtonDown, onMouseUp : handleButtonUp}

  return (
    <div className="min-h-screen flex flex-col" style={maindivStyle}>

      {/* Header */}
      <div className="flex flex-col gap-4" style={{ marginBottom: "3.5rem" }}>
        <motion.p {...fadeUp(0)} className="font-mono text-xs uppercase" style={{ letterSpacing: "0.2em", color: "var(--accent-secondary)" }}>
          / contact
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="leading-none" style={{fontFamily: '"Boldonse", system-ui', fontSize: "clamp(2.5rem, 7vw, 4rem)"}}>
          Start a <span style={{ color: "var(--accent-main)" }}>quest?</span>
        </motion.h2>

        <motion.div {...fadeUp(0.15)} style={{ width: "3rem", height: "2px", backgroundColor: "var(--accent-main)" }}/>
      </div>

      {/* Two columns */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24" style={{ alignItems: "flex-start" }}>

        {/* Form */}
        <motion.div {...fadeUp(0.2)} style={{ flex: 1, width: "100%" }}>

          {sent ? (
            <div className="font-mono text-sm" style={{ color: "var(--accent-main)", lineHeight: 1.8 }}>
              Message sent! I'll get back to you soon.
            </div>
          ) : (

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <input type="hidden" name="access_key" value="ebef00c6-caeb-4f1d-8265-4ec3b0f4e5d4"/>

              {/* Name */}
              <div className="flex flex-col gap-2"> 
                <label className={InputClassName} style={formInputStyle}> Name </label>
                <input name="name" type="text" placeholder="Your name" value={form.name} {...baseInputProps}/>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className= {InputClassName} style={formInputStyle}> Email </label>
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
        <motion.div {...fadeUp(0.3)} className="flex flex-row flex-wrap lg:flex-col gap-8 lg:gap-8" style={{ minWidth: "200px" }}>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: "0.1em", color: "var(--text-secondary)" }}> Email </p>
            <a href="mailto:partish.palkritwar07@gmail.com" className="font-mono text-sm" style={{ color: "var(--accent-main)", textDecoration: "none", borderBottom: "1px solid var(--accent-main)", paddingBottom: "2px",width: "fit-content"}}> partish.palkritwar07@gmail.com </a>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: "0.1em", color: "var(--text-secondary)" }}> Location </p>
            <p className="font-mono text-sm" style={{ color: "var(--text-primary)" }}> Banglore, India </p> 
          </div>

          {/* My socials */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[0.7rem] uppercase" style={{ letterSpacing: "0.1em", color: "var(--text-secondary)" }}> My socials</p>
            <a href="https://github.com/PartishThero" target="_blank" rel="noreferrer"> <p className="font-mono text-sm flex items-center gap-3"> Github <i className="fa-solid fa-up-right-from-square text-[10px]"></i> </p> </a>
            <a href="https://www.linkedin.com/in/partish-palkritwar-b74a74376/" target="_blank" rel="noreferrer"> <p className="font-mono text-sm flex items-center gap-3"> LinkedIn <i className="fa-solid fa-up-right-from-square text-[10px]"></i> </p> </a>
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
export default Contact