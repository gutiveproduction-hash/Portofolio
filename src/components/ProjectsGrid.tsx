import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectOriginalMockup } from './ProjectOriginalMockup';
import { WorksWheel, type WorksWheelItem } from '@/components/ui/works-wheel';

interface ProjectsGridProps {
  onSelectProject: (project: Project) => void;
  activeFilter?: string;
}

// The wheel sets the front title large beside the card, so it gets the short
// name: "LUMINAL — Enterprise Agent Control Plane" reads as "LUMINAL".
const shortTitle = (title: string) =>
  title.split(' — ')[0].replace(/\s*\(.*\)$/, '');

// Projects whose card shows the rendered UI preview. Every other project has a
// real screenshot of the app as its thumbUrl, which the card shows as is.
const RENDERED_PREVIEW = new Set([
  'goed-service',
  'goed-acsess',
  'pln-eprocurement',
  'amanah-consent',
  'whatsapp-ai-bot',
  'sehat-lansia',
]);

const WHEEL_ITEMS: WorksWheelItem[] = PROJECTS_DATA.map((project) => ({
  title: shortTitle(project.title),
  image: project.thumbUrl,
  preview: RENDERED_PREVIEW.has(project.id) ? (
    <ProjectOriginalMockup projectId={project.id} />
  ) : undefined,
  meta: project.role,
}));

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  onSelectProject
}) => {
  return (
    // pt-16 keeps the wheel's index clear of the fixed navbar. The black fades
    // out at the top and bottom so the section melts into the backdrop around
    // it instead of ending on a hard edge.
    <section
      id="work"
      className="relative z-10 h-[100svh] min-h-[32rem] pt-16 bg-[linear-gradient(to_bottom,transparent,#000_16%,#000_84%,transparent)]"
    >
      <WorksWheel
        items={WHEEL_ITEMS}
        label="Works '26"
        action="Case study"
        onSelect={(i) => onSelectProject(PROJECTS_DATA[i])}
        className="font-display bg-transparent"
      />
    </section>
  );
};
