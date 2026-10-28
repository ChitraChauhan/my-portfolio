import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const coreStack = [
    { name: 'Angular', color: 'from-red-500/10 to-red-500/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800/40' },
    { name: 'React & Next.js', color: 'from-cyan-500/10 to-blue-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/40' },
    { name: 'Node.js & Express', color: 'from-emerald-500/10 to-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40' },
    { name: 'NestJS', color: 'from-pink-500/10 to-rose-500/20 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800/40' },
    { name: 'MongoDB', color: 'from-green-500/10 to-emerald-500/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800/40' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-400/15 via-indigo-400/10 to-transparent dark:from-blue-600/10 dark:via-purple-600/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & CTAs */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status pill */}
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Senior Full Stack Developer • 7+ Years Experience
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6"
            >
              Building Scalable, High-Performance{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">
                Web Applications.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl"
            >
              Hi, I&apos;m <strong className="font-semibold text-slate-900 dark:text-white">Chitra Chauhan</strong>. I specialize in transforming complex product visions into intuitive, secure, and production-grade software using the <strong className="font-semibold text-slate-900 dark:text-white">MEAN & MERN stacks</strong>.
            </motion.p>

            {/* Core Tech Stack Badges */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mr-1">
                Core Stack:
              </span>
              {coreStack.map((tech) => (
                <span
                  key={tech.name}
                  className={`text-xs font-medium px-2.5 py-1 rounded-md border bg-gradient-to-r ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base group"
              >
                View Featured Projects
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm transition-all duration-200 text-sm sm:text-base"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-6 sm:gap-10 pt-10 mt-10 border-t border-slate-200 dark:border-slate-800 w-full"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">7+</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">8+</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">Key Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Full-Stack</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">MEAN & MERN</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px]">
              {/* Outer Glow & Gradient Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-purple-600/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/images/my_photo.png"
                    alt="Chitra Chauhan - Senior Software Developer"
                    width={400}
                    height={500}
                    priority
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Developer Info Overlay Badge */}
                <div className="p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">Chitra Chauhan</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Senior Software Developer</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                      <SparklesIcon className="w-3.5 h-3.5" />
                      <span>Full Stack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
