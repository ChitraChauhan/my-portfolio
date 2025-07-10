import {motion} from 'framer-motion';
import {CodeBracketIcon, EyeIcon} from '@heroicons/react/24/outline';

// Animation variants
const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: {opacity: 0, y: 20},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const cardHover = {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
    }
};

const projects = [
    {
        id: 1,
        title: 'Movieranker',
        subTitle: 'Movieranker - a Perfect Social Hub for Movie Lovers.',
        description: 'MovieRanker is the world\'s best social movie platform. Discover new movies, theater movies, preview movies trailers, movie news and more that match your preferences, share or receive the best movie recommendations, or connect with other movie-lovers to discuss your favorite films.' +
            'Movie Ranker incorporates server-side rendering leveraging Angular Universal. ' +
            'Implemented additional features to enhance website performance, such as lazy loading and image lazy loading. ' +
            'Integrated Smartfeed to display personalized feeds from the open web.',
        role: 'Did maintanance - Managed lifecycle, ensured best practices',
        tags: ['Angular', 'Bootstrap'],
        demoUrl: 'https://www.movieranker.com/',
    },
    {
        id: 2,
        title: 'Altavod',
        subTitle: 'Altavod - An Ultimate Filmmaker\'s Toolkit to Engage Audiences and Monetize Content.',
        description: 'Altavod, is an extension of MovieRanker. It serves as a unique platform bridging filmmakers and their audiences. ' +
            'Enabling content marketing and monetization for filmmakers provides consumers a space to discover and support beloved films and creators.' +
            ' A versatile solution for individuals and companies in the film industry, ' +
            'Altavod’s implementation demanded the integration of NGXS with a facade structure.',
        role: 'Led frontend, optimized performance, Reduced load time',
        tags: ['Angular', 'Ngxs', 'Rxjs', 'Tailwindcss', 'Stripe'],
        demoUrl: 'https://www.altavod.com/',
    },
    {
        id: 3,
        title: ' OKR Steering',
        subTitle: 'OKR Steering: KPI Management made Easy for Businesses.',
        description: 'The OKR Steering gives you and your organization a decisive competitive advantage. It’s an integrated thinking and management framework that helps your teams implement topics quicker and more productively than ever before. With Next Level KPI Management and using OKRs as a steering mechanism, it helps to focus on things that have a real impact on the organization.',
        tags: ['Angular', 'Ngxs', 'Rxjs', 'Bootstrap', 'PrimeNg', 'Syncfusion', 'd3', 'Playwright'],
        role: 'Led frontend, optimized performance, Reduced load time',
        demoUrl: 'https://webosmotic.com/portfolio/okr-steering/',
    },
    {
        id: 4,
        title: 'Postgram',
        subTitle: 'Postgram: Instagram-like social media project',
        description: 'This is a mini Instagram-like social media project built entirely by me using React. It includes essential features such as email and OTP verification, searchable feed, real-time chat using sockets, followers/following management, and user profile editing. After signing in, users are directed to a home page with a navigation bar to explore different sections, create new posts, chat with previous contacts, and manage their connections.',
        tags: ['React', 'RTK Query', 'React Context API', 'Bootstrap', 'socket.io-client'],
        demoUrl: 'https://chitra-react-postgram.netlify.app',
    },

];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">My Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Here are the projects I've worked on.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            whileHover={cardHover}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                        >
                            <div
                                className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center relative overflow-hidden group">
                                <div
                                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <motion.a
                                        href={project.demoUrl}
                                        className="bg-white text-blue-600 p-2 rounded-full mx-1 transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.95}}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <EyeIcon className="h-5 w-5"/>
                                    </motion.a>
                                </div>
                                <span className="text-white text-lg font-medium">{project.title}</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                    {project.subTitle}
                                </h3>
                                <p className="text-slate-600 mb-4 flex-1">{project.description}</p>
                                {project.role && <p className="text-slate-600 mb-4 flex-1"><b>My Role: </b>{project.role}</p>}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <motion.span
                                            key={tag}
                                            initial={{opacity: 0, scale: 0.8}}
                                            whileInView={{opacity: 1, scale: 1}}
                                            viewport={{once: true}}
                                            transition={{duration: 0.3}}
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="flex justify-between pt-4 border-t border-slate-100">
                                    <motion.a
                                        href={project.demoUrl}
                                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                        whileHover={{x: 2}}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <EyeIcon className="h-4 w-4 mr-1"/>
                                        Live Demo
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
