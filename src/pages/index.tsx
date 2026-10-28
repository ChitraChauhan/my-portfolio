import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR to prevent hydration issues
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <Head>
        <title>Chitra Chauhan | Senior Full Stack Developer</title>
        <meta
          name="description"
          content="Chitra Chauhan - Senior Software Developer with 7+ years of experience in MEAN & MERN stacks, Angular, React, Next.js, Node.js, Express, NestJS, and MongoDB."
        />
        <meta name="keywords" content="Chitra Chauhan, Full Stack Developer, Senior Software Developer, Angular, React, Node.js, NestJS, MongoDB, MEAN stack, MERN stack" />
        <meta property="og:title" content="Chitra Chauhan | Senior Full Stack Developer" />
        <meta property="og:description" content="7+ years of experience delivering scalable enterprise & SaaS web solutions." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
