import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-(--border-subtle) py-8">
      <div className="section-container flex items-center justify-between font-mono text-[0.75rem] tracking-wider text-(--text-muted)">
        <span>© {new Date().getFullYear()} Partish</span>
        <button
          onClick={scrollToTop}
          type="button"
          className="hover:text-(--text-primary) transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:underline cursor-pointer"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <span aria-hidden="true">↑</span>
        </button>
      </div>
    </footer>
  );
}
