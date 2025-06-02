import React, { useEffect, useState } from 'react';
import me from '../assets/me.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { scroller } from 'react-scroll';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const titles = [
    "MERN Stack Development",
    "Competitive Programmer",
    "Frontend Development",
    "Passionate Problem Solver",
    "React Native Development",
    "Web Development"
  ];
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetween = 1500;

  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    if (!isDeleting && charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, erasingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => {}, delayBetween);
        } else {
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }, delayBetween);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, titleIndex, titles]);

  return (
    
    <section id="home" className="flex items-center justify-center h-screen px-4 -my-19">
      <div className="flex flex-col md:flex-row items-center mx-auto w-3/4 ">
      
        {/* Left Side */}
        <div className="flex flex-col w-full  md:w-1/2 space-y-2 mb-10">
          <h2 className="text-2xl font-bold text-gray-500">Hi, I'm</h2>
          <h1 className="text-lg sm:text-3xl font-bold text-gray-400">Ramesh Bandari</h1>
          <h1 className="text-xs sm:text-xl font-medium flex items-center">
            <span className="mr-2 font-bold ">I Am Into</span>
            <span className="bg-gradient-to-r from-[#8700ca] to-[#ad0048] bg-clip-text text-transparent font-bold">
              {text}
            </span>
            <span className="ml-1 animate-pulse">|</span>
          </h1>
          <button className="group relative inline-flex mt-5 items-center gap-2 px-6 py-3 rounded-xl border-2 border-orange-500 text-orange-500
             hover:bg-orange-500 hover:text-white
             shadow-md hover:shadow-[0_0_15px_4px_rgba(249,115,22,0.7)]
             transition-all duration-300 w-36" onClick={() => scroller.scrollTo('about', {smooth: true, duration: 500,})}>
              About Me <FontAwesomeIcon icon={faArrowDown} className="transform transition-transform duration-300 group-hover:translate-y-1" />
          </button>
          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <a
              href="https://github.com/RameshBandari26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 text-2xl hover:mt-[-10px] animate-float"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://instagram.com/mr_decenter_26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-700 text-2xl hover:mt-[-10px] animate-float"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com/in/ramesh-bandari-2649r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl hover:mt-[-10px] animate-float"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-40 h-40 md:w-70 md:h-70 bg-[#1b1b1b] rounded-full flex justify-center items-center mt-10 md:mt-0 md:ml-10">
          <img
            src={me}
            alt="Ramesh Bandari"
            className="w-50 h-50 md:w-80 md:h-80 rounded-full object-cover shadow-lg -mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
