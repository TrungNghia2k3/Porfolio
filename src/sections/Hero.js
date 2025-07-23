import { AnimatedSection } from '../hooks/useScrollAnimation';
import { HiCodeBracket, HiCommandLine, HiCpuChip, HiGlobeAlt, HiLightBulb, HiRocketLaunch } from 'react-icons/hi2';

function Hero() {
    return (
        <section id="hero" className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen flex items-center pt-24 lg:pt-28">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Content */}
                    <AnimatedSection animation="fadeInLeft" delay={200}>
                        <div className="flex-1 text-center lg:text-left max-w-2xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                <AnimatedSection animation="fadeInUp" delay={300}>
                                    <span className="block mb-2">Hi<span className="text-6xl lg:text-7xl">👋</span>,</span>
                                </AnimatedSection>
                                <AnimatedSection animation="fadeInUp" delay={500}>
                                    <span className="block mb-2 text-gray-700 dark:text-gray-300">My name is</span>
                                </AnimatedSection>
                                <AnimatedSection animation="fadeInUp" delay={700}>
                                    <span className="block bg-gradient-to-r from-sky-400 via-purple-500 to-purple-600 bg-clip-text text-transparent py-3">Nguyễn Trung Nghĩa</span>
                                </AnimatedSection>
                            </h1>
                            <AnimatedSection animation="fadeInUp" delay={900}>
                                <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                                    I build things for web
                                </p>
                            </AnimatedSection>
                        </div>
                    </AnimatedSection>

                    {/* Right Content - Profile Image */}
                    <AnimatedSection animation="fadeInRight" delay={400}>
                        <div className="flex-shrink-0">
                            <div className="relative">
                                {/* Decorative Elements Above Avatar */}
                                <AnimatedSection animation="scaleIn" delay={800}>
                                    <div className="absolute -top-16 left-8 text-blue-400 animate-pulse">
                                        <HiCodeBracket className="w-6 h-6 drop-shadow-lg" />
                                    </div>
                                </AnimatedSection>
                                <AnimatedSection animation="scaleIn" delay={1000}>
                                    <div className="absolute -top-12 right-12 text-purple-400 float-animation">
                                        <HiCommandLine className="w-5 h-5 drop-shadow-lg" />
                                    </div>
                                </AnimatedSection>
                                <AnimatedSection animation="scaleIn" delay={600}>
                                    <div className="absolute -top-20 right-4 text-pink-400 animate-bounce">
                                        <HiCpuChip className="w-7 h-7 drop-shadow-lg" />
                                    </div>
                                </AnimatedSection>
                                
                                {/* Gradient Border */}
                                <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-1.5">
                                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                                        {/* Profile Image Placeholder */}
                                        <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                                            <img
                                                src="avatar.jpg"
                                                alt="Profile"
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <AnimatedSection animation="scaleIn" delay={1200}>
                                    <div className="absolute -top-6 -right-6 text-yellow-500 animate-bounce">
                                        <HiLightBulb className="w-10 h-10 drop-shadow-lg" />
                                    </div>
                                </AnimatedSection>
                                <AnimatedSection animation="scaleIn" delay={1400}>
                                    <div className="absolute -bottom-6 -left-6 text-green-400 animate-pulse">
                                        <HiRocketLaunch className="w-8 h-8 drop-shadow-lg" />
                                    </div>
                                </AnimatedSection>
                                <AnimatedSection animation="scaleIn" delay={1600}>
                                    <div className="absolute -bottom-4 -right-8 text-blue-500 float-animation">
                                        <HiGlobeAlt className="w-6 h-6 drop-shadow-lg" />
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

export default Hero;