import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { Layers, MonitorSmartphone, Bot, Box, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenContact
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers': return <Layers size={22} className="text-[#39FF14]" />;
      case 'MonitorSmartphone': return <MonitorSmartphone size={22} className="text-[#00F0FF]" />;
      case 'Bot': return <Bot size={22} className="text-[#BD00FF]" />;
      case 'Box': return <Box size={22} className="text-[#FFB800]" />;
      default: return <Layers size={22} className="text-[#39FF14]" />;
    }
  };

  return (
    <section id="services" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Section Head */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono-code mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-neon-pulse" />
          FULL-LIFECYCLE CAPABILITIES
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white font-normal tracking-tight">
          What we engineer for clients
        </h2>
        <p className="text-white/60 text-sm sm:text-base mt-4 leading-relaxed">
          From high-traffic backend servers and desktop POS terminals to custom AI models and 3D web experiences.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            className="rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/25 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1"
          >
            <div>
              {/* Header Icon + Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center">
                  {getIcon(service.iconName)}
                </div>
                <span className="text-xs font-mono-code text-white/30">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl font-sans-general font-semibold text-white tracking-tight mb-2 group-hover:text-[#39FF14] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs font-mono-code text-[#39FF14]/90 mb-4">
                {service.tagline}
              </p>
              <p className="text-sm text-white/65 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Deliverable Checkmarks */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                <span className="text-[11px] font-mono-code text-white/40 uppercase tracking-wider block">
                  Deliverables Include:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                      <Check size={13} className="text-[#39FF14] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Tags & CTA Button */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {service.techTags.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-mono-code"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenContact(service.title)}
                className="text-xs font-mono-code text-white hover:text-[#39FF14] flex items-center gap-1.5 transition cursor-pointer"
              >
                <span>Request Proposal</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
