import React from 'react';
import { motion } from 'framer-motion';

const systemStages = [
  ['01', 'Target', 'Receives the target for assessment.'],
  ['02', 'Reconnaissance', 'Gathers initial security context.'],
  ['03', 'Security Scanners', 'Runs the configured security tools.'],
  ['04', 'Output Collection', 'Collects output from each tool.'],
  ['05', 'Normalization', 'Organizes findings into a common workflow.'],
  ['06', 'AI-Assisted Triage', 'Assists with finding interpretation and classification.'],
  ['07', 'Report Generation', 'Produces structured assessment reports.'],
];

const toolGroups = [
  ['Reconnaissance', 'Subfinder'],
  ['Network / service discovery', 'Nmap'],
  ['Web security scanning', 'Nuclei, Nikto, Gobuster'],
  ['SSL/TLS', 'SSLScan'],
];

const decisions = [
  {
    title: 'Orchestrate existing security tools instead of rebuilding scanners',
    description: 'Mature security tools already solve specialized problems, so the engineering focus is combining them into a coherent workflow.',
  },
  {
    title: 'Run independent scans concurrently',
    description: 'Independent operations do not always need to block one another, so scans can progress concurrently.',
  },
  {
    title: 'Separate discovery from triage',
    description: 'Scanning tools discover technical findings while AI-assisted triage helps interpret and classify them.',
  },
  {
    title: 'Support multiple report formats',
    description: 'Different consumers need different representations of the same assessment results.',
  },
];

const stackGroups = [
  ['Language', 'Python'],
  ['Environment', 'Linux'],
  ['Security Tools', 'Nmap, Nuclei, Nikto, Gobuster, Subfinder, SSLScan'],
  ['Engineering', 'CLI, Parallel Execution, Security Automation'],
  ['AI', 'AI-Assisted Triage'],
  ['Reporting', 'HTML, Excel, JSON'],
  ['Workflow', 'Git, GitHub'],
];

