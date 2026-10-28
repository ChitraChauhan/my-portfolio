import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  SparklesIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

interface IProject {
  id: number;
  category: 'company' | 'personal';
  title: string;
  subTitle: string;
  description: string;
  role?: string;
  tags: string[];
  demoUrl?: string;
  FERepo?: string;
  BERepo?: string;
}

const allProjects: IProject[] = [
  // Company Projects
  {
    id: 1,
    category: 'company',
    title: 'Movieranker',
    subTitle: 'Social Movie Hub & Discovery Platform',
    description:
      "World's leading social movie platform enabling users to discover movies, preview trailers, receive personalized recommendations, and connect with film enthusiasts. Built with server-side rendering using Angular Universal, custom image lazy-loading, and Smartfeed integration.",
    role: 'Maintenance Lead • Architecture Lifecycle',
    tags: ['Angular Universal', 'Bootstrap', 'SSR', 'Smartfeed API', 'Lazy Loading'],
    demoUrl: 'https://webosmotic.com/portfolio/movieranker/',
  },
  {
    id: 2,
    category: 'company',
    title: 'Altavod',
    subTitle: 'Filmmaker Content Monetization Platform',
    description:
      'A digital ecosystem bridging independent filmmakers and global audiences. Empowers filmmakers with direct content marketing and monetization tools, implemented with NGXS facade pattern architecture and responsive design.',
    role: 'Frontend Lead • State Architecture',
    tags: ['Angular 11', 'NGXS', 'RxJS', 'Tailwind CSS', 'Stripe'],
    demoUrl: 'https://webosmotic.com/portfolio/altavod/',
  },
  {
    id: 3,
    category: 'company',
    title: 'OKR Steering',
    subTitle: 'Enterprise KPI & Goal Management SaaS',
    description:
      'Integrated management and steering platform empowering organizations to implement objectives faster with high clarity. Features data visualizations, custom KPI tracking dashboards, and robust end-to-end testing.',
    role: 'Frontend Lead • UI Architecture',
    tags: ['Angular 13', 'NGXS', 'RxJS', 'PrimeNG', 'Syncfusion', 'D3.js', 'Playwright'],
    demoUrl: 'https://webosmotic.com/portfolio/okr-steering/',
  },
  {
    id: 4,
    category: 'company',
    title: 'Coables',
    subTitle: 'Online Pediatric Therapy SaaS Ecosystem',
    description:
      'Modular, scalable SaaS platform with secure JWT multi-role authorization. Features a custom slot-generation appointment engine for dynamic therapist scheduling, and RESTful APIs powering web and mobile clients.',
    role: 'Full Stack Lead • Web & Mobile Architecture',
    tags: ['Node.js', 'React.js', 'React Native', 'MongoDB', 'AWS', 'RESTful API'],
    demoUrl: 'https://webosmotic.com/portfolio/coables/',
  },

  // Personal Projects
  {
    id: 5,
    category: 'personal',
    title: 'StoryForge',
    subTitle: 'Cloud-Native AI Collaborative Storytelling Platform',
    description:
      'Multi-chapter interactive story editor with collaborative sharing and AI co-writing capabilities. Features background export queue workers dynamically scaling AWS EC2 instances for PDF generation, storing in S3 and notifying via AWS SES/SNS.',
    role: 'Creator & Architect',
    tags: ['React 19', 'NestJS', 'MongoDB', 'AWS EC2/S3/SES', 'OpenAI API', 'MUI'],
    FERepo: 'https://github.com/ChitraChauhan/StoryForge-NextGen-FE',
    BERepo: 'https://github.com/ChitraChauhan/StoryForge-NextGen-BE',
  },
  {
    id: 6,
    category: 'personal',
    title: 'Postgram - Web App',
    subTitle: 'Real-Time Social Media Platform',
    description:
      'Full-featured social platform with email OTP verification, searchable real-time feed, live WebSocket chat, followers/following management, comments, and profile customization.',
    role: 'Full Stack Creator',
    tags: ['React', 'RTK Query', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    FERepo: 'https://github.com/ChitraChauhan/React-Postgram',
    BERepo: 'https://github.com/ChitraChauhan/React-Postgram-Backend',
  },
  {
    id: 7,
    category: 'personal',
    title: 'Postgram - Mobile App',
    subTitle: 'Cross-Platform Social Networking App',
    description:
      'Cross-platform mobile application companion featuring interactive feed, real-time messaging using sockets, profile management, and a clean Nest.js backend architecture.',
    role: 'Mobile & Backend Developer',
    tags: ['React Native', 'Socket.io', 'NestJS', 'MongoDB'],
    FERepo: 'https://github.com/ChitraChauhan/ReactNative-Postgram/',
    BERepo: 'https://github.com/ChitraChauhan/Nest-Postgram',
  },
  {
    id: 8,
    category: 'personal',
    title: 'MEANKart',
    subTitle: 'Full-Featured E-Commerce Application',
    description:
      'Modern e-commerce platform with dynamic product catalog, multi-criteria filters, cart management, order history tracking, and seamless Razorpay payment gateway integration.',
    role: 'Full Stack Creator',
    tags: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'Tailwind CSS'],
    FERepo: 'https://github.com/ChitraChauhan/MeanKart',
    BERepo: 'https://github.com/ChitraChauhan/MeanKart-BE',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'company' | 'personal'>('all');

  const filteredProjects = allProjects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-badge mb-3">Portfolio Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A curated selection of enterprise client platforms, scalable SaaS products, and full-stack personal engineering projects.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${filter === 'all'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-750'
              }`}
          >
            All Projects ({allProjects.length})
          </button>
          <button
            onClick={() => setFilter('company')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${filter === 'company'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-750'
              }`}
          >
            Enterprise & Client ({allProjects.filter((p) => p.category === 'company').length})
          </button>
          <button
            onClick={() => setFilter('personal')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${filter === 'personal'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-750'
              }`}
          >
            Personal & SaaS ({allProjects.filter((p) => p.category === 'personal').length})
          </button>
        </div>

        {/* Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card-surface flex flex-col justify-between overflow-hidden hover:shadow-card-hover-light dark:hover:shadow-card-hover-dark transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Card Window Mockup Header */}
                  <div className="bg-slate-100/80 dark:bg-slate-800/80 px-4 py-3 border-b border-slate-200/70 dark:border-slate-750 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-slate-500 dark:text-slate-400">
                      {project.category === 'company' ? 'Enterprise' : 'Full Stack'}
                    </span>
                  </div>

                  <div className="p-6">
                    {/* Title and Subtitle */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                        {project.subTitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-4">
                      {project.description}
                    </p>

                    {/* Role badge if available */}
                    {project.role && (
                      <div className="mb-4 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50/80 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border border-blue-100/80 dark:border-blue-900/40">
                        <SparklesIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span className="leading-snug">
                          <strong className="font-semibold text-slate-800 dark:text-slate-100">Role:</strong> {project.role}
                        </span>
                      </div>
                    )}

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer with Links */}
                <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-850/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 text-xs font-semibold">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <div className="flex items-center gap-3 ml-auto">
                    {project.FERepo && (
                      <a
                        href={project.FERepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <CodeBracketIcon className="w-3.5 h-3.5" />
                        <span>FE Code</span>
                      </a>
                    )}
                    {project.BERepo && (
                      <a
                        href={project.BERepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <CodeBracketIcon className="w-3.5 h-3.5" />
                        <span>BE Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
