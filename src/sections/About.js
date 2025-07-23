import { HiAcademicCap, HiCalendar } from 'react-icons/hi2';
import { AnimatedSection } from '../hooks/useScrollAnimation';
import data from '../constants/data.json';

function About() {
    const { aboutMe, education } = data;

    return (
        <section id="about" className="py-24 lg:py-32 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                {/* About Me Section */}
                <AnimatedSection animation="fadeInUp" className="mb-20">
                    <div>
                        <AnimatedSection animation="fadeInLeft" delay={200}>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-gray-800 dark:text-white">
                                About Me
                            </h2>
                        </AnimatedSection>
                        <AnimatedSection animation="fadeInRight" delay={400}>
                            <div className="max-w-5xl">
                                <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                                    {aboutMe.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </AnimatedSection>

                {/* Education Section */}
                <AnimatedSection animation="fadeInUp">
                    <div>
                        <AnimatedSection animation="fadeInLeft" delay={200}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-gray-800 dark:text-white">
                                Education
                            </h2>
                        </AnimatedSection>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <AnimatedSection 
                                    key={index} 
                                    animation="slideInUp" 
                                    delay={300 + (index * 200)}
                                    className="bg-white dark:bg-black p-8 lg:p-10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                        <div className="flex-1">
                                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-3">
                                                {edu.degree}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-6 text-lg text-gray-600 dark:text-gray-400">
                                                <span className="flex items-center gap-2">
                                                    <HiAcademicCap className="w-5 h-5" />
                                                    <a
                                                        href={edu.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="transition-colors duration-200 hover:text-blue-600
                                                        focus:outline-none"
                                                    >
                                                        {edu.institution}
                                                    </a>
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <HiCalendar className="w-5 h-5" />
                                                    {edu.duration}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

export default About;