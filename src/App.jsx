import React from 'react';
import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <CustomCursor />
      <Navbar />

      <main
        style={{
          height: '100vh',
          width: '100vw',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
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