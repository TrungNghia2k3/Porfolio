import { AnimatedSection } from '../hooks/useScrollAnimation';
import data from '../constants/data.json';
const { technologies } = data;

function TechStack() {

    return (
        <section id="tech-stack" className="py-24 lg:py-32 bg-white dark:bg-black text-gray-900 dark:text-white">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                <AnimatedSection animation="fadeInUp" className="text-center mb-16">
                    <div>
                        <AnimatedSection animation="fadeInDown" delay={200}>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-800 dark:text-white">
                                My Tech Stack
                            </h2>
                        </AnimatedSection>
                        <AnimatedSection animation="fadeInUp" delay={400}>
                            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
                                Technologies I've been working with recently
                            </p>
                        </AnimatedSection>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-12 max-w-6xl mx-auto">
                    {technologies.map((tech, index) => (
                        <AnimatedSection 
                            key={index} 
                            animation="scaleIn" 
                            delay={300 + (index * 100)}
                            className="flex flex-col items-center p-8 lg:p-10 rounded-2xl bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group hover:shadow-lg"
                        >
                            <div className="w-20 h-20 lg:w-24 lg:h-24 mb-6 flex items-center justify-center">
                                <img 
                                    src={tech.icon} 
                                    alt={tech.name}
                                    className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 text-center">
                                {tech.name}
                            </h3>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStack;