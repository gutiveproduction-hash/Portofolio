/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TechVideoBackdrop } from './components/TechVideoBackdrop';
import { HeroSection } from './components/HeroSection';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ProjectModal } from './components/ProjectModal';
import { TechStackScroller } from './components/TechStackScroller';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { TECH_VIDEOS } from './data/portfolioData';
import { TechVideo, Project } from './types';

export default function App() {
  const [activeVideo, setActiveVideo] = useState<TechVideo>(TECH_VIDEOS[0]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactSubject, setContactSubject] = useState<string>('');

  const handleOpenContact = (subject?: string) => {
    if (subject) setContactSubject(subject);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreStack = () => {
    const stackSection = document.getElementById('stack');
    if (stackSection) {
      stackSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-[#39FF14] selection:text-black">
      {/* Bespoke Creative Studio Custom Cursor */}
      <CustomCursor />

      {/* Top Fixed Navigation */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        activeVideoTitle={activeVideo.title}
      />

      {/* Dynamic Technology Video Background & Particle Matrix */}
      <TechVideoBackdrop
        activeVideoId={activeVideo.id}
        onSelectVideo={(video) => setActiveVideo(video)}
        showControls={true}
      />

      {/* Hero Section */}
      <main className="relative z-10">
        <HeroSection
          onExploreWork={handleExploreWork}
          onExploreStack={handleExploreStack}
          onOpenContact={() => handleOpenContact()}
          activeVideoId={activeVideo.id}
          onSelectVideo={(video) => setActiveVideo(video)}
        />

        {/* Selected Work Portfolio Grid */}
        <ProjectsGrid
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Horizontal Scrolling Tech Stack Track */}
        <TechStackScroller
          onSelectProjectTag={(tag) => {
            handleExploreWork();
          }}
        />

        {/* Studio Services & Architecture Capabilities */}
        <ServicesSection
          onOpenContact={(svc) => handleOpenContact(svc)}
        />

        {/* Interactive Contact & Scope Estimator */}
        <ContactSection
          initialSubject={contactSubject}
        />
      </main>

      {/* Kinetic Footer */}
      <Footer />

      {/* Interactive Project Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={(title) => handleOpenContact(title)}
      />
    </div>
  );
}
