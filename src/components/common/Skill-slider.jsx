import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Docker',
  'Linux',
  'AI Engineering',
  'Automation',
  'Cybersecurity',
  'REST APIs',
  'Git',
];

const SkillSlider = () => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-20 bg-[color:var(--color-bg)] overflow-hidden border-y border-[color:var(--color-border)]">
      <div className="mb-10 text-center px-4">
        <span className="text-[color:var(--color-text-muted)] text-[10px] tracking-[0.35em] uppercase font-medium">
          ENGINEERING STACK
        </span>
      </div>

      <div className="relative flex">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[color:var(--color-bg)] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[color:var(--color-bg)] to-transparent z-10" />

        <motion.div
          className="flex gap-6 sm:gap-10 items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 24,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="flex items-center justify-center border border-[color:var(--color-border)] bg-white/2 px-4 py-2 rounded-full"
            >
              <span className="text-[color:var(--color-text-secondary)] text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase">
                {skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSlider;