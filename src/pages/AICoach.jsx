import React from 'react';
import { motion } from 'framer-motion';

const architectureStages = [
  ['01', 'User', 'Provides goals, activity and ongoing context.'],
  ['02', 'Next.js Application', 'Coordinates the product experience and application flow.'],
  ['03', 'Supabase / PostgreSQL', 'Stores persistent user data for future context.'],
  ['04', 'Application Logic', 'Combines stored data with the relevant product logic.'],
  ['05', 'Deterministic Analysis', 'Performs calculations where predictable results matter.'],
  ['06', 'Structured Context', 'Prepares analyzed information for the AI workflow.'],
  ['07', 'LLM', 'Reasons about the supplied context and situation.'],
  ['08', 'Coaching Response', 'Returns natural-language coaching to the user.'],
];

const decisions = [
  {
    title: 'Persistent data instead of conversation-only memory',
    description: 'Coaching is longitudinal, so important context needs to live in application data rather than only in a conversation.',
  },
  {
    title: 'Deterministic computation instead of asking the LLM to calculate everything',
    description: 'Predictable calculations belong in application logic where their behavior can be controlled directly.',
  },
  {
    title: 'LLM reasoning after application analysis',
    description: 'The model receives useful structured context instead of being responsible for discovering all application state itself.',
  },
  {
    title: 'Build the product incrementally',
    description: 'AI Coach is being developed as a real application rather than starting with unnecessary AI infrastructure.',
  },
];

const stackGroups = [
  ['Frontend', 'Next.js, React, TypeScript, Tailwind CSS'],
  ['Data', 'Supabase, PostgreSQL'],
  ['AI', 'LLM APIs, AI Workflows'],
  ['Application', 'Persistent User Data, Deterministic Analysis, Structured Context'],
];