const ThreatMap = () => {
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
              SECURITY AUTOMATION / PYTHON
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-[-0.07em] uppercase">
              ThreatMap
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              An open-source security assessment engine that orchestrates reconnaissance, scanning, AI-assisted triage and structured reporting.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
              ThreatMap automates security assessment workflows by orchestrating multiple security tools and consolidating their output into a repeatable Python-based system.
            </p>
            <p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-[#b9f2d4]">
              OPEN SOURCE
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <article className="border border-white/10 bg-[#0f141a] p-6 md:p-8">
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[01]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">The problem</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Security assessments often require running multiple tools independently, interpreting different output formats and consolidating findings. ThreatMap explores how that workflow can become a repeatable automated pipeline through tool orchestration, output normalization, parallel execution, finding triage and reporting.
            </p>
          </article>
          <article className="border border-white/10 bg-[#0f141a] p-6 md:p-8">
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[09]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">90%+ workflow automation</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">Current resume claim: ThreatMap automates 90%+ of the manual workflow involved in infrastructure security assessments.</p>
          </article>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">02 / THE SYSTEM</p>
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-[-0.06em] uppercase">Assessment flow</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 border border-white/10">
            {systemStages.map(([number, title, description], index) => (
              <div key={title} className="relative border-b sm:border-r lg:border-b-0 border-white/10 p-5 lg:[&:nth-child(7n)]:border-r-0">
                <span className="text-[10px] text-[#b9f2d4] font-mono">{number}</span>
                <p className="mt-4 text-sm uppercase tracking-[0.12em] text-white">{title}</p>
                <p className="mt-3 text-xs leading-relaxed text-white/55">{description}</p>
                {index < systemStages.length - 1 && <span className="absolute right-3 top-1/2 hidden lg:block text-[#b9f2d4]">↓</span>}
              </div>
            ))}
          </div>
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
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[03]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">Tool orchestration</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">ThreatMap integrates multiple security tools into one repeatable workflow. The value is not simply using these tools individually, but coordinating their specialized output.</p>
            <div className="mt-6 border-t border-white/10 pt-4 space-y-4">
              {toolGroups.map(([category, tools]) => (
                <div key={category}>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#b9f2d4]">{category}</p>
                  <p className="mt-1 text-sm text-white/70">{tools}</p>
                </div>
              ))}
            </div>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="border border-white/10 bg-[#0f141a] p-6"
          >
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[04]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">Parallel execution</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">Independent scans can be executed concurrently. Running independent operations sequentially can make an assessment workflow unnecessarily slow, while parallel execution allows independent tasks to progress concurrently.</p>
            <div className="mt-6 border-t border-white/10 pt-4 font-mono text-xs uppercase tracking-[0.12em] text-white/60">
              <p>Target</p>
              <p className="mt-3">├── Nmap</p>
              <p>├── Nuclei</p>
              <p>├── Nikto</p>
              <p>├── Gobuster</p>
              <p>├── Subfinder</p>
              <p>└── SSLScan</p>
              <p className="my-3 text-[#b9f2d4]">↓</p>
              <p>Collected Results</p>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <article className="border border-white/10 bg-[#0f141a] p-6">
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[05]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">AI-assisted triage</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">ThreatMap uses AI-assisted triage to help interpret and classify security findings after the scanning stage.</p>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-4 text-sm text-white/65">
              <p><span className="text-[#b9f2d4]">Security tools:</span> discover findings</p>
              <p><span className="text-[#b9f2d4]">Application:</span> collects and organizes findings</p>
              <p><span className="text-[#b9f2d4]">AI:</span> assists with triage and interpretation</p>
              <p><span className="text-[#b9f2d4]">Reports:</span> present structured results</p>
            </div>
          </article>
          <article className="border border-white/10 bg-[#0f141a] p-6">
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[06]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">Output normalization</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">Different security tools produce different output formats. ThreatMap consolidates results into a common workflow before reporting, making findings easier to consume and producing consistent reports.</p>
          </article>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <article className="border border-white/10 bg-[#0f141a] p-6">
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[07]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">Reporting</h2>
            <div className="mt-6 space-y-4 border-t border-white/10 pt-4">
              <p className="text-sm"><span className="text-[#b9f2d4]">HTML:</span> <span className="text-white/65">Human-readable assessment report</span></p>
              <p className="text-sm"><span className="text-[#b9f2d4]">Excel:</span> <span className="text-white/65">Structured findings suitable for analysis and sharing</span></p>
              <p className="text-sm"><span className="text-[#b9f2d4]">JSON:</span> <span className="text-white/65">Machine-readable output for automation and integration</span></p>
            </div>
          </article>
          <article className="border border-white/10 bg-[#0f141a] p-6">
            <p className="text-[#b9f2d4] font-mono text-xs tracking-widest">[08]</p>
            <h2 className="mt-5 text-white text-2xl md:text-3xl font-black tracking-[-0.06em] uppercase">CLI / engineering design</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">ThreatMap is designed as a Python-based security automation tool rather than a simple collection of scripts. Its command-line workflow brings together orchestration, external process execution, structured outputs and reusable automation.</p>
          </article>
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
            <h2 className="text-white text-4xl md:text-5xl font-black tracking-[-0.06em] uppercase">Orchestration matters</h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70">Automation is often about orchestration rather than reinventing components. External tools need reliable integration boundaries, parallel execution changes how workflows should be designed, and findings need structured handling before they become useful reports. AI can be an interpretation layer without owning the entire security workflow, while CLI tools can become powerful engineering systems when their workflows are designed carefully.</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">12 / CURRENT STATUS</p>
            <p className="text-white text-lg leading-relaxed">ThreatMap is an open-source security automation project.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">13 / WHAT I WOULD BUILD NEXT</p>
            <ul className="space-y-3 text-sm leading-relaxed text-white/70">
              <li>Expand tool integrations</li>
              <li>Improve finding normalization</li>
              <li>Improve AI-assisted triage</li>
              <li>Add stronger automated testing</li>
              <li>Improve reporting workflows</li>
              <li>Improve documentation</li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">14 / TECH STACK</p>
            <div className="border-t border-white/10">
              {stackGroups.map(([category, technologies]) => (
                <div key={category} className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-3 border-b border-white/10 py-4">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#b9f2d4]">{category}</p>
                  <p className="text-sm leading-relaxed text-white/70">{technologies}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThreatMap;