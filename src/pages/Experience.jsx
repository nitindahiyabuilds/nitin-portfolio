import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    period: 'Feb 2026 - May 2026',
    role: 'Security Intern',
    company: 'AbyM Technologies',
    location: 'Remote, Noida, India',
    description: 'Worked on vulnerability assessments, automated scanning workflows, security classification and remediation documentation across internal web services.',
  },
  {
    period: 'Jul 2025 - Oct 2025',
    role: 'Digital Forensics Intern',
    company: 'National Cyber Forensics Lab (IFSO), Delhi Police',
    location: 'Delhi, India',
    description: 'Worked with Windows registry hives, event logs and filesystem artifacts, and built Python automation for forensic artifact collection and analysis.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 md:mb-16">
          <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">
            EXPERIENCE
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-[-0.06em]">
            Where I have worked
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-[20px] border border-white/10 bg-[#0f141a] p-5 sm:p-6"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#b9f2d4]">
                {experience.period}
              </p>
              <h3 className="mt-5 text-white text-2xl sm:text-[2rem] font-black tracking-[-0.06em] uppercase">
                {experience.role}
              </h3>
              <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-white/60">
                {experience.company}
              </p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.24em] text-white/50">
                {experience.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {experience.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;