import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../constant';

// Tight one-sentence descriptions for list view
const listDescriptions = {
  'AI Coach':
    'A coaching platform with a deterministic scoring layer feeding structured context to an LLM, separating what can be computed from what needs to be reasoned.',
  'Forge API':
    'A production-oriented FastAPI backend covering auth, ownership-based authorization, versioned migrations, automated testing, and CI.',
  'ThreatMap':
    'Automates 90%+ of manual security assessment workflows by orchestrating recon and scanning tools in parallel, with AI-assisted triage and structured reports.',
  'Social Data Automation':
    'Python pipelines that pull from external APIs, deduplicate records, and sync clean data into MySQL and Google Sheets on a schedule.',
  'Roast Arena':
    'Realtime multiplayer backend managing live battle state, submissions, and voting across concurrent clients with PostgreSQL, Prisma, and WebSockets.',
  'Win Forensics':
    'Automates 80%+ of Windows forensic artifact collection, including DPAPI key derivation and encrypted SQLite decryption, used in active Delhi Police investigations.',
};

const detailRoutes = {
  'AI Coach': '/projects/ai-coach',
  'Forge API': '/projects/forge-api',
  'ThreatMap': '/projects/threatmap',
};

const featuredTitles = ['AI Coach', 'Forge API', 'ThreatMap'];

const StatusBadge = ({ status }) => {
  const isBuilding = status === 'BUILDING' || status === 'ACTIVE BUILD' || status === 'IN DEVELOPMENT';
  return (
    <span className="flex items-center gap-1.5">
      {isBuilding && <span className="pulse-dot" />}
      <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-[#888]">
        {status}
      </span>
    </span>
  );
};

const FeaturedProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className="py-10 border-b border-black/7 group"
  >
    {/* Category + Status row */}
    <div className="flex items-center justify-between mb-3">
      <span className="section-label">{project.category}</span>
      <StatusBadge status={project.status} />
    </div>

    {/* Title */}
    <h3 className="text-2xl md:text-3xl font-semibold text-[#111] tracking-[-0.02em] mb-3">
      {project.title}
    </h3>

    {/* Description */}
    <p className="text-[#444] text-base leading-[1.72] max-w-xl mb-5">
      {listDescriptions[project.title] || project.description}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
      {project.tags.map((tag) => (
        <span key={tag} className="text-xs text-[#888]">
          {tag}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex flex-wrap gap-6 items-center">
      {detailRoutes[project.title] && (
        <Link
          to={detailRoutes[project.title]}
          className="inline-flex items-center gap-1 text-sm font-medium text-[#111] underline underline-offset-4 decoration-black/30 hover:decoration-black transition-all group/link"
        >
          View project
          <span className="inline-block transition-transform group-hover/link:translate-x-0.5">→</span>
        </Link>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#888] hover:text-[#111] transition-colors"
        >
          GitHub →
        </a>
      )}
    </div>
  </motion.article>
);

const CompactProjectRow = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className="py-6 border-b border-black/7 group"
  >
    <div className="flex items-start justify-between gap-4 mb-1">
      <div className="flex items-baseline gap-3 flex-wrap">
        <h3 className="text-base font-semibold text-[#111]">{project.title}</h3>
        <span className="section-label">{project.category}</span>
      </div>
      <StatusBadge status={project.status} />
    </div>
    <p className="text-sm text-[#444] leading-[1.7] max-w-xl">
      {listDescriptions[project.title] || project.description}
    </p>
    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
      {project.tags.map((tag) => (
        <span key={tag} className="text-xs text-[#888]">
          {tag}
        </span>
      ))}
    </div>
  </motion.article>
);

const Projects = () => {
  const featured = projects.filter((p) => featuredTitles.includes(p.title));
  const secondary = projects.filter((p) => !featuredTitles.includes(p.title));

  return (
    <section id="projects" className="py-20 px-6 bg-[#f9f7f3]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xl font-semibold text-[#111] mb-2"
        >
          Selected work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-sm text-[#888] mb-12"
        >
          Projects I've built, shipped, or actively working on.
        </motion.p>

        {/* Featured projects */}
        <div className="border-t border-black/7">
          {featured.map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Secondary projects */}
        {secondary.length > 0 && (
          <div className="mt-12">
            <p className="section-label mb-6">More work</p>
            <div className="border-t border-black/7">
              {secondary.map((project, index) => (
                <CompactProjectRow key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
