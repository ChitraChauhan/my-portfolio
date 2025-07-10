import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Personal portfolio showcasing my work and skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
