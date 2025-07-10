import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'jQuery', level: 90 },
      { name: 'Angular', level: 90 },
      { name: 'Rxjs', level: 90 },
      { name: 'Ngxs', level: 90 },
      { name: 'React', level: 70 },
      { name: 'Redux', level: 70 },
      { name: 'Vue.js', level: 65 },
      { name: 'Next.js', level: 60 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 90 },
      { name: 'Bootstrap', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 70 },
      { name: 'Express', level: 70 },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MySQL', level: 70 },
      { name: 'Microsoft SQL Server', level: 60 },
    ],
  },
  {
    category: 'VCS & Code Hosting Platforms',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Jira', level: 90 },
      { name: 'GitLab', level: 90 },
      { name: 'GitHub', level: 85 },
      { name: 'BitBucket', level: 85 },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Communication', level: 85 },
      { name: 'Teamwork', level: 85 },
      { name: 'Problem solving', level: 85 },
      { name: 'Time Management', level: 85 },
      { name: 'Quick Learning', level: 85 },
      { name: 'Leadership', level: 80 },
    ],
  },
  {
    category: 'Language',
    items: [
      { name: 'English', level: 85 },
      { name: 'Gujarati', level: 85 },
      { name: 'Hindi', level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Here are the technologies I've been working with recently.
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
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-center text-slate-800 mb-6">
                {skillCategory.category}
              </h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
