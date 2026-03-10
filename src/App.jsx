import React from 'react';
import Navbar from './components/navbar.jsx';
import Landing from './components/landing.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contacts.jsx';
import Footer from './components/footer.jsx';
import CustomCursor from './components/customcursor.jsx';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <CustomCursor />
      <Navbar />

      <main
        style={{
          height: '100vh',
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