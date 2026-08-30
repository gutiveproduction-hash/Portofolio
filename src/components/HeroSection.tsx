import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Terminal, Activity, ShieldCheck, Play, Zap } from 'lucide-react';
import { TECH_VIDEOS } from '../data/portfolioData';
import { TechVideo } from '../types';

interface HeroSectionProps {
  onExploreWork: () => void;
  onExploreStack: () => void;
  onOpenContact: () => void;
  activeVideoId?: string;
  onSelectVideo?: (video: TechVideo) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onExploreStack,
  onOpenContact,
  activeVideoId,
  onSelectVideo
}) => {
  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden">
      {/* Central Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Status Badge: Open for Projects */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/75 border border-white/20 backdrop-blur-md mb-6 shadow-2xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#39FF14]" />
          </span>
          <span className="text-xs font-mono-code tracking-wider text-white/90 uppercase">
            Gutive.co • Open for new projects
          </span>
        </div>

        {/* Display Title with refined Typography */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-white leading-[1.12] tracking-tight mb-6 text-balance max-w-4xl">
          Full Stack Development <br className="hidden sm:inline" />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#39FF14]">
            from backend to interface.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 font-sans-general">
          We're <strong className="text-white font-semibold">Gutive.co</strong> — we engineer digital products end-to-end: high-converting web apps, cross-platform POS systems, enterprise procurement dashboards, down to autonomous AI-powered bots.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            onClick={onExploreWork}
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-[#39FF14] transition-all duration-300 shadow-xl hover:shadow-[#39FF14]/25 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          >
            <span>View Selected Work</span>
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
          </button>

          <button
            onClick={onExploreStack}
            className="px-7 py-3.5 rounded-full bg-black/75 hover:bg-white/10 text-white font-medium text-sm border border-white/20 hover:border-[#39FF14]/50 backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Tech Stack</span>
            <span className="text-xs font-mono-code text-[#39FF14]">Node • Go • AI</span>
          </button>
        </div>

        {/* Quick Tech Video Scene Selector Pills */}
        {onSelectVideo && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 p-2 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
            <span className="text-[11px] font-mono-code text-white/50 px-2 flex items-center gap-1">
              <Zap size={11} className="text-[#39FF14]" /> BG THEME:
            </span>
            {TECH_VIDEOS.map((v) => (
              <button
                key={v.id}
                onClick={() => onSelectVideo(v)}
                className={`px-3 py-1 rounded-xl text-xs font-mono-code transition cursor-pointer flex items-center gap-1.5 ${
                  activeVideoId === v.id
                    ? 'bg-[#39FF14] text-black font-bold shadow-md shadow-[#39FF14]/30'
                    : 'bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeVideoId === v.id ? '#000000' : v.themeColor }} />
                {v.title}
              </button>
            ))}
          </div>
        )}

        {/* Live Studio Telemetry HUD Bar */}
        <div className="hidden sm:grid grid-cols-3 gap-6 max-w-xl w-full p-3.5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono-code text-white/70">
          <div className="flex items-center justify-center gap-2 border-r border-white/10">
            <Activity size={13} className="text-[#39FF14]" />
            <span>UPTIME 99.98%</span>
          </div>
          <div className="flex items-center justify-center gap-2 border-r border-white/10">
            <Terminal size={13} className="text-[#00F0FF]" />
            <span>FULL STACK READY</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck size={13} className="text-[#BD00FF]" />
            <span>20+ YRS CRAFT</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[11px] font-mono-code text-white/40 tracking-widest uppercase pointer-events-none">
        <span>Scroll to explore</span>
        <ArrowDown size={14} className="animate-bounce text-[#39FF14]" />
      </div>
    </section>
  );
};
