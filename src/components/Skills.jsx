import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';
import { fadeUp } from '../constants/animations';
import { skills } from '../constants/portfolioData';

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', paddingTop: '7rem', paddingBottom: '4rem',}}>
      <div className="flex flex-col gap-12 w-full" style={{ maxWidth: '680px', padding: '0 clamp(1.25rem, 6vw, 1.5rem)' }} >

        {/* Header */}
        <SectionHeader label="skills" title="What I" highlightWord="work with." />

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div key={category} {...fadeUp(0.2 + catIndex * 0.1, 20)} className="flex flex-col gap-5">
              <p className="font-mono text-xs uppercase" style={{ letterSpacing: '0.15em', color: 'var(--accent-secondary)' }}> {category} </p>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {items.map((skill, i) => (
                  <motion.div key={skill.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 + catIndex * 0.1 + i * 0.05 }} className="flex flex-col items-center gap-2 group" >
                    <div className="flex items-center justify-center font-mono text-lg group-hover:opacity-80 transition-all duration-200" style={{ width: 'clamp(2.75rem, 8vw, 3.5rem)', height: 'clamp(2.75rem, 8vw, 3.5rem)', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--accent-main)', color: 'var(--accent-main)', }} >
                      <i className={skill.icon}></i>
                    </div>
                    <span className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}> {skill.name} </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}