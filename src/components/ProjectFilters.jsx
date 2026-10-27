import React from 'react';
import { PROJECT_CATEGORIES } from '../data/projects';

export default function ProjectFilters({ activeCategory, onSelectCategory }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.65rem',
        marginBottom: '2.5rem',
      }}
      role="tablist"
      aria-label="Filter projects by category"
    >
      {PROJECT_CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(category)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.875rem',
              fontWeight: 600,
              padding: '0.55rem 1.25rem',
              borderRadius: 'var(--radius-sm)',
              border: isActive
                ? '1px solid var(--color-vivid-orange)'
                : '1px solid rgba(255, 255, 255, 0.1)',
              background: isActive
                ? 'linear-gradient(135deg, rgba(217, 71, 22, 0.25), rgba(244, 90, 39, 0.2))'
                : 'rgba(255, 255, 255, 0.03)',
              color: isActive ? 'var(--color-warm-highlight)' : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              outline: 'none',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.color = '#FFFFFF';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
