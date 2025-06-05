import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleRight,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faTelegramPlane
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="  px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Box 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Ramesh's Portfolio</h3>
          <p className="text-sm text-gray-400">
            Thank you for visiting my personal portfolio website. Connect with me over socials. <br /><br />
          </p>
        </div>

        {/* Box 2 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            {['home', 'skills', 'about', 'projects', 'contact me'].map(link => (
              <li key={link}>
                <a href={`#${link}`} className="hover:text-orange-500 transition">
                  <FontAwesomeIcon icon={faChevronCircleRight} className="mr-2 text-orange-500" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          {/* <p className="text-sm text-gray-400 mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-orange-500" />
            +91 XXX-XXX-XXXX
          </p> */}
          <p className="text-sm text-gray-400 mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-orange-500" />
            rameshbandari926@gmail.com
          </p>
          <p className="text-sm text-gray-400 mb-4">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2 text-orange-500" />
            Hyderabad, Telangana - 500081
          </p>
          <div className="flex gap-4 text-xl">
            <a href="https://www.linkedin.com/in/ramesh-bandari-2649r" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="hover:text-orange-500" />
            </a>
            <a href="https://github.com/RameshBandari26" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="hover:text-orange-500" />
            </a>
            <a href="mailto:rameshbandari926@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} className="hover:text-orange-500" />
            </a>
            {/* <a href="https://twitter.com/jigar_sable" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className="hover:text-orange-500" />
            </a> */}
            {/* <a href="https://t.me/lifecode5" target="_blank" rel="noreferrer" aria-label="Telegram">
              <FontAwesomeIcon icon={faTelegramPlane} className="hover:text-orange-500" />
            </a> */}
          </div>
        </div>
      </div>

      {/* Credit Section */}
      <h1 className="mt-10 text-center text-sm text-gray-500">
        Designed with <FontAwesomeIcon icon={faHeart} className="text-red-500 animate-pulse" /> by{" "}
        <a href="#" className="text-orange-500 hover:underline" target="_blank" rel="noreferrer">
          Ramesh
        </a>
      </h1>

    </footer>
  );
};

export default Footer;
