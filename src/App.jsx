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
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'var(--bg)' }}>
      <Waves
        lineColor="var(--wave-line)"
        accentColor="var(--wave-accent)"
        backgroundColor="var(--bg)"
        spacing={32}
        lineWidth={1.2}
        mouseStrength={1.1}
        mouseRadius={90}
        opacity={0.34}
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
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, var(--bg) 100%)',
          opacity: 0.45,
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
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
          backgroundColor: 'transparent',
        }}
        id="main-scroll"
      >
        <section id="home"     style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}><Landing /></section>
        <section id="about"    style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}><About /></section>
        <section id="skills"   style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}><Skills /></section>
        <section id="projects" style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}><Projects /></section>
        <section id="contact"  style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;