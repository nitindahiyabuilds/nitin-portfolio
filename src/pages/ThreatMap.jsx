import React from 'react';
import { motion } from 'framer-motion';

const systemStages = [
  ['Target', 'Receives the target for assessment.'],
  ['Reconnaissance', 'Gathers initial security context.'],
  ['Security Scanners', 'Runs the configured security tools.'],
  ['Output Collection', 'Collects output from each tool.'],
  ['Normalization', 'Organizes findings into a common workflow.'],
  ['AI-Assisted Triage', 'Assists with finding interpretation and classification.'],
  ['Report Generation', 'Produces structured assessment reports.'],
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
    <main className="bg-[#f7f5f0] pt-14">
      <section className="px-6 py-20 border-b border-black/8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs text-[#7a7d85] mb-4">Security automation / Python</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#14161a] tracking-tight">ThreatMap</h1>
            <p className="mt-5 max-w-xl text-base text-[#454851] leading-relaxed">
              An open-source security assessment engine that orchestrates reconnaissance, scanning, AI-assisted triage and structured reporting.
            </p>
            <p className="mt-3 max-w-xl text-sm text-[#454851] leading-relaxed">
              Automates 90%+ of a manual security assessment workflow by orchestrating multiple security tools and consolidating their output into a repeatable Python-based system.
            </p>
            <p className="mt-6 text-xs text-[#7a7d85]">Open source</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-black/8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">The problem</h2>
            <p className="text-sm text-[#454851] leading-relaxed">
              Security assessments often require running multiple tools independently, interpreting different output formats and consolidating findings. ThreatMap makes that workflow a repeatable automated pipeline through tool orchestration, output normalization, parallel execution, finding triage and reporting.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">90%+ workflow automation</h2>
            <p className="text-sm text-[#454851] leading-relaxed">
              ThreatMap automates 90%+ of manual workflows involved in infrastructure security assessments, from initial recon through to structured report output.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-black/8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold text-[#14161a] mb-8">Assessment flow</h2>
          <div className="divide-y divide-black/8">
            {systemStages.map(([title, description], index) => (
              <div key={title} className="py-4 grid grid-cols-[140px_1fr] gap-4">
                <p className="text-xs text-[#7a7d85] pt-0.5">{String(index + 1).padStart(2, '0')}</p>
                <div>
                  <p className="text-sm font-medium text-[#14161a]">{title}</p>
                  <p className="text-sm text-[#454851] mt-0.5">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-black/8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">Tool orchestration</h2>
            <p className="text-sm text-[#454851] leading-relaxed mb-4">
              ThreatMap integrates multiple security tools into one repeatable workflow. The value is coordinating their specialized output, not simply using them individually.
            </p>
            <div className="space-y-2">
              {toolGroups.map(([category, tools]) => (
                <div key={category} className="flex gap-3 text-sm">
                  <span className="text-[#7a7d85] shrink-0 w-40">{category}</span>
                  <span className="text-[#454851]">{tools}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">Parallel execution</h2>
            <p className="text-sm text-[#454851] leading-relaxed">
              Independent scans execute concurrently. Running independent operations sequentially makes an assessment workflow slow - parallel execution allows tasks to progress simultaneously.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-b border-black/8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">AI-assisted triage</h2>
            <p className="text-sm text-[#454851] leading-relaxed">
              ThreatMap uses AI-assisted triage to help interpret and classify security findings after the scanning stage. Security tools discover findings; AI assists with triage and interpretation.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">Reporting</h2>
            <div className="space-y-2 text-sm">
              <div className="flex gap-3"><span className="text-[#7a7d85] w-12">HTML</span><span className="text-[#454851]">Human-readable assessment report</span></div>
              <div className="flex gap-3"><span className="text-[#7a7d85] w-12">Excel</span><span className="text-[#454851]">Structured findings for analysis and sharing</span></div>
              <div className="flex gap-3"><span className="text-[#7a7d85] w-12">JSON</span><span className="text-[#454851]">Machine-readable output for automation</span></div>
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
              Automation is often about orchestration rather than reinventing components. External tools need reliable integration boundaries, parallel execution changes how workflows should be designed, and findings need structured handling before they become useful reports.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#14161a] mb-3">Current status</h2>
            <p className="text-sm text-[#454851] leading-relaxed">Open-source security automation project.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThreatMap;
