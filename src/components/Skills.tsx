import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CodeBracketIcon,
  ServerIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  CloudIcon,
  LanguageIcon,
} from '@heroicons/react/24/outline';

interface SkillCategory {
  category: string;
  id: string;
  icon: any;
  description: string;
  items: string[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Engineering',
      id: 'frontend',
      icon: CodeBracketIcon,
      description: 'Building responsive, reactive, and modular client interfaces with modern frameworks and state architectures.',
      items: [
        'JavaScript',
        'TypeScript',
        'Angular',
        'React',
        'Next.js',
        'RxJS',
        'NGXS',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Bootstrap',
      ],
    },
    {
      category: 'Backend Architecture',
      id: 'backend',
      icon: ServerIcon,
      description: 'Designing performant REST APIs, microservices, and asynchronous event-driven server architectures.',
      items: [
        'Java',
        'Node.js',
        'Express',
        'Nest.js',
        'RESTful APIs',
        'JWT Auth',
        'Socket.io',
      ],
    },
    {
      category: 'Databases & Storage',
      id: 'database',
      icon: CircleStackIcon,
      description: 'Optimizing schema design, indexes, aggregations, and high-throughput data operations.',
      items: [
        'MongoDB',
        'Mongoose',
        'Database Optimization',
        'Data Modeling',
        'Aggregation Pipelines',
      ],
    },
    {
      category: 'Cloud & Deployment',
      id: 'cloud',
      icon: CloudIcon,
      description: 'Deploying, managing, and automating cloud infrastructure for web applications.',
      items: [
        'AWS',
        'Vercel',
        'Netlify',
        'Render',
        'CI/CD Pipelines',
      ],
    },
    {
      category: 'Tools & Version Control',
      id: 'tools',
      icon: WrenchScrewdriverIcon,
      description: 'Proficiency in developer workflows, agile collaboration, and source control platforms.',
      items: [
        'Git',
        'GitHub',
        'GitLab',
        'BitBucket',
        'Jira',
        'Postman',
      ],
    },
    {
      category: 'Leadership & Soft Skills',
      id: 'softskills',
      icon: UserGroupIcon,
      description: 'Team leadership, cross-functional communication, and collaborative execution.',
      items: [
        'Technical Leadership',
        'Problem Solving',
        'Agile / Scrum',
        'Code Reviews',
        'Mentorship',
        'Time Management',
      ],
    },
    {
      category: 'Languages',
      id: 'languages',
      icon: LanguageIcon,
      description: 'Multilingual communication for international and cross-regional engineering teams.',
      items: [
        'English (Professional)',
        'Gujarati (Native)',
        'Hindi (Fluent)',
      ],
    },
  ];

  const filterTabs = [
    { label: 'All Domains', id: 'all' },
    { label: 'Frontend', id: 'frontend' },
    { label: 'Backend', id: 'backend' },
    { label: 'Databases', id: 'database' },
    { label: 'Cloud & Tools', id: 'cloud-tools' },
  ];

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'frontend') return cat.id === 'frontend';
    if (activeTab === 'backend') return cat.id === 'backend';
    if (activeTab === 'database') return cat.id === 'database';
    if (activeTab === 'cloud-tools') return cat.id === 'cloud' || cat.id === 'tools';
    return true;
  });

  return (
    <section id="skills" className="py-20 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-badge mb-3">Technical Repertoire</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of the frameworks, languages, databases, and development tools I work with daily.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-750'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCategories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.category}
                  className="card-surface p-6 sm:p-7 flex flex-col justify-between hover:shadow-card-hover-light dark:hover:shadow-card-hover-dark transition-all duration-300 group"
                >
                  <div>
                    {/* Card Header with Icon */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {cat.category}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
