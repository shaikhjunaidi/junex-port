import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import ProjectFilters from './ProjectFilters';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'All Projects') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="section-eyebrow">02 // SELECTED WORK</span>
          <h2 className="section-title">
            Featured <span className="accent">Engineering Projects.</span>
          </h2>
          <p className="section-lead">
            Curated software systems showcasing full-stack Django architecture, machine learning integrations, and reactive web applications.
          </p>
        </div>

        {/* Category Filters */}
        <ProjectFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: '2.25rem',
            alignItems: 'stretch',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: '100%' }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
