import Image from 'next/image';
import {
  ArrowDownToLine,
  ArrowUpRight,
  Award,
  BrainCircuit,
  Cloud,
  CloudCog,
  CodeXml,
  Database,
  FileSearch,
  Mail,
  MapPin,
  PanelsTopLeft,
  Server,
  Sparkles,
  SquareTerminal,
  Workflow,
} from 'lucide-react';
import {
  CursorGlow,
  Navigation,
  Recommendations,
} from './portfolio-interactions';

const jobs = [
  {
    dates: 'MAR 2026 — PRESENT',
    role: 'Software Engineer',
    company: 'IGS Systemmanagement',
    location: 'Upper Austria, Austria',
    current: true,
    description:
      'Continuing my software engineering journey at IGS Systemmanagement GmbH & Co KG in Piberbach, Upper Austria.',
    tags: [],
  },
  {
    dates: 'OCT 2024 — SEP 2025',
    role: 'Senior Software Engineer',
    company: 'Moresand Technologies',
    location: 'Sri Lanka · Worldairfares',
    description:
      'Enhanced a major UK flight booking platform with a microservices-based .NET backend. Improved serialization and SQL performance, modernized legacy C#, and supported critical production incidents through on-call rotations.',
    tags: ['C#', '.NET 8', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    dates: 'APR 2023 — OCT 2024',
    role: 'Medior Backend Developer',
    company: 'Zero Friction',
    location: 'Remote · Belgium',
    description:
      'Built backend features for the ZeroFriction Heat platform and helped migrate its frontend from React to Blazor. Optimized APIs and microservices, developed Hangfire jobs, and mentored junior developers through code reviews and testing.',
    tags: ['.NET', 'Blazor', 'Azure', 'Cosmos DB', 'xUnit'],
  },
  {
    dates: 'JUN 2021 — APR 2023',
    role: 'Senior Software Engineer',
    company: 'Calcey',
    location: 'Sri Lanka · AiSCOUT',
    description:
      'Progressed from Software Engineer to Senior Software Engineer in January 2023. Built APIs for a football scouting platform using Clean Architecture, CQRS, and event-driven services. Led feature delivery, introduced infrastructure as code, and containerized workloads on AWS.',
    tags: ['.NET 7', 'AWS CDK', 'ECS Fargate', 'MassTransit', 'SQL Server'],
  },
  {
    dates: 'JUN 2020 — JUN 2021',
    role: 'Software Engineer',
    company: 'Ateam Software',
    location: 'Remote · Graycorp, Australia',
    description:
      'Developed a food-industry ERP application with 70+ dynamic screens. Built reusable frontend components and REST APIs, maintained desktop applications, and automated delivery with Azure DevOps.',
    tags: ['C#', 'Vue.js', 'Angular', 'WPF', 'Azure DevOps'],
  },
  {
    dates: 'OCT 2019 — MAY 2020',
    role: 'Software Engineer',
    company: 'DirectFN',
    location: 'Sri Lanka',
    description:
      'Developed dealer and admin terminals for an international securities trading platform. Delivered live trading enhancements, web components, and complex database reports in a Scrum team.',
    tags: ['C#', 'WPF', 'React', 'Oracle SQL'],
  },
  {
    dates: 'OCT 2018 — OCT 2019',
    role: 'Software Engineering Trainee',
    company: 'Colombo Dockyard',
    location: 'Sri Lanka',
    description:
      'Built enterprise modules and automated ERP workflows for shipbuilding and heavy engineering operations. Supported user acceptance testing and trained users on new software.',
    tags: ['.NET', 'Windows Forms', 'PL/SQL', 'DevExpress'],
  },
];
const stats = [{ value: '7+', label: 'years building production software' }];
const aiSkills = [
  {
    icon: FileSearch,
    title: 'Retrieval-augmented generation (RAG)',
    description:
      'Building knowledge assistants that answer from an organization’s own documents: chunking with overlap and metadata, embeddings, vector stores, and retrievers — then going further with query rewriting and re-ranking, and measuring retrieval quality with MRR, nDCG, and LLM-as-a-judge evals.',
    tags: [
      'Embeddings',
      'Chroma',
      'LangChain',
      'Sentence Transformers',
      'Query rewriting',
      'Re-ranking',
      'RAG evaluation',
    ],
  },
  {
    icon: Workflow,
    title: 'Agentic engineering',
    description:
      'Designing autonomous agents and multi-agent systems: tool calling, structured outputs, guardrails, handoffs, memory, and human-in-the-loop checkpoints — orchestrated in code or by an LLM planner, with tracing to inspect every step. Building and connecting MCP servers to give agents real capabilities.',
    tags: [
      'OpenAI Agents SDK',
      'LangGraph',
      'CrewAI',
      'MCP',
      'Multi-agent systems',
      'Guardrails',
      'Tracing',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'LLM engineering',
    description:
      'Choosing the right model for the job across frontier and open-source options — OpenAI, Claude, and Gemini APIs alongside Llama via Ollama and Hugging Face. Tokenizers, pipelines, quantization, multimodal apps, and fine-tuning from frontier models to QLoRA on open-source ones.',
    tags: [
      'OpenAI',
      'Claude',
      'Gemini',
      'Hugging Face Transformers',
      'Ollama',
      'QLoRA / PEFT',
      'Gradio',
    ],
  },
  {
    icon: CloudCog,
    title: 'AI in production',
    description:
      'Taking AI from notebook to production: FastAPI and Next.js apps with authentication, serverless deployment on AWS Lambda, Amazon Bedrock and SageMaker models, S3 Vectors for retrieval, Terraform infrastructure, GitHub Actions pipelines, and observability for agent workloads.',
    tags: [
      'Amazon Bedrock',
      'SageMaker',
      'AWS Lambda',
      'S3 Vectors',
      'Terraform',
      'GitHub Actions',
      'Modal',
    ],
  },
  {
    icon: SquareTerminal,
    title: 'AI tools & coding agents',
    description:
      'Working agentically every day: coding agents for exploring codebases, scaffolding, refactoring, and tests — extended with MCP servers, subagents, skills, and plugins. The goal is agentic engineering, not vibe coding: clear specs, small reviewable changes, and verification before anything ships.',
    tags: [
      'Claude Code',
      'Cursor',
      'GitHub Copilot',
      'OpenAI Codex',
      'MCP',
      'Subagents',
      'Skills',
    ],
  },
];
const toolkit = [
  {
    name: 'Backend',
    icon: Server,
    tags: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'EF Core',
      'Python',
      'FastAPI',
      'CQRS',
      'DDD',
    ],
  },
  {
    name: 'Frontend',
    icon: PanelsTopLeft,
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Blazor',
      'Vue.js',
      'Angular',
      'WPF',
    ],
  },
  {
    name: 'Cloud & delivery',
    icon: Cloud,
    tags: [
      'AWS',
      'Azure',
      'Docker',
      'Kubernetes',
      'AWS CDK',
      'Terraform',
      'CI/CD',
    ],
  },
  {
    name: 'Data & testing',
    icon: Database,
    tags: [
      'SQL Server',
      'PostgreSQL',
      'Cosmos DB',
      'Redis',
      'xUnit',
      'SpecFlow',
    ],
  },
];
function Heading({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="section-heading">
      <span>{n}</span>
      {children}
    </h2>
  );
}
function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
export default function Home() {
  return (
    <>
      <CursorGlow />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-wrap" id="top">
        <div className="portfolio-grid">
          <aside className="profile" aria-label="Introduction">
            <p className="location-pill">
              <MapPin aria-hidden="true" />
              Linz, Austria
            </p>
            <h1>
              Udara<span>De Silva</span>
            </h1>
            <p className="role">Software Engineer</p>
            <p className="intro">
              I build reliable software that makes complex things work simply.
            </p>
            <div className="portrait">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/portrait/udara-480.webp 480w, /images/portrait/udara-960.webp 960w, /images/portrait/udara-1440.webp 1440w, /images/portrait/udara-1920.webp 1920w"
                  sizes="(max-width: 528px) calc(140vw - 53.2px), (max-width: 760px) 672px, 493px"
                />
                <Image
                  src="/images/portrait/udara-960.webp"
                  width={960}
                  height={960}
                  alt="Udara Sandesha wearing glasses and a blue shirt"
                  loading="eager"
                  fetchPriority="high"
                  unoptimized
                />
              </picture>
              <span className="portrait-label">C# · .NET · Cloud · AI</span>
            </div>
            <Navigation />
            <div className="profile-bottom">
              <a
                className="social-link"
                href="https://github.com/UdaraSandesha"
                target="_blank"
                rel="noreferrer"
                aria-label="Udara on GitHub"
              >
                <CodeXml />
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/udarasandesha/"
                target="_blank"
                rel="noreferrer"
                aria-label="Udara on LinkedIn"
              >
                <span className="linkedin-mark" aria-hidden="true">
                  in
                </span>
              </a>
              <a
                className="social-link"
                href="mailto:udarasandesha@gmail.com"
                aria-label="Email Udara"
              >
                <Mail />
              </a>
              <a className="cv-link" href="/Udara-Sandesha-CV.pdf" download>
                Download CV
                <ArrowDownToLine aria-hidden="true" />
              </a>
            </div>
          </aside>
          <main id="main" className="main-content">
            <section id="about" className="content-section">
              <Heading n="01">About</Heading>
              <h2 className="about-title">
                Thoughtful engineering.
                <em>Real-world impact.</em>
              </h2>
              <p className="body-copy">
                I’m a software engineer based in <strong>Linz, Austria</strong>,
                with experience building applications across travel, energy,
                sports, finance, and enterprise operations.
              </p>
              <p className="body-copy">
                My core is <strong>C# and .NET</strong>, and I now work
                extensively with <strong>React and agentic engineering</strong>{' '}
                — from RAG pipelines and tool-using AI agents to coding-agent
                workflows that help me ship faster without cutting corners. My
                work spans scalable APIs, cloud infrastructure, and the
                interfaces people use every day. I care about maintainable code,
                dependable systems, and taking ownership from the first idea to
                production.
              </p>
              <p className="body-copy">
                Today, I’m a{' '}
                <strong>Software Engineer at IGS Systemmanagement</strong>,
                while pursuing a master’s at IT:U.
              </p>
              <dl className="stats">
                {stats.map((stat) => (
                  <div className="stat reveal" key={stat.label}>
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section id="experience" className="content-section">
              <Heading n="02">Experience</Heading>
              <div className="experience-list">
                {jobs.map((job) => (
                  <article className="job reveal" key={job.company}>
                    <div className="job-meta">
                      <span>{job.dates}</span>
                      {job.current && (
                        <span className="current-badge">Current</span>
                      )}
                    </div>
                    <h3>{job.role}</h3>
                    <p className="company">
                      {job.company}
                      <span className="job-location">{job.location}</span>
                    </p>
                    <p className="job-description">{job.description}</p>
                    <Tags tags={job.tags} />
                  </article>
                ))}
              </div>
              <a
                className="text-link"
                href="/Udara-Sandesha-CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View full résumé <ArrowUpRight aria-hidden="true" />
              </a>
            </section>
            <section id="skills" className="content-section">
              <Heading n="03">Skills & toolkit</Heading>
              <div className="ai-panel reveal">
                <div className="ai-panel-header">
                  <span className="ai-panel-icon">
                    <Sparkles aria-hidden="true" />
                  </span>
                  <div>
                    <h3>AI engineering</h3>
                    <p>RAG · Agents · LLMs · AI tools</p>
                  </div>
                </div>
                <p className="ai-panel-intro">
                  I build AI features with the same discipline as any
                  production system: grounded in real data, observable,
                  evaluated, and deployed on proper infrastructure.
                </p>
                <div className="ai-skill-list">
                  {aiSkills.map(({ icon: Icon, ...skill }) => (
                    <article className="ai-skill" key={skill.title}>
                      <span className="ai-skill-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <div>
                        <h4>{skill.title}</h4>
                        <p>{skill.description}</p>
                        <Tags tags={skill.tags} />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="toolkit-grid">
                {toolkit.map(({ icon: Icon, ...group }) => (
                  <div className="toolkit-card reveal" key={group.name}>
                    <h3>
                      <Icon aria-hidden="true" />
                      {group.name}
                    </h3>
                    <Tags tags={group.tags} />
                  </div>
                ))}
              </div>
            </section>
            <section id="education" className="content-section">
              <Heading n="04">Education</Heading>
              <article className="education reveal">
                <span className="job-meta">2025 — PRESENT</span>
                <h3>MSc in Interdisciplinary Computing</h3>
                <p>
                  Interdisciplinary Transformation University (IT:U)
                  <br />
                  Linz, Austria
                </p>
              </article>
              <article className="education reveal">
                <span className="job-meta">2016 — 2019</span>
                <h3>BSc in Computer Science</h3>
                <p>University of Colombo · Sri Lanka</p>
              </article>
              <article className="education reveal">
                <span className="job-meta">2015 — 2016</span>
                <h3>Diploma in Computer Systems Design</h3>
                <p>National Institute of Business Management · Sri Lanka</p>
              </article>
              <div className="certificates reveal">
                <Award aria-hidden="true" />
                <p>
                  AWS Certified Solutions Architect – Associate
                  <br />
                  Microsoft Certified: Azure Fundamentals (AZ-900)
                </p>
              </div>
            </section>
          </main>
        </div>
        <Recommendations />
        <section id="contact" className="contact">
          <div className="contact-panel reveal">
            <div>
              <p className="eyebrow">Let’s connect</p>
              <h2>
                Good work starts
                <em>with a conversation.</em>
              </h2>
              <p>
                Have an engineering challenge or an AI idea to explore?
                <br />
                I’d love to hear from you.
              </p>
            </div>
            <a className="contact-button" href="mailto:udarasandesha@gmail.com">
              Say hello <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
        </section>
        <footer>
          <span>© {new Date().getFullYear()} Udara Sandesha</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </>
  );
}
