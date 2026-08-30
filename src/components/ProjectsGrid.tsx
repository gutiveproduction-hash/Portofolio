import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectOriginalMockup } from './ProjectOriginalMockup';

interface ProjectsGridProps {
  onSelectProject: (project: Project) => void;
  activeFilter?: string;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  onSelectProject
}) => {
  return (
    <section id="work" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Projects Grid: 3 columns on large screens, matching original preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {PROJECTS_DATA.map((project) => (
          <article
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group relative rounded-3xl bg-[#0b0d10] border border-white/10 hover:border-[#39FF14]/50 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_0_25px_rgba(57,255,20,0.12)] cursor-pointer"
          >
            {/* Top Exact Original UI Preview Screen */}
            <div className="h-[210px] sm:h-[220px] w-full overflow-hidden bg-black/90 border-b border-white/10 relative">
              <ProjectOriginalMockup projectId={project.id} />
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-[#0b0d10]">
              <div>
                {/* Green Role Category Badge */}
                <div className="text-[11px] sm:text-xs font-mono-code font-bold text-[#39FF14] tracking-wider uppercase mb-2">
                  {project.role}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-sans-general font-bold text-white tracking-tight mb-3 group-hover:text-[#39FF14] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed font-sans-general mb-6">
                  {project.desc}
                </p>
              </div>

              {/* Tags at bottom */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3.5 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 font-mono-code"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
