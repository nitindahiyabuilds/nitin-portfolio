import React from 'react';

const Projectcard = ({ project }) => {
  const isConsulting = project.type === 'consulting';

  return (
    <article
      className={`group relative overflow-hidden rounded-[20px] border p-5 sm:p-6 transition-colors duration-300 ${
        isConsulting
          ? 'border-[#b9f2d4]/40 bg-[#0d1513]'
          : 'border-white/10 bg-[#0f141a] hover:border-white/20'
      }`}
    >
      <div className="flex items-center justify-between gap-4 mb-6 text-[10px] uppercase tracking-[0.24em] text-white/60">
        <span>{project.number}</span>
        <span>{project.category}</span>
      </div>

      {isConsulting ? (
        <>
          <h3 className="text-white text-2xl sm:text-[2rem] font-black tracking-[-0.06em] uppercase">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{project.description}</p>

          <div className="mt-6 space-y-3">
            {project.engagements.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-3"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#b9f2d4]">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.description}</p>
              </div>
            ))}
          </div>

          {project.tags?.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <h3 className="text-white text-2xl sm:text-[2rem] font-black tracking-[-0.06em] uppercase">
            {project.title}
          </h3>
          <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[#b9f2d4]">{project.category}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{project.description}</p>

          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/50 mb-3">Built with</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {(project.caseStudy || project.github) && (
            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4">
              {project.caseStudy && (
                <a
                  href={project.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.24em] text-white font-semibold transition-colors hover:text-[#b9f2d4]"
                >
                  CASE STUDY →
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.24em] text-white/70 transition-colors hover:text-white"
                >
                  GITHUB →
                </a>
              )}
            </div>
          )}
        </>
      )}
    </article>
  );
};

export default Projectcard;