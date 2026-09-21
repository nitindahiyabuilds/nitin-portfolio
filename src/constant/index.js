export const projects = [
  {
    number: '01',
    title: 'AI Coach',
    category: 'AI / PRODUCT / APPLICATION ENGINEERING',
    status: 'BUILDING',
    featured: true,
    description:
      'An AI coaching platform built with two distinct layers: a deterministic computation layer that scores and tracks user data over time, and an LLM reasoning layer that uses that structured context to generate personalized, non-generic recommendations. The architecture separates what can be computed from what needs to be reasoned — that separation is the product.',
    tags: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'LLM APIs',
      'AI Workflows',
    ],
    caseStudy: null,
    github: null,
    type: 'product',
  },

  {
    number: '02',
    title: 'Atlas',
    category: 'BACKEND / ENGINEERING SYSTEM',
    status: 'ACTIVE BUILD',
    featured: true,
    description:
      'A FastAPI backend built to demonstrate production-oriented engineering practices across APIs, authentication, authorization, database migrations, testing, CI and Docker.',
    tags: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy 2.0',
      'Alembic',
      'pytest',
      'GitHub Actions',
      'Docker',
    ],
    caseStudy: null,
    github: null,
    type: 'product',
  },

  {
    number: '03',
    title: 'ThreatMap',
    category: 'SECURITY / AUTOMATION',
    status: 'OPEN SOURCE',
    featured: true,
    description:
      'A terminal-first security assessment engine that orchestrates recon and vulnerability tools in parallel, automating 90%+ of a manual security assessment workflow. Produces structured HTML, Excel, and JSON reports with AI-assisted triage. Open source — adopted by other security practitioners.',
    tags: [
      'Python',
      'Linux',
      'Nmap',
      'Nuclei',
      'Parallel Execution',
      'AI Triage',
    ],
    caseStudy: null,
    github: null,
    type: 'product',
  },

  {
    number: '04',
    title: 'Social Data Automation',
    category: 'INTEGRATIONS / AUTOMATION',
    status: 'CLIENT WORK',
    description:
      'Python automation pipelines that collect data from external APIs, normalize and deduplicate records, then sync results into MySQL and Google Sheets.',
    tags: [
      'Python',
      'APIs',
      'MySQL',
      'Google Sheets',
      'Docker',
      'Scheduled Workflows',
    ],
    caseStudy: null,
    github: null,
    type: 'product',
  },

  {
    number: '05',
    title: 'Roast Arena',
    category: 'REALTIME / BACKEND SYSTEM',
    status: 'IN DEVELOPMENT',
    description:
      'Realtime multiplayer web app backend managing live battle state, submissions, and voting across concurrent clients. Built with another developer — I own the backend architecture, PostgreSQL data model, Prisma ORM layer, auth, and real-time data consistency.',
    tags: ['PostgreSQL', 'Prisma', 'Realtime', 'WebSockets', 'Auth'],
    caseStudy: null,
    github: null,
    type: 'product',
  },

  {
    number: '06',
    title: 'Win Forensics',
    category: 'SECURITY / DIGITAL FORENSICS',
    status: 'OPEN SOURCE',
    description:
      'A Windows digital forensics toolkit that automates 80%+ of forensic artifact collection — including DPAPI-wrapped key derivation and OS-EOF encrypted SQLite decryption. Used in active law enforcement investigations at the National Cyber Forensics Lab / Delhi Police.',
    tags: [
      'Python',
      'Windows',
      'Digital Forensics',
      'Security Automation',
    ],
    caseStudy: null,
    github: null,
    type: 'product',
  },
];

export default projects;
