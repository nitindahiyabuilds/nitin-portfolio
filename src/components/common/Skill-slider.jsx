import React from 'react';
import { motion } from 'framer-motion';
import {
  SiDocker,
  SiFastapi,
  SiFastify,
  SiGit,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiTypescript,
  SiWebrtc,
  SiElevenlabs,
  SiLangchain,
  SiQdrant,
  SiApachekafka,
  SiKubernetes,
  SiGithubactions,
  SiJenkins,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { TbMicrophone2, TbDatabaseSearch, TbPlugConnected, TbRefresh } from 'react-icons/tb';
import { RiVoiceprintFill } from 'react-icons/ri';

const skills = [
  { name: 'Fastify', icon: SiFastify },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Python', icon: SiPython },
  { name: 'Voice Agents', icon: TbMicrophone2 },
  { name: 'WebSockets', icon: TbPlugConnected },
  { name: 'WebRTC', icon: SiWebrtc },
  { name: 'LiveKit', icon: RiVoiceprintFill },
  { name: 'ElevenLabs', icon: SiElevenlabs },
  { name: 'RAG', icon: TbDatabaseSearch },
  { name: 'LangChain', icon: SiLangchain },
  { name: 'Vector DB', icon: SiQdrant },
  { name: 'Kafka', icon: SiApachekafka },
  { name: 'Docker', icon: SiDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'CI/CD', icon: TbRefresh },
  { name: 'GitHub Actions', icon: SiGithubactions },
  { name: 'Jenkins', icon: SiJenkins },
  { name: 'AWS', icon: FaAws },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Redis', icon: SiRedis },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Linux', icon: SiLinux },
  { name: 'Git', icon: SiGit },
];

const SkillSlider = () => {
  return (
    <section className="py-7 bg-[#ede8df] overflow-hidden border-y border-black/8">
      <div className="relative flex items-center">
        {/* Fading gradients on edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#ede8df] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#ede8df] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex w-max items-center whitespace-nowrap select-none"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 gap-8 sm:gap-10 px-4 items-center"
              aria-hidden={group === 1}
            >
              {skills.map(({ name, icon: Icon }) => (
                <div
                  key={`${group}-${name}`}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8f5ef] border border-black/6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                >
                  <Icon className="text-sm text-[#111]" aria-hidden="true" />
                  <span className="text-xs font-medium text-[#222] tracking-tight">{name}</span>
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
