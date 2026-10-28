import { motion } from 'framer-motion';
import {
  CodeBracketSquareIcon,
  ServerStackIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

export default function About() {
  const strengths = [
    'Modular, maintainable, and type-safe architecture (TypeScript, Angular, React)',
    'Scalable backend API design with Node.js, Express, and NestJS',
    'High-performance state management leveraging NGXS, RxJS, and RTK Query',
    'Complex schema design, aggregation pipelines, and query optimization with MongoDB',
    'Server-side rendering (SSR) and dynamic SEO optimization with Next.js & Angular Universal',
    'Effective cross-functional collaboration, agile leadership, and code reviews',
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-3">About Me</span>
          <h2 className="section-title">Background & Development Philosophy</h2>
          <p className="section-subtitle">
            A software engineer dedicated to building resilient full-stack systems, clean codebases, and intuitive digital experiences.
          </p>
        </motion.div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 card-surface p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <CommandLineIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Engineering with Craft & Reliability
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              <p>
                With over <strong className="font-semibold text-slate-900 dark:text-white">7+ years of professional experience</strong> in web engineering, I specialize in architecting and delivering full-stack web solutions from initial concept to high-scale production.
              </p>
              <p>
                My journey spans enterprise software, dynamic media hubs, SaaS management platforms, and collaborative tools. On the frontend, I build responsive, accessible, and reactive interfaces using <strong className="font-semibold text-slate-900 dark:text-white">Angular, React, and Next.js</strong>. On the backend, I engineer modular microservices and RESTful APIs using <strong className="font-semibold text-slate-900 dark:text-white">Node.js, Express.js, and NestJS</strong>, backed by optimized <strong className="font-semibold text-slate-900 dark:text-white">MongoDB</strong> database models.
              </p>
              <p>
                I prioritize sustainable engineering: writing clean, well-tested code, establishing clear separation of concerns, and creating seamless developer and user experiences.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                Core Engineering Strengths
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Side Column: Focus Pillars & Education */}
          <div className="lg:col-span-5 space-y-6">
            {/* Frontend Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-surface p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                  <CodeBracketSquareIcon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Frontend Architecture</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Specialized in Angular (v2 through modern releases) and React ecosystem. Expertise in NGXS, RxJS reactive pipelines, Redux/RTK Query, and Tailwind CSS.
              </p>
            </motion.div>

            {/* Backend Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-surface p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <ServerStackIcon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Backend & Databases</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Robust API ecosystems with Node.js, Express, and NestJS. Secure JWT authentication, WebSocket real-time communication, and production MongoDB data design.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-surface p-6 bg-gradient-to-br from-white via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                  <AcademicCapIcon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Education</h4>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Bachelor of Engineering in Computer Engineering
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Sarvajanik College of Engineering & Technology (SCET) • 2013 – 2017
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
