import { AnimatedSection } from '../hooks/useScrollAnimation';

function Contact() {
    return (
        <>
            {/* Contact Section */}
            <section id="contact" className="py-24 lg:py-32 bg-white dark:bg-black text-gray-900 dark:text-white">
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <AnimatedSection animation="fadeInUp">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
                            For any questions please mail us:
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeInUp" delay={300}>
                        <a
                            href="mailto:trungnghia282003@gmail.com"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text hover:from-purple-500 hover:to-blue-500 transition-all duration-300 inline-block transform hover:scale-105 py-3"
                        >
                            trungnghia282003@gmail.com
                        </a>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}

export default Contact;
