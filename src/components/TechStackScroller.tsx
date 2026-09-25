import React, { useRef, useState, useEffect } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Skill } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Server,
  Cpu,
  Database,
  Code2,
  MonitorSmartphone,
  Sparkles,
  ScanFace,
  Palette,
  Box,
  Container,
  BarChart3,
  MessageSquareCode,
  Layers,
  ArrowRight,
  Repeat,
  BrainCircuit,
  Cctv,
  HardDrive,
  FlaskConical,
  ShieldCheck
} from 'lucide-react';

/** Auto-scroll speed, in pixels per second. */
const AUTO_SPEED = 40;
/** How long auto-scroll waits after a swipe or arrow click before it resumes. */
const RESUME_AFTER = 1800;

interface TechStackScrollerProps {
  onSelectProjectTag?: (projectTitle: string) => void;
}

export const TechStackScroller: React.FC<TechStackScrollerProps> = ({
  onSelectProjectTag
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  // Always on, with no toggle - except for readers who asked their system for
  // less motion.
  const [isAutoScroll] = useState<boolean>(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [isHovered, setIsHovered] = useState<boolean>(false);
  // Timestamp until which auto-scroll holds off after a manual scroll.
  const holdUntil = useRef<number>(0);
  const firstCopyRef = useRef<HTMLDivElement | null>(null);
  const secondCopyRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftState, setScrollLeftState] = useState<number>(0);

  // Map icon name to Lucide Icon
  const renderSkillIcon = (iconName: string, color: string) => {
    const props = { size: 22, style: { color } };
    switch (iconName) {
      case 'Server': return <Server {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'MonitorSmartphone': return <MonitorSmartphone {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'ScanFace': return <ScanFace {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Box': return <Box {...props} />;
      case 'Container': return <Container {...props} />;
      case 'BarChart3': return <BarChart3 {...props} />;
      case 'MessageSquareCode': return <MessageSquareCode {...props} />;
      case 'BrainCircuit': return <BrainCircuit {...props} />;
      case 'Cctv': return <Cctv {...props} />;
      case 'HardDrive': return <HardDrive {...props} />;
      case 'FlaskConical': return <FlaskConical {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <Layers {...props} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'frontend', label: 'Frontend & Apps' },
    { id: 'database', label: 'Databases & Cloud' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'devops', label: 'DevOps & Tooling' }
  ];

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(s => s.category === selectedCategory);

  // The strip is drawn twice back to back so auto-scroll can run forever:
  // once it passes the start of the second copy it jumps back by one copy's
  // width, which looks identical. A handful of cards doesn't overflow, so
  // short categories are drawn once and don't move.
  const isLooping = filteredSkills.length >= 4;

  // Width of one copy, including the gap before the second one.
  const loopWidth = () =>
    firstCopyRef.current && secondCopyRef.current
      ? secondCopyRef.current.offsetLeft - firstCopyRef.current.offsetLeft
      : 0;

  // Check scroll bounds
  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const loop = isLooping ? loopWidth() : 0;
    if (loop > 0) {
      // A loop has no ends: both arrows always work, and progress is measured
      // within one copy.
      setCanScrollLeft(true);
      setCanScrollRight(true);
      setScrollProgress(((scrollLeft % loop) / loop) * 100);
      return;
    }
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons, { passive: true });
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, [filteredSkills, isLooping]);

  // A new category starts from the first card.
  useEffect(() => {
    scrollContainerRef.current?.scrollTo({ left: 0 });
  }, [selectedCategory]);

  // Smooth scroll handler
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    const loop = isLooping ? loopWidth() : 0;
    // Stepping left from the start of a loop: jump to the same spot in the
    // second copy first, so there is room to move left into.
    if (loop > 0 && direction === 'left' && container.scrollLeft < scrollAmount) {
      container.scrollLeft += loop;
    }
    const target = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;
    holdUntil.current = performance.now() + RESUME_AFTER;

    container.scrollTo({
      left: target,
      behavior: 'smooth'
    });
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) holdUntil.current = performance.now() + RESUME_AFTER;
    setIsDragging(false);
  };

  // Auto-scroll: one rAF loop that advances a float position (scrollLeft
  // rounds, so small steps would stall) and wraps it at one copy's width. It
  // stands still while the reader is pointing at, dragging, or swiping the
  // strip, and for a moment after they scroll it themselves.
  useEffect(() => {
    if (!isAutoScroll || !isLooping) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    let frame = 0;
    let last = performance.now();
    let pos = container.scrollLeft;

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      const dt = Math.min(now - last, 100) / 1000;
      last = now;
      const loop = loopWidth();
      if (!loop) return;

      const paused = isHovered || isDragging || now < holdUntil.current || document.hidden;
      if (paused) {
        // Follow whatever the reader did. The wrap waits until auto-scroll
        // resumes: moving scrollLeft now would cut an arrow's smooth scroll short.
        pos = container.scrollLeft;
        return;
      }
      pos += AUTO_SPEED * dt;
      if (pos >= loop) pos -= loop;
      container.scrollLeft = pos;
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isAutoScroll, isLooping, isHovered, isDragging, filteredSkills]);

  return (
    <section id="stack" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Header & Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] text-xs font-mono-code mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-neon-pulse" />
            <span>INTERACTIVE TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white tracking-tight leading-tight">
            Engineered with modern <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
              production-tested technologies.
            </span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mt-3 leading-relaxed">
            Our core architecture stack — from Node.js, Go, and Supabase to Electron, Python computer vision, and Claude & Gemini LLM systems. Hover to pause, or drag to explore.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-3 self-start md:self-end">

          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`p-2.5 rounded-full border transition cursor-pointer ${
              canScrollLeft
                ? 'bg-white/10 hover:bg-white/20 border-white/25 text-white hover:scale-105'
                : 'bg-white/5 border-white/10 text-white/30 cursor-not-allowed opacity-50'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`p-2.5 rounded-full border transition cursor-pointer ${
              canScrollRight
                ? 'bg-white/10 hover:bg-white/20 border-white/25 text-white hover:scale-105'
                : 'bg-white/5 border-white/10 text-white/30 cursor-not-allowed opacity-50'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-6">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#39FF14] text-black font-semibold shadow-md shadow-[#39FF14]/20'
                : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Horizontal Scrollable Track Container */}
      <div className="relative group">
        {/* Left Fade Gradient Mask */}
        <div className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
          canScrollLeft ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Right Fade Gradient Mask */}
        <div className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
          canScrollRight ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* The Scrollable Cards Strip */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={() => {
            handleMouseUpOrLeave();
            setIsHovered(false);
          }}
          onMouseEnter={() => setIsHovered(true)}
          onTouchStart={() => { holdUntil.current = Infinity; }}
          onTouchEnd={() => { holdUntil.current = performance.now() + RESUME_AFTER; }}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          className={`flex gap-5 overflow-x-auto custom-scrollbar pb-6 pt-2 select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          // Snapping would fight the auto-scroll and the loop's jump back.
          style={{ scrollSnapType: isDragging || isAutoScroll || isLooping ? 'none' : 'x mandatory' }}
        >
          {(isLooping ? [0, 1] : [0]).map((copy) => (
          <div
            key={copy}
            ref={copy === 0 ? firstCopyRef : secondCopyRef}
            className="flex gap-5 flex-shrink-0"
            // The second copy only exists to make the loop seamless; screen
            // readers and the tab order should meet each card once.
            aria-hidden={copy === 1 || undefined}
            inert={copy === 1 || undefined}
          >
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="flex-shrink-0 w-72 sm:w-80 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/25 p-5 transition-all duration-300 flex flex-col justify-between group/card hover:-translate-y-1 shadow-lg hover:shadow-2xl"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Top Row: Icon + Level Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/15 transition-transform group-hover/card:scale-110 duration-300"
                    style={{ backgroundColor: `${skill.accentColor}15` }}
                  >
                    {renderSkillIcon(skill.iconName, skill.accentColor)}
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span 
                      className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-full border"
                      style={{ 
                        backgroundColor: `${skill.accentColor}15`, 
                        borderColor: `${skill.accentColor}40`,
                        color: skill.accentColor 
                      }}
                    >
                      {skill.experience}
                    </span>
                    <span className="text-[10px] text-white/40 mt-1 font-mono-code">{skill.categoryLabel}</span>
                  </div>
                </div>

                {/* Skill Name & Level */}
                <h3 className="text-lg font-sans-general font-semibold text-white tracking-tight mb-1 group-hover/card:text-[#39FF14] transition-colors">
                  {skill.name}
                </h3>
                <div className="text-xs font-mono-code text-[#39FF14]/80 mb-3">
                  {skill.level}
                </div>

                {/* Description */}
                <p className="text-xs text-white/60 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Bottom: Related Projects / Applied In */}
              <div className="pt-3 border-t border-white/10 mt-2">
                <span className="text-[10px] text-white/40 font-mono-code uppercase tracking-wider block mb-1.5">
                  Applied in:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skill.relatedProjects.map((proj, i) => (
                    <button
                      key={i}
                      onClick={() => onSelectProjectTag && onSelectProjectTag(proj)}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/75 hover:text-white border border-white/10 hover:border-[#39FF14]/40 transition flex items-center gap-1 cursor-pointer"
                    >
                      <span>{proj}</span>
                      <ArrowRight size={10} className="opacity-60" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
          ))}
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4 text-xs text-white/40 font-mono-code">
        <div className="flex items-center gap-2">
          <span>{filteredSkills.length} Technologies Listed</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>{isAutoScroll && isLooping ? 'Hover to pause · Drag to explore' : 'Swipe or Drag to explore'}</span>
        </div>

        <div className="w-32 sm:w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#39FF14] transition-all duration-150 rounded-full"
            style={{ width: `${Math.max(scrollProgress, 10)}%` }}
          />
        </div>
      </div>
    </section>
  );
};
