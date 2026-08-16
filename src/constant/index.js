export const projects = [
  {
    number: '01',
    title: 'ThreatMap',
    category: 'SECURITY / AUTOMATION',
    description:
      'An infrastructure security platform focused on automated reconnaissance, vulnerability orchestration and AI-assisted analysis.',
    tags: ['Python', 'Security Automation', 'Infrastructure Security', 'AI'],
    caseStudy: null,
    github: null,
    type: 'product',
  },
  {
    number: '02',
    title: 'AI Lifestyle System',
    category: 'AI / BACKEND / PRODUCT',
    description:
      'An AI-powered personal system combining structured user data, context, backend workflows and personalized AI interactions.',
    tags: ['AI', 'Python', 'FastAPI', 'PostgreSQL', 'Backend', 'AI Workflows'],
    caseStudy: null,
    github: null,
    type: 'product',
  },
  {
    number: '03',
    title: 'Win Forensics',
    category: 'SECURITY / DIGITAL FORENSICS',
    description:
      'A Windows-focused digital forensics toolkit for collecting and analyzing system artifacts.',
    tags: ['Python', 'Windows', 'Digital Forensics', 'Security Automation'],
    caseStudy: null,
    github: null,
    type: 'product',
  },
  {
    number: '04',
    title: 'TECHNICAL CONSULTING',
    category: 'TECHNICAL CONSULTING / CLIENT ENGINEERING',
    description:
      'Selected client engineering work across backend systems, automation, data extraction and deployment.',
    tags: ['Python', 'Redis', 'MySQL', 'Docker', 'CI/CD'],
    caseStudy: null,
    github: null,
    type: 'consulting',
    engagements: [
      {
        title: 'Social → Google Sheets',
        description:
          'Built backend automation that fetched Facebook post comments and wrote them directly into Google Sheets. Contributed to backend implementation and research, with future work around token automation and extending the workflow to other platforms.',
      },
      {
        title: 'Client Java Application',
        description:
          'Helped package a client\'s Java application with Docker to reduce environment conflicts and simplify local setup. Contributed to backend/technical research, Redis-related work and deployment workflows.',
      },
      {
        title: 'Telegram Data Pipeline',
        description:
          'Built backend data extraction flow in Python for collecting data from multiple Telegram groups and storing processed data in MySQL. Contributed to Docker and CI/CD workflows.',
      },
    ],
  },
];

export default projects;