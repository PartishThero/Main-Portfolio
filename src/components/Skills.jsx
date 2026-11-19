import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';
import { fadeUp } from '../constants/animations';
import { skills } from '../constants/portfolioData';

export default function Skills() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-20">
      <div className="section-container flex flex-col gap-10">
        <SectionHeader
          label="skills"
          title="Technical toolkit."
          subtitle="A text-first inventory of tools and technologies used across my open-source projects."
        />

        {/* Grouped text-first list */}
        <div className="flex flex-col border-t border-(--border-subtle)">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              {...fadeUp(0.1 + idx * 0.08, 16)}
              className="py-6 border-b border-(--border-subtle) flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12"
            >
              <div className="w-48 shrink-0">
                <span className="font-mono text-xs uppercase tracking-wider text-(--text-muted)">
                  {category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <span
                    key={skill.name}
                    className="font-mono text-xs px-3 py-1.5 rounded bg-(--bg-surface) border border-(--border-subtle) text-(--text-primary) hover:border-(--accent-sage) transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}