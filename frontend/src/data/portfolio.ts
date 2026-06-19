export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  badge: 'Work' | 'Capstone' | 'Personal';
  description: string;
  tech: string[];
  links: ProjectLink[];
}

export interface ExperienceBullet {
  text: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  tags: string[];
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Degree {
  school: string;
  degree: string;
  year: string;
}

export interface Training {
  title: string;
  org: string;
  period: string;
  tags: string[];
}

export const personal = {
  name: 'Ivan Uriel Sejismundo',
  location: 'Talisay City, Cebu, Philippines',
  email: 'sejismundouriel24@gmail.com',
  phone: '0967-204-5614',
  github: 'https://github.com/NaviLeiru',
  linkedin: 'https://www.linkedin.com/in/sejismundoivan-uriel-21650523a/',
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Paxie — RAG-Powered AI Chatbot',
    badge: 'Work',
    description:
      'Intelligent chatbot for N-PAX website providing instant, context-aware responses. Features Agentic RAG architecture with LangChain, vector-based retrieval via PGVector, and scalable cloud deployment on Azure VMs.',
    tech: ['ReactJS', 'TailwindCSS', 'C# .NET', 'Python', 'LangChain', 'PGVector', 'MS SQL', 'Azure'],
    links: [
      { label: 'Live ↗', url: 'https://ai.n-pax.com/login' },
      { label: 'Backend ↗', url: 'https://github.com/zsch4/Agentic-Rag-system' },
      { label: 'Frontend ↗', url: 'https://github.com/zsch4/Paxie-Frontend' },
    ],
  },
  {
    id: 2,
    title: 'G-Guide — Church Services Platform',
    badge: 'Capstone',
    description:
      'Web-based platform making Catholic Church services in Cebu more accessible — church mapping, service booking, appointment tracking, Visita Iglesia route planning, and volunteer coordination via geolocation.',
    tech: ['Full Stack', 'Geolocation', 'Web Mapping', 'Booking System'],
    links: [
      { label: 'GitHub ↗', url: 'https://github.com/AlixMarian/g-guide.git' },
      {
        label: 'Figma ↗',
        url: 'https://www.figma.com/design/iuhTZRlxK3qWevPBwhimTm/G--Guide?node-id=0-1',
      },
    ],
  },
  {
    id: 3,
    title: 'Momentum — Fitness Tracker',
    badge: 'Personal',
    description:
      'Full-stack fitness tracking app for workout progress, BMI calculation, and browsing exercises with images and instructions. Containerized with Docker Compose for consistent multi-service deployment.',
    tech: ['ASP.NET Core', 'React (Vite)', 'SQL Server', 'Docker Compose', 'Tailwind CSS'],
    links: [{ label: 'GitHub ↗', url: 'https://github.com/IvanNPAX/Momentum-react.git' }],
  },
  {
    id: 4,
    title: 'Fintech — Personal Finance Assistant',
    badge: 'Capstone',
    description:
      'Personal financial assistant with balance and transaction tracking, savings goal setting, and real-time financial data visualization to empower informed money decisions.',
    tech: ['Full Stack', 'Data Visualization', 'Real-time', 'Financial Analytics'],
    links: [
      { label: 'GitHub ↗', url: 'https://github.com/NajeBabs/fintech.git' },
      {
        label: 'Figma ↗',
        url: 'https://www.figma.com/design/c5SnsRRLSYiKqAKJXqAhTX/Finebank---Financial-Management-Dashboard-UI-Kits--Community-?node-id=443-2616',
      },
    ],
  },
  {
    id: 5,
    title: 'Task Application — Full Stack',
    badge: 'Personal',
    description:
      'Task management system with CRUD operations, authentication, and Docker containerization for consistent deployment. Responsive UI with Tailwind CSS, full REST API integration between React and ASP.NET Core.',
    tech: ['ASP.NET Core', 'ReactJS', 'Docker', 'Tailwind CSS', 'Auth'],
    links: [],
  },
  {
    id: 6,
    title: 'TestForge — QA Test Management Platform',
    badge: 'Personal',
    description:
      'Multi-tenant QA platform for organizing test suites, executing test runs, and tracking bug reports with full audit history. Includes Claude-powered AI test case generation, Jira sync, webhook delivery, and S3-backed attachments behind JWT/RBAC-secured Fastify APIs.',
    tech: ['Next.js', 'React', 'Fastify', 'PostgreSQL', 'Prisma', 'Claude AI', 'AWS S3', 'Docker'],
    links: [{ label: 'GitHub ↗', url: 'https://github.com/Npaxicsejismundo/testforge' }],
  },
  {
    id: 7,
    title: 'DinkDrip — Pickleball Paddle Customizer',
    badge: 'Personal',
    description:
      '3D pickleball paddle customizer — choose from paddle shapes, dial in edge tape and grip wrap colors, and preview your full build in real time before ordering. Built with React Three Fiber for live 3D rendering and Zustand for reactive state across the configurator.',
    tech: ['Expo', 'React Native', 'React Three Fiber', 'Three.js', 'Zustand', 'TypeScript'],
    links: [{ label: 'Live ↗', url: 'https://dinkdrip.vercel.app' }],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Angular', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Vite'],
  },
  {
    category: 'Backend',
    skills: ['C# ASP.NET Core', 'REST API', 'Entity Framework', 'Python', 'LangChain', 'RAG Architecture'],
  },
  {
    category: 'Database',
    skills: ['MSSQL Server', 'PostgreSQL', 'PGVector', 'Firebase', 'EF Core'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'Azure DevOps', 'Azure VM', 'Git', 'GitHub', 'VS Code'],
  },
  {
    category: 'Data & Analytics',
    skills: ['Power BI', 'Microsoft Excel', 'Pivot Tables', 'KPI Dashboards', 'Data Visualization'],
  },
  {
    category: 'Design & Management',
    skills: ['Figma', 'Canva', 'Notion', 'Miro', 'UI/UX Design', 'Agile / Scrum', 'Project Management'],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Junior Software Engineer',
    company: 'N-PAX Global IT Solutions',
    period: 'Jan 2026 — Present',
    tags: ['AI-Augmented Dev', 'Full Stack', 'Code Review', 'Architecture'],
    bullets: [
      'Practiced AI-augmented development workflows — integrating AI tools into code generation, debugging, test writing, and documentation while retaining full developer judgment over architecture and outcomes.',
      'Used AI assistance for code review and refactoring, identifying code smells and proposing cleaner implementations focused on SOLID principles and maintainability.',
      'Leveraged AI for context switching and onboarding — quickly understanding unfamiliar codebases, summarizing pull requests, and ramping up on new frameworks faster.',
      'Applied AI tools to support architecture and planning decisions, evaluating system design tradeoffs and generating data model proposals while exercising final technical judgment.',
      'Demonstrated the core AI-augmented mindset: directing AI to handle repetitive tasks while shifting personal focus toward higher-level judgment, review, and architectural outcomes.',
    ],
  },
  {
    id: 2,
    role: 'Junior Software Engineer Trainee',
    company: 'N-PAX Global IT Solutions',
    period: 'Aug 2025 — Jan 2026',
    tags: ['Frontend Dev', 'Full Stack Track', 'Project Management', 'Data Analysis', 'Angular'],
    bullets: [
      'Led planning and development of AI-driven chatbot Paxie — coordinated cross-functional teams, managed timelines, risks, and deployment.',
      'Collaborated within Agile teams on debugging, testing, and continuous improvement of application performance.',
      'Applied Power BI and Excel for data analysis, dashboard design, and KPI reporting.',
      'Completed intensive full-stack training: C#, ASP.NET Core, React, MSSQL, EF Core, Docker, Azure DevOps.',
      'Coordinated frontend, backend, and QA teams for seamless integration across all tracks.',
    ],
  },
  {
    id: 3,
    role: 'Intern — Junior Frontend Developer & Technical Documentation',
    company: 'Xpertis IT Solutions',
    period: 'Jan — May 2025',
    tags: ['React', 'Next.js', 'Figma', 'UI Components'],
    bullets: [
      'Designed and implemented UI components — modals, forms, structured layout sections.',
      'Developed interactive features: filtering, sorting, and dynamic input handling.',
      'Resolved UI bugs and improved design consistency across pages.',
      'Assigned to research and development of the OrderSnap application.',
      'Ensured smooth frontend-backend integration within Agile environment.',
    ],
  },
  {
    id: 4,
    role: "Secretary's Assistant",
    company: 'ICTO, Cebu City',
    period: '2022 — 2023',
    tags: [],
    bullets: [
      'Responded to inquiries and greeted visitors with professional assistance.',
      'Organized logistics and materials for meetings, took detailed notes for stakeholder dissemination.',
      'Performed industry research and data collection.',
    ],
  },
];

export const degrees: Degree[] = [
  {
    school: 'University of San Jose – Recoletos',
    degree: 'BS Information Technology',
    year: '2025',
  },
  {
    school: 'Cebu Institute of Technology',
    degree: 'STEM',
    year: '2019–2021',
  },
];

export const trainings: Training[] = [
  {
    title: 'Full Stack Developer Track',
    org: 'N-PAX Training',
    period: 'Aug–Dec 2025',
    tags: ['C# ASP.NET Core', 'React', 'MSSQL', 'EF Core', 'Docker', 'Azure DevOps', 'Agile'],
  },
  {
    title: 'Project Management',
    org: 'N-PAX Training',
    period: 'Aug–Dec 2025',
    tags: ['AI Chatbot PM', 'Risk Management', 'Stakeholder Comms', 'Cross-team Lead'],
  },
  {
    title: 'Data Analysis & BI / Angular',
    org: 'N-PAX Training',
    period: 'Aug–Dec 2025',
    tags: ['Power BI', 'Microsoft Excel', 'Angular', 'KPI Dashboards', 'Data Cleaning'],
  },
];
