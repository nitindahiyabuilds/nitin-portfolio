import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiRadio, FiCpu, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const activeBuilds = [
  {
    id: 'ai-coach',
    title: 'AI Coach',
    role: 'Core Builder & Architect',
    status: 'Active Development',
    statusColor: 'bg-emerald-500',
    icon: FiRadio,
    description:
      'An intelligent coaching engine combining deterministic workout & routine computation with low-latency conversational voice agent feedback and memory.',
    highlight: 'Architecture separates deterministic tracking from LLM reasoning.',
    tags: ['Voice Agents', 'LiveKit', 'FastAPI', 'PostgreSQL', 'RAG'],
    link: '/projects/ai-coach',
    isInternal: true,
  },
  {
    id: 'roast-arena',
    title: 'Roast Arena',
    role: 'Backend & State Engine',
    status: 'In Active Build',
    statusColor: 'bg-amber-500',
    icon: FiCpu,
    description:
      'Real-time multiplayer battleground where autonomous LLM personas clash in live roast competitions with sub-50ms WebSocket state sync and crowd scoring.',
    highlight: 'Engineered for concurrent room state consistency and streaming turns.',
    tags: ['Fastify', 'WebSockets', 'Redis', 'LLM Chaining', 'Prisma'],
    link: 'https://github.com/nitindahiyabuilds',
    isInternal: false,
  },
  {
    id: 'threatmap-v2',
    title: 'ThreatMap V2',
    role: 'Creator & Maintainer',
    status: 'V2 Architecture',
    statusColor: 'bg-blue-500',
    icon: FiShield,
    description:
      'Next-generation distributed cyber threat intelligence platform. Upgraded with asynchronous recon pipelines, automated triage, and sub-second global telemetry.',
    highlight: 'Automates 90%+ of manual attack-surface reconnaissance in parallel.',
    tags: ['FastAPI', 'Docker', 'Python', 'Parallel Pipelines', 'PostgreSQL'],
    link: '/projects/threatmap',
    isInternal: true,
  },
];

const CurrentlyBuilding = () => {
  return (
    <section id="currently-building" className="py-24 px-6 bg-[#f4f0e8] border-t border-black/8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-black/8 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#333]">
                Live Focus &amp; In-Flight Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111] tracking-tight">
              Currently Building
            </h2>
          </div>
          <p className="text-sm text-[#666] max-w-md">
            Dedicated active builds solving real problems. Separated into focused system layers from deterministic data models to low-latency agent reasoning.
          </p>
        </div>

        {/* 3 Standalone Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeBuilds.map((build, idx) => {
            const IconComponent = build.icon;
            const CardWrapper = build.isInternal ? Link : 'a';
            const wrapperProps = build.isInternal
              ? { to: build.link }
              : { href: build.link, target: '_blank', rel: 'noopener noreferrer' };

            return (
              <motion.div
                key={build.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex"
              >
                <CardWrapper
                  {...wrapperProps}
                  className="w-full flex flex-col justify-between rounded-2xl bg-white border border-black/8 p-7 hover:border-black/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group no-underline"
                >
                  <div>
                    {/* Top Row: Icon + Status */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-[#f1ede6] flex items-center justify-center text-[#111] group-hover:bg-[#111] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="text-lg" />
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f9f7f3] border border-black/6">
                        <span className={`w-1.5 h-1.5 rounded-full ${build.statusColor} animate-pulse`} />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#555]">
                          {build.status}
                        </span>
                      </div>
                    </div>

                    {/* Role & Title */}
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#777] mb-1">
                      {build.role}
                    </p>
                    <h3 className="text-xl font-bold text-[#111] mb-3 group-hover:text-black flex items-center justify-between">
                      <span>{build.title}</span>
                      <FiArrowUpRight className="text-[#999] group-hover:text-[#111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#555] leading-relaxed mb-4">
                      {build.description}
                    </p>

                    {/* Architectural highlight note */}
                    <div className="p-3 rounded-lg bg-[#f9f7f3] border-l-2 border-black/30 mb-5">
                      <p className="text-[11px] text-[#444] font-mono leading-normal">
                        {build.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <div className="pt-4 border-t border-black/6">
                    <div className="flex flex-wrap gap-1.5">
                      {build.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#f1ede6] text-[#444] border border-black/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CurrentlyBuilding;
