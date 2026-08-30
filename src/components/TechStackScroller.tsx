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
  Play,
  Pause,
  Repeat
} from 'lucide-react';

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
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false);
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

  // Check scroll bounds
  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
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
  }, [filteredSkills]);

  // Smooth scroll handler
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    const target = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

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
    setIsDragging(false);
  };

  // Auto ticker loop when auto-scroll is enabled
  useEffect(() => {
    if (!isAutoScroll) return;
    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft >= scrollWidth - clientWidth - 5) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: 2, behavior: 'auto' });
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isAutoScroll]);

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
            Scroll horizontally to explore our core architecture stack — from Node.js, Go, and Supabase to Electron, Vision AI, and Claude LLM systems.
          </p>
        </div>

        {/* Navigation Controls & Auto-Scroll Toggle */}
        <div className="flex items-center gap-3 self-start md:self-end">
          {/* Infinite Marquee Toggle */}
          <button
            onClick={() => setIsAutoScroll(!isAutoScroll)}
            className={`px-3 py-2 rounded-full border text-xs font-mono-code flex items-center gap-1.5 transition cursor-pointer ${
              isAutoScroll
                ? 'bg-[#39FF14]/15 border-[#39FF14]/50 text-[#39FF14]'
                : 'bg-white/5 hover:bg-white/10 border-white/15 text-white/70'
            }`}
            title="Toggle Continuous Auto-Scrolling"
          >
            {isAutoScroll ? <Pause size={12} /> : <Play size={12} />}
            <span>AUTO-SCROLL</span>
          </button>

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
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-5 overflow-x-auto custom-scrollbar pb-6 pt-2 select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ scrollSnapType: isDragging || isAutoScroll ? 'none' : 'x mandatory' }}
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
      </div>

      {/* Scroll Progress Bar */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4 text-xs text-white/40 font-mono-code">
        <div className="flex items-center gap-2">
          <span>{filteredSkills.length} Technologies Listed</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>Swipe or Drag to explore</span>
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
