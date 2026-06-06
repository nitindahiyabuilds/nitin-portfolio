import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Uber-Clone",
    category: "web App / Transportation",
    description: "A clone of the popular ride sharing app uber, built with React, Node.js, express, MongoDb, Tailwindcss and Vercel.",
    tags: ["React", "Node.js", "express", "MongoDB", "Tailwind", "Vercel"],
    image: "/Users/sujalgarg/portfolio/src/assets/image.png",
    link: "https://uber-clone-nynm.onrender.com/",
    github: "https://github.com/sujallgarg/Uber-Clone",

  },
  {
    title: "Portfolio-Site",
    category: "web App / Portfolio",
    description: "A Portfolio website built with React, Node.js, express, MongoDb, Tailwindcss and Vercel.",
    tags: ["React", "Node.js", "express", "MongoDB", "Tailwind", "Vercel"],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200",
    link: "https://sujalgarg.vercel.app/",
    github: "https://github.com/sujallgarg/portfolio",

  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4">
              Project Archive // 2025-2026
            </h2>
            <h3 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Selected <span className="text-transparent" style={{ WebkitTextStroke: "1px #ffffff60" }}>Works</span>
            </h3>
          </div>
          <p className="text-secondary text-xs uppercase tracking-widest opacity-50">
            [ Total Entries: 02 ]
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group relative overflow-hidden bg-[#111] border border-white/5 p-4 hover:border-white/20 transition-all duration-300 ${index % 3 === 0 ? "md:col-span-2" : ""
                }`}
            >
              {/* CRUCIAL: Absolute Invisible Overlay Link for Card Clickability */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 cursor-pointer"
                aria-label={`Open live site for ${project.title}`}
              />

              {/* Image Container */}
              <div className="relative h-[300px] md:h-[450px] overflow-hidden bg-black">
                {project.image ? (
                  <iframe
                    src={project.link}
                    title={`Live preview of ${project.title}`}
                    className="w-full h-full border-none opacity-70 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center border border-white/5 opacity-40 group-hover:opacity-60 transition-opacity">
                    <span className="text-zinc-600 text-xs font-mono tracking-widest">[ NO PREVIEW GENERATED ]</span>
                  </div>
                )}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-10 bg-[length:100%_2px,3px_100%]" />
              </div>

              {/* Project Info */}
              <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="text-white text-2xl font-bold tracking-tight uppercase group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-secondary text-xs mt-1 uppercase tracking-widest opacity-60">
                    {project.category}
                  </p>
                  <p className="text-secondary text-xs uppercase tracking-widest mt-3 opacity-60 max-w-xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:self-start mt-2 md:mt-0 relative z-30">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] border border-white/20 px-2 py-1 text-white/40 rounded-full uppercase font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links Section */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-6 relative z-30">
                {/* Visual Label for Launching Site */}
                <span className="text-[10px] text-white font-bold tracking-[0.3em] uppercase border-b border-white/20 pb-1 group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all pointer-events-none">
                  Launch App ↗
                </span>

                {/* The Repository Source Link (Kept functional using relative z-index hierarchy) */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-zinc-500 font-bold tracking-[0.3em] uppercase border-b border-transparent pb-1 hover:border-white hover:text-white transition-all"
                  >
                    Repository 🛠️
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;