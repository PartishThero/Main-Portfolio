import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';
import { fadeUp } from '../constants/animations';
import { skills, pageConfig } from '../constants/portfolioData';

export default function Skills() {
  return (
    <div className="section-shell">
      <div className="section-container flex flex-col gap-8">
        <SectionHeader
          label="skills"
          title="What I work with."
          mascotIcon={pageConfig.skills.icon}
          speechBubble={pageConfig.skills.message}
        />

        {/* Grouped inventory list */}
        <div className="flex flex-col border-t border-(--border-subtle)">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              {...fadeUp(0.1 + idx * 0.08, 16)}
              className="py-5 sm:py-6 border-b border-(--border-subtle) flex flex-col md:flex-row md:items-baseline gap-3 md:gap-12"
            >
              <div className="w-52 shrink-0 flex items-center gap-2">
                <span className="font-pixel text-xs text-(--accent-amber)">◆</span>
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
