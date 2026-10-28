import { motion } from 'framer-motion';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function About() {
  return (
    <section id="about" className="pt-40 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

          {/* Left Column: Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <motion.h4
              variants={item}
              className="text-2xl md:text-3xl font-semibold text-slate-600 mb-2"
            >
              Hi, I'm
            </motion.h4>

            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Chitra Chauhan
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-blue-600 mb-6"
            >
              Senior Software Developer
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-slate-700 font-semibold mb-6"
            >
              Full Stack Developer | Angular, React, Node.js, Express.js, MongoDB | MEAN & MERN
            </motion.p>

            <motion.p
              variants={item}
              className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed"
            >
              I'm a Senior Software Developer with 7+ years of experience, passionate about building modern, scalable, and high-performance web applications. I enjoy transforming complex business requirements into intuitive digital experiences while writing clean, maintainable, and efficient code.
              <br /><br />
              On the frontend, I work with Angular, React, and Next.js to create responsive, user-centric applications. On the backend, I build secure and scalable APIs using Node.js, Express.js, and NestJS, with MongoDB as my preferred database for developing robust data-driven solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md text-sm md:text-base"
              >
                Get in Touch <span className="ml-2">→</span>
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-sm md:text-base"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 group">
              <img
                src="/images/my_photo.png"
                alt="Chitra Chauhan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>

        {/* Education & Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
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
        </motion.div>

      </div>
    </section>
  );
}
