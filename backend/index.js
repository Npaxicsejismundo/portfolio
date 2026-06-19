const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3002;

app.use(cors({ origin: 'http://localhost:5174' }));
app.use(express.json());

const projects = [
  {
    id: 1,
    title: 'Paxie — RAG-Powered AI Chatbot',
    badge: 'Work',
    description:
      'Intelligent chatbot for N-PAX website providing instant, context-aware responses. Features Agentic RAG architecture with LangChain, vector-based retrieval via PGVector, and scalable cloud deployment on Azure VMs.',
    tech: ['ReactJS', 'TailwindCSS', 'C# .NET', 'Python', 'LangChain', 'PGVector', 'MS SQL', 'Azure'],
    links: [
      { label: 'Live', url: 'https://ai.n-pax.com/login' },
      { label: 'Backend', url: 'https://github.com/zsch4/Agentic-Rag-system' },
      { label: 'Frontend', url: 'https://github.com/zsch4/Paxie-Frontend' },
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
      { label: 'GitHub', url: 'https://github.com/AlixMarian/g-guide.git' },
      {
        label: 'Figma',
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
    links: [{ label: 'GitHub', url: 'https://github.com/IvanNPAX/Momentum-react.git' }],
  },
  {
    id: 4,
    title: 'Fintech — Personal Finance Assistant',
    badge: 'Capstone',
    description:
      'Personal financial assistant with balance and transaction tracking, savings goal setting, and real-time financial data visualization to empower informed money decisions.',
    tech: ['Full Stack', 'Data Visualization', 'Real-time', 'Financial Analytics'],
    links: [
      { label: 'GitHub', url: 'https://github.com/NajeBabs/fintech.git' },
      {
        label: 'Figma',
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
    links: [{ label: 'GitHub', url: 'https://github.com/Npaxicsejismundo/testforge' }],
  },
];

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/projects', (_req, res) => {
  res.json(projects);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }
  console.log(`[Contact] From: ${name} <${email}>`);
  console.log(`[Contact] Message: ${message}`);
  res.json({ success: true, message: 'Message received! I will get back to you soon.' });
});

app.listen(PORT, () => {
  console.log(`Portfolio API running at http://localhost:${PORT}`);
});
