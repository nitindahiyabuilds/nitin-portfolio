import React from 'react';
import { motion } from 'framer-motion';

// Replace these with your actual logo paths or CDN links
const skills = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
  { name: "Rust", icon: "https://cdn.simpleicons.org/rust/D34516" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "Langchain", icon: "https://cdn.simpleicons.org/langchain/7FC8FF" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "Langgraph", icon: "https://cdn.simpleicons.org/langgraph/7FC8FF" },
];

const SkillSlider = () => {
  // We double the array to create a seamless infinite loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-20 bg-black overflow-hidden border-y border-white/5">
      <div className="mb-10 text-center">
        <span className="text-white/30 text-[20px] tracking-[0.4em] uppercase font-mono">
          // Tech Stack Deployment
        </span>
      </div>

      <div className="relative flex">
        {/* Transparent Fades for a "Lens" look */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 group opacity-40 hover:opacity-100 ease-in transition-opacity duration-500"
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 object-contain"
              />
              <span className="text-white text-xs font-mono tracking-widest uppercase">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSlider;