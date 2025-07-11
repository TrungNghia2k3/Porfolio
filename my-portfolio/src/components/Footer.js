import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-white dark:bg-black text-sm text-gray-600 dark:text-gray-400">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Left - Logo */}
                <div className="text-left">
                    <p className="text-sm font-medium">Logo</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">{'{007}'}</p>
                    <p className="text-sm font-medium">trungnghia282003</p>
                </div>

                {/* Center - Contact Info */}
                <div className="text-center flex justify-between">
                    <p className="text-base text-gray-800 dark:text-white">+84 7993 53628</p>
                    <p className="text-base text-gray-800 dark:text-white">trungnghia282003@gmail.com</p>
                </div>

                {/* Right - Social Icons */}
                <div className="flex justify-center md:justify-end space-x-4">
                    <a href="https://github.com/TrungNghia2k3"><FaGithub className="w-5 h-5 hover:text-black dark:hover:text-white" /></a>
                    <a href="https://www.facebook.com/trungnghia282003"><FaFacebook className="w-5 h-5 hover:text-blue-500" /></a>
                    <a href="https://www.linkedin.com/in/nguyentrungnghia2003/"><FaLinkedin className="w-5 h-5 hover:text-blue-700" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
