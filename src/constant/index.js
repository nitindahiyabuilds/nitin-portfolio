export const projects = [
  {
    number: '01',
    title: 'AI Coach',
    category: 'AI / PRODUCT / APPLICATION ENGINEERING',
    status: 'BUILDING',
    featured: true,
    description:
      'An AI coaching platform built with two distinct layers: a deterministic computation layer that scores and tracks user data over time, and an LLM reasoning layer that uses structured context for personalized recommendations.',
    tags: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'LLM APIs',
      'AI Workflows',
    ],
    type: 'product',
  },

  {
    number: '02',
    title: 'Forge API',
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
    type: 'product',
  },

  {
    number: '03',
    title: 'ThreatMap',
    category: 'SECURITY / AUTOMATION',
    status: 'OPEN SOURCE',
    featured: true,
    description:
      'A terminal-first security assessment engine that orchestrates recon and vulnerability tools in parallel, automating 90%+ of manual workflows with AI-assisted triage and structured reports.',
    tags: [
      'Python',
      'Linux',
      'Nmap',
      'Nuclei',
      'Parallel Execution',
      'AI Triage',
    ],
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
    type: 'product',
  },

  {
    number: '05',
    title: 'Roast Arena',
    category: 'REALTIME / BACKEND SYSTEM',
    status: 'IN DEVELOPMENT',
    description:
      'Realtime multiplayer web app backend managing live battle state, submissions, and voting across concurrent clients, built with PostgreSQL, Prisma, WebSockets, and Redis.',
    tags: ['PostgreSQL', 'Prisma', 'Realtime', 'WebSockets', 'Auth'],
    type: 'product',
  },

  {
    number: '06',
    title: 'Win Forensics',
    category: 'SECURITY / DIGITAL FORENSICS',
    status: 'OPEN SOURCE',
    description:
      'A Windows digital forensics toolkit that automates 80%+ of forensic artifact collection, including DPAPI key derivation and encrypted SQLite decryption, used in active law enforcement investigations.',
    tags: [
      'Python',
      'Windows',
      'Digital Forensics',
      'Security Automation',
    ],
    type: 'product',
  },
];

export const writing = [
  {
    date: 'Feb 2025',
    title: 'I Ran the Numbers on the AI Boom and Now I Can\'t Stop Thinking About It',
    url: 'https://medium.com/@nitin_dahiya/i-ran-the-numbers-on-the-ai-boom-and-now-i-cant-stop-thinking-about-it-9fe4970c43c9?sharedUserId=nitin_dahiya',
  },
  {
    date: 'Feb 2025',
    title: 'The "Vibe Coder\'s" Security Paradox: How to Ship Fast Without Shipping Vulnerabilities',
    url: 'https://medium.com/@nitin_dahiya/the-vibe-coders-security-paradox-how-to-ship-fast-without-shipping-vulnerabilities-070d7d102453?sharedUserId=nitin_dahiya',
  },
  {
    date: 'Jan 2025',
    title: 'I Ditched VMware for a Windows + Kali Linux Dual Boot (2025 Edition)',
    url: 'https://medium.com/@nitin_dahiya/i-ditched-vmware-for-a-windows-kali-linux-dual-boot-2025-edition-174bf7ee947b?sharedUserId=nitin_dahiya',
  },
  {
    date: 'Oct 2024',
    title: 'Building ThreatMap: Redefining Security Scanning with Local AI Triage',
    url: 'https://medium.com/@nitin_dahiya/building-threatmap-redefining-security-scanning-with-local-ai-triage-d9f998392e6e?sharedUserId=nitin_dahiya',
  },
  {
    date: 'Sep 2024',
    title: 'The Local Storage Illusion: What I Discovered About Windows Security and Desktop Apps',
    url: 'https://medium.com/@nitin_dahiya/the-local-storage-illusion-what-i-discovered-about-windows-security-and-desktop-apps-a0dcf786ce90',
  },
];

export default projects;
