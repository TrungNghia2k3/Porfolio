import { HiRocketLaunch, HiEye, HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { AnimatedSection } from '../hooks/useScrollAnimation';
import data from '../constants/data.json';

const { projects } = data;

function Projects() {
    return (
        <section id="projects" className="py-24 lg:py-32 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <AnimatedSection animation="fadeInUp" className="text-center mb-20">
                    <div>
                        <AnimatedSection animation="scaleIn" delay={200}>
                            <div className="flex items-center justify-center mb-8">
                                <HiRocketLaunch className="w-12 h-12 lg:w-16 lg:h-16 text-blue-600 dark:text-blue-400 mr-4" />
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">Projects</h2>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animation="fadeInUp" delay={400}>
                            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
                                Things I've built so far
                            </p>
                        </AnimatedSection>
                    </div>
                </AnimatedSection>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12">
                    {projects.map((project, index) => (
                        <AnimatedSection
                            key={project.id}
                            animation="slideInUp"
                            delay={300 + (index * 200)}
                            className="flex flex-col bg-white dark:bg-black rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-200 dark:border-gray-800 group"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Content */}
                            <div className="flex flex-col flex-1 p-8 lg:p-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed font-light">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-8">
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                        Tech stack:
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-auto flex items-center justify-between pt-4">
                                    <a
                                        href={project.liveUrl}
                                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium text-lg"
                                    >
                                        <HiEye className="w-5 h-5 mr-2" />
                                        Live Preview
                                    </a>
                                    <a
                                        href={project.codeUrl}
                                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 font-medium text-lg"
                                    >
                                        <HiArrowTopRightOnSquare className="w-5 h-5 mr-2" />
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;