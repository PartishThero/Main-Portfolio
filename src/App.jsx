import React from 'react';
import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Waves from './components/Waves.jsx';

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'var(--bg-primary)' }}>
      <Waves
        lineColor="#2d2422"
        accentColor="#4e7f68"
        backgroundColor="#120f0e"
        spacing={36}
        lineWidth={1.2}
        mouseStrength={0.7}
        mouseRadius={90}
        opacity={0.22}
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
      {/* Ambient contrast mask */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(circle at 50% 50%, rgba(18, 15, 14, 0.4) 0%, rgba(18, 15, 14, 0.88) 100%)',
        }}
      />
      <CustomCursor />
      <Navbar />

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