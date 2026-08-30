import React, { useState } from 'react';
import { Project } from '../types';
import { ProjectPreviewMockup } from './ProjectPreviewMockup';
import { X, ExternalLink, Github, CheckCircle2, Layers, Calendar, User, Sparkles, Box, ShieldCheck, ChevronRight, Zap, Play } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: (projectTitle?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact
}) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'overview' | 'features' | 'architecture'>('simulator');

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-2xl bg-black/85 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl rounded-3xl bg-[#0a0a0a] border border-[#39FF14]/40 shadow-[0_0_50px_rgba(57,255,20,0.15)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="relative p-5 sm:p-7 bg-gradient-to-b from-white/10 to-transparent border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono-code text-[#39FF14] px-3 py-1 rounded-full bg-[#39FF14]/15 border border-[#39FF14]/30 font-bold">
                {project.role}
              </span>
              <span className="text-xs text-white/50 font-mono-code flex items-center gap-1">
                <Calendar size={12} /> {project.year}
              </span>
              <span className="text-xs text-white/40 font-mono-code">
                Client: {project.client}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
              {project.title}
            </h2>
            <p className="text-sm text-white/70 mt-1 font-sans-general">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer flex-shrink-0"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-white/10 px-4 sm:px-6 bg-white/[0.02]">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`py-3 px-4 text-xs font-mono-code transition border-b-2 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'border-[#39FF14] text-[#39FF14] font-bold'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <Zap size={13} /> LIVE INTERACTIVE SIMULATOR
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 text-xs font-mono-code transition border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#39FF14] text-[#39FF14] font-bold'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            OVERVIEW & METRICS
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`py-3 px-4 text-xs font-mono-code transition border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'features'
                ? 'border-[#39FF14] text-[#39FF14] font-bold'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            CORE FEATURES
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-4 text-xs font-mono-code transition border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-[#39FF14] text-[#39FF14] font-bold'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            SYSTEM ARCHITECTURE
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm text-white/80 leading-relaxed custom-scrollbar">
          {/* Tab 0: Interactive Live Simulator */}
          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code text-[#39FF14] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-neon-pulse" />
                  Interactive Component Playground
                </span>
                <span className="text-xs text-white/40 font-mono-code">Click/interact with live controls</span>
              </div>

              {/* Real Project Simulator UI */}
              <ProjectPreviewMockup project={project} interactive={true} compact={false} />

              <p className="text-xs text-white/60 font-sans-general leading-relaxed">
                {project.fullDesc}
              </p>
            </div>
          )}

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono-code text-white/40 uppercase tracking-wider mb-2">Project Background</h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  {project.fullDesc}
                </p>
              </div>

              {/* Key Deliverable Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono-code text-white/40 uppercase tracking-wider mb-3">Key Highlights & Benchmark Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-[#39FF14] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-white/90 font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Client and Stack Info */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs">
                <div>
                  <span className="text-white/40 block mb-1 font-mono-code">CLIENT / STAKEHOLDER</span>
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <User size={13} className="text-[#39FF14]" /> {project.client}
                  </span>
                </div>
                <div>
                  <span className="text-white/40 block mb-1 font-mono-code">STATUS</span>
                  <span className="text-[#39FF14] font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-neon-pulse" /> Deployed in Production
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Core Features */}
          {activeTab === 'features' && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono-code text-white/40 uppercase tracking-wider mb-2">Functional Highlights</h4>
              <div className="space-y-3">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#39FF14]/15 text-[#39FF14] border border-[#39FF14]/30 flex items-center justify-center text-xs font-mono-code flex-shrink-0 font-bold">
                      0{i + 1}
                    </span>
                    <span className="text-sm text-white/90 pt-0.5">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono-code text-white/40 uppercase tracking-wider mb-2">Technical Implementation</h4>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-code text-[#39FF14]">
                  <Layers size={15} />
                  <span className="font-bold">STACK SPECIFICATION</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  {project.architectureDetails}
                </p>
              </div>

              {/* Technologies Used Badges */}
              <div>
                <h4 className="text-xs font-mono-code text-white/40 uppercase tracking-wider mb-2">Libraries & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-mono-code bg-white/10 text-white border border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom CTA Footer */}
        <div className="p-4 sm:p-6 bg-black/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-white/50 font-mono-code text-center sm:text-left">
            Need a similar custom architecture for your product?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono-code transition cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact(`Discuss Architecture: ${project.title}`);
              }}
              className="px-5 py-2 rounded-full bg-[#39FF14] hover:bg-[#32e012] text-black font-semibold text-xs font-mono-code transition shadow-lg shadow-[#39FF14]/20 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Build Similar Product</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
