export const SERVICES = [
  {
    id: 'srv-01',
    code: 'SRV_01',
    icon: 'layers',
    title: 'Full Stack Development',
    description: 'Complete application delivery bridging enterprise-grade backend infrastructure with responsive, type-safe frontend interfaces.',
    stacks: ['Laravel', 'PHP 8.x', 'React.js', 'TypeScript', 'Modern JS'],
  },
  {
    id: 'srv-02',
    code: 'SRV_02',
    icon: 'hub',
    title: 'Backend & API Development',
    description: 'Hardened RESTful services, low-latency API contracts, robust middleware layers, and resilient queue-driven background processing.',
    stacks: ['OAuth / JWT', 'Stripe / Gateways', 'RabbitMQ / Redis', 'REST APIs'],
  },
  {
    id: 'srv-03',
    code: 'SRV_03',
    icon: 'memory',
    title: 'AI Integration & Automation',
    description: 'Injecting computational intelligence directly into company workflows through OpenAI endpoints, automated scraping, and autonomous agent loops.',
    stacks: ['LLM Pipelines', 'Vector Search', 'Cron Jobs', 'Process Automation'],
  },
  {
    id: 'srv-04',
    code: 'SRV_04',
    icon: 'database',
    title: 'Database & Performance',
    description: 'Relational schema design, dead-lock prevention, query profile auditing, complex joins, and distributed in-memory cache topologies.',
    stacks: ['MySQL', 'Redis Cache', 'B-Tree Indexes', 'Query Tuner'],
  },
  {
    id: 'srv-05',
    code: 'SRV_05',
    icon: 'cloud_sync',
    title: 'Cloud & Deployment',
    description: 'Zero-downtime release pipelines, immutable container workflows, remote storage replication, and rock-solid Linux host management.',
    stacks: ['AWS EC2 & S3', 'Azure DevOps', 'GitHub Actions', 'Linux Crons'],
  },
  {
    id: 'srv-06',
    code: 'SRV_06',
    icon: 'storefront',
    title: 'E-Commerce Development',
    description: 'Scalable transactional systems, synchronous inventory reservation, dynamic multi-tier coupon rules, and multi-tenant storefront engines.',
    stacks: ['Cart Engine', 'Multi-Vendor', 'Order Pipelines', 'Discounts'],
  },
];

export const WORK_PROCESS = [
  {
    phase: 'PHASE 01',
    code: '01',
    tag: 'DISCOVERY',
    title: 'Discover',
    description: 'Understand the business requirement, user expectations, and critical constraints before writing a single line.',
    output: 'Key output: Architecture spec, target KPIs, stack selection.',
  },
  {
    phase: 'PHASE 02',
    code: '02',
    tag: 'BLUEPRINT',
    title: 'Plan',
    description: 'Define the system topology, database schemas, third-party service contracts, and development roadmap.',
    output: 'Key output: Relational ERD, OpenAPI schema, sprint schedule.',
  },
  {
    phase: 'PHASE 03',
    code: '03',
    tag: 'EXECUTION',
    title: 'Build',
    description: 'Develop scalable features with clean, maintainable, modular, and self-documenting code architecture.',
    output: 'Key output: Clean repositories, versioned commits, test stubs.',
  },
  {
    phase: 'PHASE 04',
    code: '04',
    tag: 'VERIFICATION',
    title: 'Test',
    description: 'Validate functionality, edge cases, vulnerability vectors, query efficiency, and cross-platform reliability.',
    output: 'Key output: Unit/Integration suites, load testing reports.',
  },
  {
    phase: 'PHASE 05',
    code: '05',
    tag: 'RELEASE',
    title: 'Deploy',
    description: 'Deploy the application using reliable staging gates, automated CI/CD runs, and cloud environment parameters.',
    output: 'Key output: Production deployment, SSL, CDN, container launch.',
  },
  {
    phase: 'PHASE 06',
    code: '06',
    tag: 'EVOLUTION',
    title: 'Improve',
    description: 'Monitor system health, analyze live telemetry, optimize slow queries, and continuously iterate product features.',
    output: 'Key output: Telemetry logs, optimization passes, scale patches.',
  },
];

export const FAQS = [
  {
    id: 'faq-1',
    question: 'How do we structure billing for freelance & contract roles?',
    answer: 'Billing is handled transparently either through hourly tracking ($12 – $25/hr via weekly invoice with detailed commit logs) or fixed milestone sprints based on agreed specifications. Upfront deposits are standard for new commercial relationships.',
  },
  {
    id: 'faq-2',
    question: 'Can you step into existing codebases with legacy debt?',
    answer: 'Yes. I specialize in rapid code audits, identifying performance bottlenecks, unindexed queries, broken dependencies, and refactoring chaotic Laravel or React repos into clean, modular architectures.',
  },
  {
    id: 'faq-3',
    question: 'What communication workflows do you support during active sprints?',
    answer: 'Direct integration into your Slack, Discord, or Microsoft Teams environment. Frequent asynchronous Loom updates, daily Git pushes, and scheduled bi-weekly sprint planning calls.',
  },
];
