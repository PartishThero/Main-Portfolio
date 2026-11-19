import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Waves from './components/Waves.jsx';

const moodSpeed = {
  home: 0.9,
  about: 0.75,
  skills: 1.15,
  projects: 0.95,
  contact: 0.85,
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'var(--bg-primary)' }}>
      {/* Retuned Waves Shader Background */}
      <Waves
        lineColor="#2d2422"
        accentColor="#4e7f68"
        backgroundColor="#120f0e"
        spacing={38}
        lineWidth={0.95}
        speed={moodSpeed[activeSection] || 0.9}
        mouseStrength={0.5}
        mouseRadius={85}
        opacity={0.19}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Gradient mask that fades waves under dense text reading zones */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(18, 15, 14, 0.72) 0%, rgba(18, 15, 14, 0.45) 55%, rgba(18, 15, 14, 0.9) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle pixel dither / analog grain overlay for visual cohesion */}
      <div className="grain-overlay" aria-hidden="true" />

      <CustomCursor />
      <Navbar activeSection={activeSection} onActiveSectionChange={setActiveSection} />

      <main
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100vh',
          width: '100vw',
          overflowY: 'scroll',
          scrollSnapType: 'y proximity',
          scrollBehavior: 'smooth',
          backgroundColor: 'transparent',
        }}
        id="main-scroll"
      >
        <section id="home"     style={{ scrollSnapAlign: 'start' }}><Landing /></section>
        <section id="about"    style={{ scrollSnapAlign: 'start' }}><About /></section>
        <section id="skills"   style={{ scrollSnapAlign: 'start' }}><Skills /></section>
        <section id="projects" style={{ scrollSnapAlign: 'start' }}><Projects /></section>
        <section id="contact"  style={{ scrollSnapAlign: 'start' }}>
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
