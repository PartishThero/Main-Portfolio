import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Landing from './components/landing.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contacts.jsx';
import CustomCursor from './components/customcursor.jsx'; // Import the cursor
import Skills from './components/skills.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div style={{ 
  minHeight: '100vh', 
  display: 'flex', 
  flexDirection: 'column',
  backgroundColor: 'var(--bg-primary)'
}}>
      <CustomCursor />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;