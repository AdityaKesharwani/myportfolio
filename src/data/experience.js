export const EXPERIENCES = [
  {
    id: 'POS_01',
    company: 'Kragos Technologies',
    role: 'Software Developer',
    location: 'Pune, Maharashtra',
    period: '06/2026 – Present',
    active: true,
    scope: 'Developing and maintaining ERP and CRM systems using PHP, Laravel, React.js, and TypeScript for international clients. Handling full enterprise development cycles with modern microservices and AWS cloud infrastructure.',
    tags: ['Laravel', 'PHP', 'React.js', 'TypeScript', 'AWS EC2/S3', 'CI/CD DevOps', 'AI Workflows'],
    deliverables: [
      {
        icon: 'hub',
        title: 'ERP & CRM Systems',
        description: 'Architected and scaled core functional modules for cross-border enterprise clients ensuring multi-tenant segregation.',
      },
      {
        icon: 'smartphone',
        title: 'RESTful APIs for Mobile',
        description: 'Built performant, documented REST endpoints in Laravel to service companion iOS and Android native apps.',
      },
      {
        icon: 'psychology',
        title: 'AI-Driven Automation',
        description: 'Integrated intelligent automation into internal workflows, cutting processing latencies and repetitive operations.',
      },
      {
        icon: 'deployed_code',
        title: 'Cloud CI/CD & AWS',
        description: 'Configured zero-downtime deployment pipelines in GitHub and Azure DevOps; orchestrated AWS EC2 and S3 storage.',
      },
    ],
  },
  {
    id: 'POS_02',
    company: 'Valethi Technologies',
    role: 'Software Developer',
    location: 'Nagpur, Maharashtra',
    period: '10/2022 – 06/2026',
    active: false,
    scope: 'Developed scalable backend systems using PHP, Laravel, and MySQL for rigorous production environments. Maintained authentication protocols, payment infrastructures, and enterprise integrations.',
    gains: [
      { label: 'Manual Effort:', val: '-40% Reduction' },
      { label: 'Production Defects:', val: '-30% Reduced' },
      { label: 'Backend Latency:', val: '+30% Speedup' },
    ],
    deliverablesList: [
      'Designed robust RESTful APIs with seamless integrations for payment gateways, SMS gateways, and transactional email systems, reducing manual effort by ~40%.',
      'Hardened application security through role-based access control (RBAC), CSRF protection, comprehensive input validation sanitization, and strict session isolation.',
      'Engineered asynchronous queues and background workers for heavy report generation, automated digests, and high-frequency alerting triggers.',
      'Optimized complex MySQL joins and composite indexes, cutting database roundtrips and driving 25–30% page load gains; authored PHPUnit test suites.',
    ],
  },
  {
    id: 'POS_03',
    company: 'White Force',
    role: 'Laravel Developer',
    location: 'Jabalpur, Madhya Pradesh',
    period: '07/2021 – 10/2022',
    active: false,
    scope: 'Worked on Laravel-based HR and recruitment solutions with a focus on automation and workflow optimization. Connected recruitment platforms directly with 16+ external candidate sources.',
    contributions: [
      {
        tag: 'PAYROLL PIPELINE',
        desc: 'Engineered automated payroll calculation modules in Laravel/MySQL, cutting payroll discrepancies by 40%.',
      },
      {
        tag: '16+ PORTAL SYNC',
        desc: 'Integrated real-time feeds with LinkedIn, Facebook, and Naukri, driving a 30% recruitment pipeline velocity surge.',
      },
      {
        tag: 'RESUME GENERATOR',
        desc: 'Architected an interactive dynamic resume builder enabling candidate customization and real-time PDF rendering.',
      },
    ],
  },
  {
    id: 'POS_04',
    company: 'Seven Eye IT Solutions',
    role: 'PHP Developer Intern',
    location: 'Jabalpur, Madhya Pradesh',
    period: '01/2021 – 07/2021',
    active: false,
    scope: 'Completed hands-on software development and engineering training in Core PHP, Object-Oriented Programming (OOP), and full client-server interactions.',
    foundations: [
      { icon: 'terminal', text: 'Built dynamic web applications adhering strictly to OOP principles in Core PHP.' },
      { icon: 'javascript', text: 'Enhanced frontend user interactions and form validations utilizing JavaScript and jQuery.' },
      { icon: 'devices', text: 'Developed responsive UI components prioritizing client device adaptability.' },
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'MCA — Master of Computer Applications',
    status: 'COMPLETED 07/2021',
    isPrimary: true,
    specialization: 'Information Technology',
    institution: 'Gyan Ganga College of Technology, Jabalpur, Madhya Pradesh',
  },
  {
    degree: 'BCA — Bachelor of Computer Application',
    status: 'COMPLETED 06/2019',
    isPrimary: false,
    specialization: 'Information Technology',
    institution: 'Jabalpur College of Computer Communication, Jabalpur, Madhya Pradesh',
  },
];

export const CERTIFICATIONS = [
  {
    badge: 'GA',
    title: 'Google Analytics Certification',
    issuer: 'Great Learning Academy',
    url: 'https://www.mygreatlearning.com/certificate/RJGBGORN?referrer_code=GLDLCT80MAT8G',
  },
  {
    badge: 'SQL',
    title: 'SQL (Advanced)',
    issuer: 'HackerRank Assessment',
    url: 'https://www.hackerrank.com/certificates/0861041e30c9',
  },
  {
    badge: 'SQL',
    title: 'SQL (Basic)',
    issuer: 'HackerRank Assessment',
    url: 'https://www.hackerrank.com/certificates/0e53d199e8cb',
  },
  {
    badge: 'JS',
    title: 'Node.js Fundamentals',
    issuer: 'Scaler Academy',
    url: null,
  },
];

export const ENGINEERING_PROTOCOL = [
  {
    step: '01',
    title: 'Understand Problem',
    desc: 'Deconstruct client requirements, analyze domain workflows, and identify system constraints.',
    progress: '1/6',
  },
  {
    step: '02',
    title: 'Design Solution',
    desc: 'Map relational entity schemas, API endpoints, flow diagrams, and edge cases prior to coding.',
    progress: '2/6',
  },
  {
    step: '03',
    title: 'Build Architecture',
    desc: 'Establish modular micro-services, background queue workers, and authorization boundaries.',
    progress: '3/6',
  },
  {
    step: '04',
    title: 'Develop Product',
    desc: 'Implement clean, typed application code with Laravel and modern React frameworks with strict conventions.',
    progress: '4/6',
  },
  {
    step: '05',
    title: 'Test & Optimize',
    desc: 'Execute PHPUnit suites, optimize query indexes, audit security policies, and measure response times.',
    progress: '5/6',
  },
  {
    step: '06',
    title: 'Deploy & Maintain',
    desc: 'Automate deployment via GitHub/Azure pipelines, monitor cloud instances, and patch continuously.',
    progress: '6/6',
  },
];
