import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    number: '01',
    title: 'The Problem',
    content: 'The purpose of Atlas was to build a backend where the engineering work goes beyond simply creating endpoints. The project brings API design, authentication, authorization, database design, migrations, testing, CI and containerized development into one practical system.',
  },
  {
    number: '03',
    title: 'Authentication',
    content: 'Atlas uses JWT-based authentication with the OAuth2 flow provided through FastAPI. Password hashing protects stored credentials before authenticated requests receive a token.',
  },
  {
    number: '04',
    title: 'Authorization',
    content: 'Authorization is ownership-based. After a user is authenticated, resource access and modification are limited to resources that user owns.',
  },
  {
    number: '05',
    title: 'Database',
    content: 'PostgreSQL provides the relational database, SQLAlchemy 2.0 manages database interaction, and Alembic manages versioned schema migrations. Schema changes are handled through Alembic rather than manually modifying the database.',
  },
  {
    number: '06',
    title: 'Testing',
    content: 'Automated tests use pytest, pytest-cov, FastAPI TestClient and HTTPX to validate important API behavior instead of relying only on manual API testing.',
  },
  {
    number: '07',
    title: 'CI',
    content: 'GitHub Actions runs automated tests with a PostgreSQL CI service and applies database migrations as part of validation. This helps validate backend changes before they are treated as stable.',
  },
  {
    number: '08',
    title: 'Containerization',
    content: 'Docker Compose makes the local development environment reproducible. Startup migrations help the application prepare its database schema when the containers run.',
  },
  {
    number: '09',
    title: 'Engineering Workflow',
    content: 'Atlas was developed with Git and GitHub using feature branches, meaningful commits, pull requests and CI checks as part of the normal engineering workflow.',
  },
];

const decisions = [
  {
    title: 'Why PostgreSQL?',
    description: 'Relational data and clear ownership relationships made PostgreSQL a suitable choice for the application data model.',
  },
  {
    title: 'Why Alembic?',
    description: 'Database schema changes should be versioned and reproducible rather than manually applied.',
  },
  {
    title: 'Why automated tests?',
    description: 'Backend changes should be validated automatically instead of relying only on manual API testing.',
  },
  {
    title: 'Why separate authentication and authorization?',
    description: 'Knowing who a user is and deciding what that user can access are different responsibilities.',
  },
];

const stackGroups = [
  ['Backend', 'Python, FastAPI, REST APIs, Pydantic, Uvicorn'],
  ['Database', 'PostgreSQL, SQLAlchemy 2.0, Alembic'],
  ['Authentication', 'JWT, OAuth2, Password Hashing'],
  ['Testing', 'pytest, pytest-cov, HTTPX, FastAPI TestClient'],
  ['Infrastructure', 'Docker, Docker Compose, GitHub Actions, Linux'],
  ['Workflow', 'Git, GitHub, Feature Branches, Pull Requests'],
];

const Atlas = () => {
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
              BACKEND ENGINEERING
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-[-0.07em] uppercase">
              Atlas
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              A production-oriented FastAPI backend built around authentication, authorization, PostgreSQL, testing and CI.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
              Atlas is a backend API system I built to go beyond basic CRUD and practice the engineering concerns that appear in real backend applications.
            </p>
            <p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-white/50">
              GitHub link not provided
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">
              02 / ARCHITECTURE
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-[-0.06em] uppercase">
              Request flow
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 border border-white/10">
            {['Client', 'FastAPI', 'API Routes', 'Application Logic', 'SQLAlchemy', 'PostgreSQL'].map((item, index) => (
              <div key={item} className="relative border-b sm:border-b-0 sm:border-r last:border-0 border-white/10 p-5">
                <span className="text-[10px] text-[#b9f2d4] font-mono">0{index + 1}</span>
                <p className="mt-4 text-sm uppercase tracking-[0.12em] text-white">{item}</p>
                {index < 5 && <span className="absolute right-3 top-1/2 hidden lg:block text-[#b9f2d4]">↓</span>}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Alembic manages the database schema migrations separately from the request flow.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {sections.map((section, index) => (
            <motion.article
              key={section.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-white/10 bg-[#0f141a] p-6"
            >
              <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[{section.number}]</p>
              <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{section.content}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">10 / ENGINEERING DECISIONS</p>
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
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">11 / WHAT I LEARNED</p>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-[-0.06em] uppercase">Beyond endpoints</h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70">
              Backend systems involve more than endpoints. Authentication and authorization must be designed deliberately, database migrations are part of application development, and testing becomes more valuable as application behavior grows. CI makes engineering workflows more reliable, while containerization reduces environment-specific problems.
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">12 / CURRENT STATUS</p>
            <p className="text-white text-lg leading-relaxed">
              Atlas is an engineering project being used as a practical backend engineering build.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">13 / TECH STACK</p>
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

export default Atlas;