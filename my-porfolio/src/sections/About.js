import { HiAcademicCap, HiCalendar } from 'react-icons/hi2';
import data from '../constants/data.json';

function About() {
    const { aboutMe, education } = data;

    return (
        <section id="about" className="py-24 lg:py-32 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                {/* About Me Section */}
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-gray-800 dark:text-white">
                        About Me
                    </h2>
                    <div className="max-w-5xl">
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                            {aboutMe.description}
                        </p>
                    </div>
                </div>

                {/* Work Experience Section */}
                {/* <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">
                        Work Experience
                    </h2>
                    <div className="space-y-6">
                        {workExperience.map((job, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <HiBriefcase className="w-4 h-4" />
                                                {job.company}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <HiMapPin className="w-4 h-4" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <HiCalendar className="w-4 h-4" />
                                                {job.duration}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-3 md:mt-0">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.typeColor}`}>
                                            {job.type}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Education Section */}
                <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-gray-800 dark:text-white">
                        Education
                    </h2>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-white dark:bg-black p-8 lg:p-10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-3">
                                            {edu.degree}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-6 text-lg text-gray-600 dark:text-gray-400">
                                            <span className="flex items-center gap-2">
                                                <HiAcademicCap className="w-5 h-5" />
                                                {edu.institution}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <HiCalendar className="w-5 h-5" />
                                                {edu.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;