import React from 'react';
import { motion } from 'framer-motion';
import {
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTypescript,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

const skills = [
  { name: 'Python', icon: SiPython },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'SQL' },

  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Redis', icon: SiRedis },

  { name: 'Docker', icon: SiDocker },
  { name: 'Linux', icon: SiLinux },
  { name: 'AWS', icon: FaAws },

  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'GitHub Actions', icon: SiGithubactions },
  { name: 'CI/CD' },

  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },

  { name: 'REST APIs' },

  { name: 'AI Engineering' },
  { name: 'LLMs' },
  { name: 'AI Workflows' },

  { name: 'Automation' },
  { name: 'DevOps' },

  { name: 'Application Security' },
  { name: 'Cloud Security' },
  { name: 'Vulnerability Assessment' },
  { name: 'Security Automation' },
  { name: 'Security Auditing' },
  { name: 'Threat Modeling' },
  { name: 'DevSecOps' },
  { name: 'SaaS' },
];

const SkillSlider = () => {
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
          className="flex w-max items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 24,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 gap-6 sm:gap-10 px-3 sm:px-5 items-center"
              aria-hidden={group === 1}
            >
              {skills.map(({ name, icon: Icon }) => (
                <div
                  key={`${group}-${name}`}
                  className="flex items-center justify-center gap-2 border border-[color:var(--color-border)] bg-white/2 px-4 py-2 rounded-full"
                >
                  {Icon && (
                    <Icon
                      className="text-[14px] sm:text-[16px] text-[color:var(--color-text-secondary)]"
                      aria-hidden="true"
                    />
                  )}

                  <span className="text-[color:var(--color-text-secondary)] text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSlider;