import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons
import MagicButton from "./MagicButton";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10 relative z-10" id="contact"> {/* Added z-10 here to ensure footer content is above */}
            
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>

            <div className="flex flex-col items-center z-20"> {/* Added z-20 here to raise the clickable elements */}
                <h1 className="heading lg:max-w-[45vw]">
                    <span className="text-white">Ready to take </span>
                    <span className="text-purple">your</span> 
                    <span className="text-white"> digital presence to the next level?</span>
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>
                <a href="mailto:smritin169@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            <div className="relative z-10 mt-16 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
                    © 2024 Smriti Naik. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0 flex space-x-4">
                    <a
                        href="https://github.com/smritinaik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/smritinaik15/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300"
                    >
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;