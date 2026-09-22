import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    period: 'Jul 2025 - Oct 2025',
    role: 'Intern',
    company: 'National Cyber Forensics Lab (IFSO), Delhi Police',
    location: 'Delhi, India',
    description:
      'Conducted digital forensic analysis on Windows endpoints (registry hives, event logs, and filesystem artifacts) and built Python automation for forensic artifact collection and log analysis.',
    highlight: 'Received formal Appreciation Letter from Delhi Police.',
  },
  {
    period: 'Feb 2026 - May 2026',
    role: 'Intern',
    company: 'AbyM Technologies',
    location: 'Remote, Noida, India',
    description:
      'Ran structured vulnerability assessments across internal web services using automated scanning pipelines, classified weaknesses before deployment, and collaborated with infrastructure teams on remediation controls.',
    highlight: null,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-[#f9f7f3] border-t border-black/7">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="section-label mb-4">Experience</p>
          <h2 className="text-xl font-semibold text-[#111]">
            Where I've worked
          </h2>
        </motion.div>

        <div className="divide-y divide-black/7 border-t border-black/7">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="py-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <div>
                  <span className="text-base font-semibold text-[#111]">{exp.role}</span>
                  <span className="text-base text-[#444]"> at </span>
                  <span className="text-base font-semibold text-[#111]">{exp.company}</span>
                </div>
                <span className="text-xs text-[#888] shrink-0 tabular-nums">{exp.period}</span>
              </div>

              <p className="text-xs text-[#888] mb-4">{exp.location}</p>

              <p className="text-sm text-[#444] leading-[1.75] max-w-xl">
                {exp.description}
              </p>

              {/* Highlight badge */}
              {exp.highlight && (
                <div className="mt-4 inline-flex items-center gap-2 bg-[#f1ede6] border border-black/8 rounded px-3 py-1.5">
                  <span className="text-xs font-medium text-[#111]">★ {exp.highlight}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
