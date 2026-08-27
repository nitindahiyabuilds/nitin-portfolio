import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Projectcard from '../components/Projectcard';
import { projects } from '../constant';

const ProjectsPage = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 md:mb-16">
          <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">
            PROJECTS
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-[-0.06em]">
            Selected engineering work
          </h2>
          <p className="mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-white/70">
            Backend systems, AI workflows, automation and security work spanning product builds and client engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              {project.title === 'Atlas' ? (
                <Link to="/projects/atlas" className="block h-full">
                  <Projectcard project={project} />
                </Link>
              ) : (
                <Projectcard project={project} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;