import React from 'react';
import { motion } from 'framer-motion';

const architectureStages = [
  ['User', 'Provides goals, activity and ongoing context.'],
  ['Next.js Application', 'Coordinates the product experience and application flow.'],
  ['Supabase / PostgreSQL', 'Stores persistent user data for future context.'],
  ['Application Logic', 'Combines stored data with the relevant product logic.'],
  ['Deterministic Analysis', 'Performs calculations where predictable results matter.'],
  ['Structured Context', 'Prepares analyzed information for the AI workflow.'],
  ['LLM', 'Reasons about the supplied context and situation.'],
  ['Coaching Response', 'Returns natural-language coaching to the user.'],
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
    <main className="bg-[#f7f5f0] pt-14">
      <section className="px-6 py-20 border-b border-black/8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs text-[#7a7d85] mb-4">AI product / application engineering</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#14161a] tracking-tight">AI Coach</h1>
            <p className="mt-5 max-w-xl text-base text-[#454851] leading-relaxed">
              An AI coaching platform built around persistent user data, deterministic analysis and contextual LLM reasoning.
            </p>
            <p className="mt-3 max-w-xl text-sm text-[#454851] leading-relaxed">
              AI Coach explores how AI becomes useful when it has access to structured context about a user's ongoing goals, activity and history, not just the current conversation.
            </p>
            <p className="mt-6 text-xs text-[#7a7d85]">Status: Building</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-black/8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">The product</h2>
            <p className="text-sm text-[#454851] leading-relaxed">
              AI Coach is designed around coaching rather than one-off AI conversations. The application combines information stored about the user with application-level analysis before asking the LLM to generate a response.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">The problem</h2>
            <p className="text-sm text-[#454851] leading-relaxed">
              A generic AI conversation does not automatically understand a user's ongoing history. Useful coaching context depends on previous workouts, nutrition, goals and historical activity. AI Coach explores how persistent application data can provide better context for AI-generated coaching.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-black/8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-[#14161a] mb-8">Architecture - from data to coaching</h2>
          <div className="divide-y divide-black/8">
            {architectureStages.map(([title, description], index) => (
              <div key={title} className="py-4 grid grid-cols-[140px_1fr] gap-4">
                <p className="text-xs text-[#7a7d85] pt-0.5">{String(index + 1).padStart(2, '0')}</p>
                <div>
                  <p className="text-sm font-medium text-[#14161a]">{title}</p>
                  <p className="text-sm text-[#454851] mt-0.5">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#454851] leading-relaxed max-w-xl">
            Deterministic code owns calculations and analysis; the LLM interprets structured context and generates natural-language coaching.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-black/8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">Persistent user context</h2>
            <p className="text-sm text-[#454851] leading-relaxed">
              User information is stored in the database rather than relying on the LLM to remember everything from a conversation. Workout history, nutrition and user profile context provide database-backed memory for a longitudinal coaching product.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">Deterministic analysis</h2>
            <p className="text-sm text-[#454851] leading-relaxed">
              Calculations and structured analysis are handled by application code when deterministic behavior is required. The application should not ask an LLM to perform calculations that can be reliably handled by code.
            </p>
            <div className="mt-4 text-sm text-[#7a7d85] space-y-1">
              <p>Workout history → Application logic → Progress calculation → Structured result → LLM context</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-black/8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-[#14161a] mb-8">Engineering decisions</h2>
          <div className="divide-y divide-black/8">
            {decisions.map((d) => (
              <div key={d.title} className="py-5">
                <p className="text-sm font-medium text-[#14161a] mb-1">{d.title}</p>
                <p className="text-sm text-[#454851] leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-black/8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-[#14161a] mb-6">Tech stack</h2>
          <div className="divide-y divide-black/8">
            {stackGroups.map(([category, technologies]) => (
              <div key={category} className="py-4 grid grid-cols-[140px_1fr] gap-4">
                <p className="text-xs text-[#7a7d85]">{category}</p>
                <p className="text-sm text-[#454851]">{technologies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">What I learned</h2>
            <p className="text-sm text-[#454851] leading-relaxed">
              AI applications still need normal software engineering. Persistent data matters for longitudinal products, deterministic logic should handle predictable computation, and LLMs are useful when reasoning and language generation are needed. Product architecture matters as much as the model API.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">Current status</h2>
            <p className="text-sm text-[#454851] leading-relaxed">
              Under active development. Current focus: application architecture, persistent user context, deterministic analysis and AI-powered coaching workflows.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AICoach;
