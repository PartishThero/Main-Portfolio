/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({
  label,
  title,
  subtitle,
  mascotIcon,
  mascotAlt = 'Mascot',
  speechBubble,
  className = '',
}) {
  return (
    <header className={`flex flex-col gap-3 mb-8 md:mb-12 ${className}`}>
      {/* Top row: optional mascot sprite + speech bubble + label */}
      {(mascotIcon || label) && (
        <div className="flex items-center gap-3.5 mb-1 flex-wrap">
          {mascotIcon && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center p-1 rounded bg-(--bg-surface) border border-(--border-strong) shadow-[2px_2px_0px_var(--border-strong)]"
            >
              <img
                src={mascotIcon}
                alt={mascotAlt}
                className="w-full h-full object-contain"
                style={{ imageRendering: 'pixelated' }}
              />
            </motion.div>
          )}

          {speechBubble && (
            <div className="relative font-pixel text-xs sm:text-sm px-3.5 py-1.5 rounded bg-(--bg-surface) border border-(--border-strong) text-(--text-primary) shadow-[2px_2px_0px_var(--border-strong)]">
              <span
                className="absolute -left-[6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[6px] border-r-(--border-strong)"
                aria-hidden="true"
              />
              {speechBubble}
            </div>
          )}

          {label && !speechBubble && (
            <span className="font-mono text-xs uppercase tracking-widest text-(--text-muted)">
              / {label}
            </span>
          )}
        </div>
      )}

      {/* Main heading */}
      <h2
        className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-(--text-primary)"
        style={{ lineHeight: 1.15 }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="font-body text-sm text-(--text-secondary) max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}