const AICoach = () => {
  return (
    <main>
      <section className="px-6 py-24 bg-black border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-5">
              AI PRODUCT / APPLICATION ENGINEERING
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-[-0.07em] uppercase">
              AI Coach
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              An AI-powered coaching product built around persistent user data, deterministic analysis and contextual LLM reasoning.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
              AI Coach is a product I am building to explore how AI can become useful when it has access to structured context about a user's ongoing goals, activity and history.
            </p>
            <p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-white/50">
              CURRENT STATUS <span className="text-[#b9f2d4]">BUILDING</span>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <article className="border border-white/10 bg-[#0f141a] p-6 md:p-8">
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[01]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">The product</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              AI Coach is designed around coaching rather than one-off AI conversations. The application combines information stored about the user with application-level analysis before asking the LLM to generate a response.
            </p>
          </article>
          <article className="border border-white/10 bg-[#0f141a] p-6 md:p-8">
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[02]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">The problem</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              A generic AI conversation does not automatically understand a user's ongoing history. Useful coaching context can depend on previous workouts, nutrition information, user goals, historical activity and previous context. AI Coach explores how persistent application data can provide better context for AI-generated coaching.
            </p>
          </article>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">03 / SYSTEM ARCHITECTURE</p>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-[-0.06em] uppercase">From data to coaching</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10">
            {architectureStages.map(([number, title, description], index) => (
              <div key={title} className="relative border-b sm:border-r border-white/10 p-5 lg:[&:nth-child(4n)]:border-r-0">
                <span className="text-[10px] text-[#b9f2d4] font-mono">{number}</span>
                <p className="mt-4 text-sm uppercase tracking-[0.12em] text-white">{title}</p>
                <p className="mt-3 text-xs leading-relaxed text-white/55">{description}</p>
                {index < architectureStages.length - 1 && <span className="absolute right-3 top-1/2 hidden lg:block text-[#b9f2d4]">↓</span>}
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/60">
            This project separates responsibilities deliberately: deterministic code owns calculations and analysis, while the LLM interprets structured context and generates natural-language coaching.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 bg-[#0f141a] p-6"
          >
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[04]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">Persistent user context</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              User information is stored in the database rather than relying on the LLM to remember everything from a conversation. Workout history, nutrition information and user profile context provide database-backed memory for a longitudinal coaching product.
            </p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="border border-white/10 bg-[#0f141a] p-6"
          >
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[05]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">Deterministic analysis</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Calculations and structured analysis are handled by application code when deterministic behavior is required. The application should not ask an LLM to perform calculations that can be reliably handled by code.
            </p>
            <div className="mt-6 border-t border-white/10 pt-4 font-mono text-xs uppercase tracking-[0.12em] text-white/60">
              <p>Workout history</p>
              <p className="my-2 text-[#b9f2d4]">↓</p>
              <p>Application logic</p>
              <p className="my-2 text-[#b9f2d4]">↓</p>
              <p>Progress calculation</p>
              <p className="my-2 text-[#b9f2d4]">↓</p>
              <p>Structured result</p>
              <p className="my-2 text-[#b9f2d4]">↓</p>
              <p>LLM context</p>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <article className="border border-white/10 bg-[#0f141a] p-6">
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[06]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">LLM reasoning</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">The LLM receives structured context produced by the application and uses it to generate natural-language reasoning and coaching.</p>
            <div className="mt-6 space-y-4 border-t border-white/10 pt-4 text-sm">
              <p><span className="text-[#b9f2d4]">Application code:</span> owns data, performs deterministic analysis and prepares structured context.</p>
              <p><span className="text-[#b9f2d4]">LLM:</span> interprets context, reasons about the situation and generates the coaching response.</p>
            </div>
          </article>
          <article className="border border-white/10 bg-[#0f141a] p-6">
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[07]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">Structured outputs</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">Structured information is used between application logic and AI workflows where appropriate, so the LLM receives an explicit representation of the analysis and context it needs to interpret.</p>
          </article>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">08 / APPLICATION ARCHITECTURE</p>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-[-0.06em] uppercase">Product layers</h2>
          </div>
          <div className="border-t border-white/10">
            {stackGroups.map(([category, technologies]) => (
              <div key={category} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 border-b border-white/10 py-5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#b9f2d4]">{category}</p>
                <p className="text-sm leading-relaxed text-white/70">{technologies}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">AI Coach combines normal product engineering with AI-specific application logic.</p>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">09 / ENGINEERING DECISIONS</p>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-[-0.06em] uppercase">Decisions made</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {decisions.map((decision) => (
              <article key={decision.title} className="bg-black p-6 md:p-8">
                <h3 className="text-white text-lg font-bold uppercase tracking-tight">{decision.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{decision.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">10 / A REAL EXAMPLE</p>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-[-0.06em] uppercase">Workout analysis</h2>
            <div className="mt-6 border border-white/10 bg-[#0f141a] p-6 font-mono text-sm text-white/70">
              <p>Previous workout: Bench Press</p>
              <p className="mt-2 text-[#b9f2d4]">77.5 kg x 8</p>
              <p className="my-4 text-[#b9f2d4]">↓</p>
              <p>Recent workout: Bench Press</p>
              <p className="mt-2 text-[#b9f2d4]">80 kg x 8</p>
              <p className="my-4 text-[#b9f2d4]">↓</p>
              <p>Application logic detects progression in the recorded workout data.</p>
              <p className="my-4 text-[#b9f2d4]">↓</p>
              <p>Structured context</p>
              <p className="my-4 text-[#b9f2d4]">↓</p>
              <p>LLM reasoning</p>
              <p className="my-4 text-[#b9f2d4]">↓</p>
              <p>Coaching recommendation</p>
            </div>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">11 / WHAT I LEARNED</p>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-[-0.06em] uppercase">Clear boundaries</h2>
            <p className="mt-6 text-sm leading-relaxed text-white/70">AI applications still need normal software engineering. Persistent data matters for longitudinal products, deterministic logic should handle predictable computation, and LLMs are useful when reasoning and language generation are needed. AI systems need clear boundaries between application logic and model behavior, and product architecture matters as much as the model API.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">12 / CURRENT STATUS</p>
            <p className="text-white text-lg leading-relaxed">AI Coach is currently under development.</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65">The current work focuses on building the application architecture, persistent user context, deterministic analysis and AI-powered coaching workflows.</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">13 / WHAT I WOULD BUILD NEXT</p>
            <ul className="space-y-3 text-sm leading-relaxed text-white/70">
              <li>Expand longitudinal context</li>
              <li>Improve coaching workflows</li>
              <li>Add more structured user signals</li>
              <li>Improve evaluation of AI responses</li>
              <li>Strengthen automated testing around AI workflows</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">14 / TECH STACK</p>
          <div className="border-t border-white/10">
            {stackGroups.map(([category, technologies]) => (
              <div key={category} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 border-b border-white/10 py-5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#b9f2d4]">{category}</p>
                <p className="text-sm leading-relaxed text-white/70">{technologies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AICoach;