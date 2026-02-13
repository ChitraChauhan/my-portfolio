import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-w-3 aspect-h-4 w-full">
                <div className="w-full h-96 bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-400">
                  <img src="/images/test.jpg" alt="My Photo"/>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-2/3"
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Who am I?</h3>
            <p className="text-slate-600 mb-4">
              I'm a Frontend Developer with 6 years of experience in the IT industry, specializing in building responsive, scalable, and user-friendly web applications. I have hands-on experience working with Angular and React in production environments, where I’ve contributed to high-impact projects, optimized performance, and implemented reusable UI components with a focus on clean architecture and user experience.
              I also have working knowledge of Vue.js, Next.js and React-Native, having built several personal projects to explore advanced features like SSR, routing, and state management. Additionally, I’m familiar with Node.js and Nest.js, which I've used in personal projects to build APIs and backend services, enhancing my full-stack development capabilities.
              I’m passionate about writing clean, maintainable code, staying up-to-date with the latest frontend technologies, and collaborating with cross-functional teams to deliver seamless user experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-800 mb-3">Education</h4>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h5 className="font-medium text-slate-900">Bachelor's of Engineering in Computer</h5>
                    <p className="text-slate-600 text-sm">SCET, 2013-2017</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-slate-800 mb-3">Experience</h4>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="mb-2.5">
                      <h5 className="font-medium text-slate-900">Senior Software Developer</h5>
                      <p className="text-slate-600 text-sm">Webosmotic Private Limited, 2019 - Present</p>
                    </div>

                    <div>
                      <h5 className="font-medium text-slate-900">Software Developer</h5>
                      <p className="text-slate-600 text-sm">Axelor Technologies India Pvt. Ltd. , 2017 - 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="#contact" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
