function Hero() {
    return (
        <section id="hero" className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen flex items-center pt-24 lg:pt-28">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="block mb-2">Hi<span className="text-6xl lg:text-7xl">👋</span>,</span>
                            <span className="block mb-2 text-gray-700 dark:text-gray-300">My name is</span>
                            <span className="block bg-gradient-to-r from-sky-400 via-purple-500 to-purple-600 bg-clip-text text-transparent py-3">Nguyễn Trung Nghĩa</span>
                        </h1>
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                            I build things for web
                        </p>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="flex-shrink-0">
                        <div className="relative">
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
                            <div className="absolute -top-6 -right-6 w-10 h-10 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
                            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;