import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Senior Software Developer',
      company: 'Webosmotic Private Limited',
      period: '2019 – Present',
      location: 'Surat, India',
      type: 'Full-time',
      description:
        'Leading full-stack and frontend development of multiple client and enterprise SaaS applications across media, business management, and healthcare domains.',
      highlights: [
        'Architected and maintained high-traffic web applications including MovieRanker, Altavod, and OKR Steering using Angular (v2 to v13+), NGXS, and RxJS.',
        'Engineered SSR capabilities using Angular Universal and implemented performance optimizations like asset lazy-loading to dramatically reduce initial load times.',
        'Developed end-to-end SaaS platforms such as Coables with Node.js, Express, MongoDB, and React, including custom dynamic scheduling engines and multi-role JWT security.',
        'Championed clean code quality, architectural best practices, component reusability, and mentored engineering peers.',
      ],
      skills: ['Angular', 'React', 'Node.js', 'Express', 'NestJS', 'MongoDB', 'NGXS', 'RxJS', 'AWS', 'Tailwind CSS'],
    },
    {
      role: 'Software Developer',
      company: 'Axelor Technologies India Pvt. Ltd.',
      period: '2017 – 2019',
      location: 'Surat, India',
      type: 'Full-time',
      description:
        'Engineered enterprise web applications and open-source ERP modules, delivering robust backend business logic and interactive user interfaces for multi-sided platforms.',
      highlights: [
        'Served as a Java Developer for 9 months on an open-source ERP system, architecting modular business logic, enterprise workflows, and backend API services.',
        'Contributed as a React Developer to Goovee, an e-commerce platform, engineering responsive interfaces for both customer-facing storefront and supplier management portals.'],
      skills: ['Java', 'React', 'Google Guice', 'Hibernate', 'ERP Systems', 'RESTful APIs'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-3">Career Path</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A track record of delivering resilient, production-ready software solutions for enterprise clients and digital products.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="hidden sm:block absolute left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-slate-200 dark:to-slate-800" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col sm:flex-row items-start gap-6 group"
              >
                {/* Timeline Dot Icon */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-500 shadow-md text-blue-600 dark:text-blue-400 flex-shrink-0 z-10 group-hover:scale-110 transition-transform">
                  <BriefcaseIcon className="w-7 h-7" />
                </div>

                {/* Experience Card */}
                <div className="w-full card-surface p-6 sm:p-8 hover:shadow-card-hover-light dark:hover:shadow-card-hover-dark transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                        <CalendarIcon className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                        <MapPinIcon className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-2 mb-6">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-0.5 rounded-md font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
