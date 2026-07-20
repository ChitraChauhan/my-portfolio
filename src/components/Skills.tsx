import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      'JavaScript',
      'TypeScript',
      'Angular',
      'Rxjs',
      'Ngxs',
      'React',
      'Vue.js',
      'Next.js',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      'Node.js',
      'Express',
      'Nest.js',
    ],
  },
  {
    category: 'Database',
    icon: '💾',
    items: [
      'MongoDB',
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '💻',
    items: [
      'Git',
      'Jira',
      'GitLab',
      'GitHub',
      'BitBucket',
    ],
  },
  {
    category: 'Soft Skills',
    icon: '🤝',
    items: [
      'Communication',
      'Teamwork',
      'Problem solving',
      'Time Management',
      'Quick Learning',
      'Leadership',
    ],
  },
  {
    category: 'Cloud & Deployment',
    icon: '🚀',
    items: [
      'Vercel',
      'Netlify',
      'AWS',
      'Render',
    ],
  },
  {
    category: 'Language',
    icon: '🌐',
    items: [
      'English',
      'Gujarati',
      'Hindi',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Tech Stack Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive experience across modern web technologies and tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start text-left"
            >
              <div className="text-3xl mb-4 select-none">{skillCategory.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-5">
                {skillCategory.category}
              </h3>
              <ul className="space-y-3.5">
                {skillCategory.items.map((item) => (
                  <li key={item} className="flex items-start text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 mt-2 flex-shrink-0 select-none" />
                    <span className="text-base font-normal leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

