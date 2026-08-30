import React, { useState, useEffect } from 'react';
import { Menu, X, Video, Mail, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  activeVideoTitle: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  activeVideoTitle
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Tech Stack', href: '#stack' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none">
      <div 
        className={`w-full px-4 sm:px-8 py-4 flex items-center justify-between transition-all duration-300 pointer-events-auto ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
        }`}
      >
        {/* Brand Mark */}
        <a 
          href="#top" 
          className="font-sans-general font-bold tracking-tight text-xl sm:text-2xl text-white inline-flex items-baseline cursor-pointer group"
        >
          <span className="text-white">Gutive</span>
          <span className="text-[#39FF14]">.</span>
          <span className="text-white">co</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-sans-general font-medium text-white/70">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 hover:text-[#39FF14] text-xs font-mono-code uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Quick Contact Primary Button */}
          <button
            onClick={onOpenContact}
            className="px-4 sm:px-5 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wide hover:bg-[#39FF14] transition-all duration-300 shadow-md hover:shadow-[#39FF14]/20 flex items-center gap-1.5 cursor-pointer"
          >
            <Mail size={13} />
            <span className="hidden sm:inline">Start a Project</span>
            <span className="sm:hidden">Contact</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto bg-[#0d0d0d]/95 border-b border-white/15 px-6 py-6 space-y-4 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-sans-general text-white/80 hover:text-[#39FF14] transition py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-[#39FF14] text-black font-semibold text-sm transition text-center"
            >
              Get in Touch (gutiveproduction@gmail.com)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
