import React, { useEffect, useRef } from 'react';
import { Mail, ArrowUp, Github, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const logoTextRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = logoTextRef.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const letters = el.querySelectorAll('.kinetic-letter');
          letters.forEach((l, idx) => {
            setTimeout(() => {
              l.classList.remove('opacity-0', '-translate-x-8', 'blur-md');
              l.classList.add('opacity-90', 'translate-x-0', 'blur-0');
            }, idx * 80);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const word = "GUTIVE";

  return (
    <footer className="relative z-10 pt-16 pb-8 border-t border-white/10 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="text-xl font-sans-general font-bold text-white tracking-tight inline-flex items-baseline">
              <span>Gutive</span>
              <span className="text-[#39FF14]">.</span>
              <span>co</span>
            </span>
            <p className="text-xs text-white/50 font-mono-code mt-1">
              Full Stack Digital Product Development Studio
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs font-mono-code text-white/40 hidden md:inline">
              Code. Build. Repeat.
            </span>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 hover:border-[#39FF14]/50 transition cursor-pointer flex items-center gap-2 text-xs font-mono-code"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp size={14} className="text-[#39FF14]" />
            </button>
          </div>
        </div>

        {/* Middle Footer Navigation */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-6 text-xs font-mono-code text-white/60">
          <div className="flex items-center gap-6">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#stack" className="hover:text-white transition">Stack</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gutiveproduction@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#39FF14] transition flex items-center gap-1.5"
            >
              <Mail size={13} />
              <span>gutiveproduction@gmail.com</span>
            </a>
          </div>

          <div className="text-white/40">
            © {new Date().getFullYear()} Gutive Co. All rights reserved.
          </div>
        </div>

        {/* Massive Kinetic Typography Footer Watermark */}
        <div className="pt-8 pb-4 flex justify-center items-center overflow-hidden select-none pointer-events-none">
          <h2
            ref={logoTextRef}
            className="font-sans-general font-bold text-center tracking-tighter text-[clamp(4.5rem,18vw,16rem)] leading-none text-white flex justify-center"
          >
            {word.split('').map((char, index) => (
              <span
                key={index}
                className="kinetic-letter inline-block opacity-0 -translate-x-8 blur-md transition-all duration-700 ease-out text-transparent bg-clip-text bg-gradient-to-b from-white/30 via-white/15 to-transparent"
              >
                {char}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </footer>
  );
};
