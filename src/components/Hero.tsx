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

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-block px-4 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
              Welcome to my portfolio
            </span>
          </motion.div>
          
          {["Hi, I'm", "Chitra Chauhan", "Senior Software Developer"].map((text, i) => (
            <motion.h4
              key={i} 
              variants={item}
              className="text-2xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              {text}
            </motion.h4>
          ))}
          
          <motion.p 
            variants={item}
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Frontend Developer | Problem Solver | Tech Enthusiast
          </motion.p>
          
          <motion.div
            variants={item}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
            >
              Contact Me
            </Link>
            <Link
              href="#projects"
              className="px-8 py-3 border border-slate-300 text-slate-700 bg-white rounded-lg font-medium hover:bg-slate-50 transition-colors text-center"
            >
              View Projects
            </Link>
          </motion.div>
          
          <motion.div
            variants={item}
            className="mt-12 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <span className="text-slate-400">
                  <img src="/images/test.jpg" alt="My Photo"/>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
