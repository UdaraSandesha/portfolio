import Image from 'next/image';
import {
  ArrowDownToLine,
  ArrowUpRight,
  CodeXml,
  Mail,
  MapPin,
  Plane,
  Cloud,
  Layers3,
  Award,
} from 'lucide-react';
import { Navigation, Recommendations } from './portfolio-interactions';

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
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-wrap" id="top">
        <header className="topbar">
          <a href="#top" className="brand" aria-label="Udara Sandesha home">
            <span className="monogram">us.</span>
            <span>Personal portfolio</span>
          </a>
          <span className="location">
            <MapPin aria-hidden="true" />
            Linz, Austria
          </span>
        </header>
        <div className="portfolio-grid">
          <aside className="profile" aria-label="Introduction">
            <p className="eyebrow">Software & systems</p>
            <h1>
              Udara<span>Sandesha.</span>
            </h1>
            <p className="role">Software Engineer</p>
            <p className="intro">
              I build reliable software that makes complex things work simply.
            </p>
            <div className="portrait">
              <Image
                src="/images/udara-sandesha.jpg"
                width="1600"
                height="1600"
                alt="Udara Sandesha wearing glasses and a blue shirt"
                fetchPriority="high"
              />
              <span className="portrait-label">C# · .NET · Cloud</span>
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
                <span
                  className="font-bold text-xl leading-none"
                  aria-hidden="true"
                >
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
                <br />
                Real-world impact.
              </h2>
              <p className="body-copy">
                I’m a software engineer based in <strong>Linz, Austria</strong>,
                with experience building applications across travel, energy,
                sports, finance, and enterprise operations.
              </p>
              <p className="body-copy">
                My core is <strong>C# and .NET</strong>. My work spans scalable
                APIs, cloud infrastructure, and the interfaces people use every
                day. I care about maintainable code, dependable systems, and
                taking ownership from the first idea to production.
              </p>
              <p className="body-copy">
                Today, I’m a{' '}
                <strong>Software Engineer at IGS Systemmanagement</strong>,
                while pursuing a master’s at IT:U. Previously, I helped teams at
                Moresand, Zero Friction, and Calcey ship better software.
              </p>
              <p className="focus-note">
                From the architecture behind a feature to the production issue
                at 2 a.m. — I enjoy connecting the dots.
              </p>
              <div className="impact-grid">
                <div>
                  <strong>3M/day</strong>
                  <p>
                    Flight searches on
                    <br />a platform I helped build
                  </p>
                </div>
                <div>
                  <strong>15s → 7s</strong>
                  <p>
                    Average response time
                    <br />I helped improve
                  </p>
                </div>
                <div>
                  <strong>70+</strong>
                  <p>
                    Dynamic screens in
                    <br />
                    an enterprise ERP
                  </p>
                </div>
              </div>
            </section>
            <section id="experience" className="content-section">
              <Heading n="02">Experience</Heading>
              <div className="experience-list">
                {jobs.map((job) => (
                  <article className="job" key={job.company}>
                    <div className="job-meta">
                      <span>{job.dates}</span>
                      {job.current && (
                        <span className="current-badge">Current</span>
                      )}
                    </div>
                    <h3>{job.role}</h3>
                    <p className="company">
                      {job.company}
                      <span className="block mt-1 text-xs text-muted-foreground">
                        {job.location}
                      </span>
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
            <section id="work" className="content-section">
              <Heading n="03">Selected work</Heading>
              <article className="work-card">
                <div className="work-topline">
                  <Plane aria-hidden="true" />
                  <span>Moresand · Travel technology</span>
                </div>
                <h3>Faster flight search. At scale.</h3>
                <p>
                  Performance improvements to the Worldairfares backend, from
                  serialization to database queries, while maintaining the
                  reliability of a high-volume flight search platform.
                </p>
                <div className="work-outcome">
                  Contributed to reducing average response times from 15 to 7
                  seconds.
                </div>
              </article>
              <article className="work-card">
                <div className="work-topline">
                  <Cloud aria-hidden="true" />
                  <span>Calcey · Sports technology</span>
                </div>
                <h3>A cloud foundation for AiSCOUT.</h3>
                <p>
                  Event-driven APIs and background services for a football
                  talent scouting application. Containerized services on AWS and
                  introduced repeatable infrastructure with AWS CDK.
                </p>
                <div className="work-outcome">
                  Clean Architecture · Event-driven services · Infrastructure as
                  code
                </div>
              </article>
              <article className="work-card">
                <div className="work-topline">
                  <Layers3 aria-hidden="true" />
                  <span>Zero Friction · Energy technology</span>
                </div>
                <h3>Evolving a heat platform.</h3>
                <p>
                  Backend development, API improvements, and a React-to-Blazor
                  migration for ZeroFriction Heat, supported by automated tests
                  and background processing.
                </p>
                <div className="work-outcome">
                  API optimization · Frontend migration · Automated testing
                </div>
              </article>
              <a
                className="text-link"
                href="https://github.com/UdaraSandesha"
                target="_blank"
                rel="noreferrer"
              >
                Explore my code on GitHub <ArrowUpRight aria-hidden="true" />
              </a>
            </section>
            <section id="toolkit" className="content-section">
              <Heading n="04">Technical toolkit</Heading>
              {[
                {
                  name: 'Backend',
                  tags: [
                    'C#',
                    '.NET',
                    'ASP.NET Core',
                    'EF Core',
                    'CQRS',
                    'DDD',
                  ],
                },
                {
                  name: 'Frontend',
                  tags: ['Blazor', 'React', 'Vue.js', 'Angular', 'WPF'],
                },
                {
                  name: 'Cloud & delivery',
                  tags: [
                    'AWS',
                    'Azure',
                    'Docker',
                    'Kubernetes',
                    'AWS CDK',
                    'CI/CD',
                  ],
                },
                {
                  name: 'Data & testing',
                  tags: [
                    'SQL Server',
                    'PostgreSQL',
                    'Cosmos DB',
                    'Redis',
                    'xUnit',
                    'SpecFlow',
                  ],
                },
              ].map((group) => (
                <div className="skill-group" key={group.name}>
                  <h3>{group.name}</h3>
                  <Tags tags={group.tags} />
                </div>
              ))}
            </section>
            <section id="education" className="content-section">
              <Heading n="05">Education</Heading>
              <article className="education">
                <span className="job-meta">2025 — PRESENT</span>
                <h3>MSc in Interdisciplinary Computing</h3>
                <p>
                  Interdisciplinary Transformation University (IT:U)
                  <br />
                  Linz, Austria
                </p>
              </article>
              <article className="education">
                <span className="job-meta">2016 — 2019</span>
                <h3>BSc in Computer Science</h3>
                <p>University of Colombo · Sri Lanka</p>
              </article>
              <article className="education">
                <span className="job-meta">2015 — 2016</span>
                <h3>Diploma in Computer Systems Design</h3>
                <p>National Institute of Business Management · Sri Lanka</p>
              </article>
              <div className="certificates">
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
          <div>
            <p className="eyebrow">Let’s connect</p>
            <h2>
              Good work starts
              <br />
              with a conversation.
            </h2>
            <p>
              Have an engineering challenge or an idea to discuss?
              <br />
              I’d love to hear from you.
            </p>
          </div>
          <a className="contact-button" href="mailto:udarasandesha@gmail.com">
            Say hello <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </section>
        <footer>
          <span>© {new Date().getFullYear()} Udara Sandesha</span>
          <a href="mailto:udarasandesha@gmail.com">udarasandesha@gmail.com</a>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </>
  );
}
