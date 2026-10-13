import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faLaptopCode,
  faRoute,
  faShieldHalved,
  faCloud,
  faImage,
  faMapLocationDot,
  faLeaf,
  faMagnifyingGlassLocation,
  faLocationCrosshairs,
  faMagnifyingGlassChart,
  faRobot,
  faCode,
  faPlug,
} from '@fortawesome/free-solid-svg-icons';

const dev = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

// ═══════════════════════════════════════════════════════════
//  Skills grouped to match the resume.
//  Each skill uses either `image` (URL) or `icon` (FontAwesome).
// ═══════════════════════════════════════════════════════════
const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', image: dev('java') },
      { name: 'JavaScript', image: dev('javascript') },
      { name: 'Python', image: dev('python') },
      { name: 'C', image: dev('c') },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', image: dev('react') },
      { name: 'React Native', image: dev('react') },
      { name: 'React Router', icon: faRoute, color: 'text-red-400' },
      { name: 'Vite', image: dev('vitejs') },
      { name: 'HTML5', image: dev('html5') },
      { name: 'CSS3', image: dev('css3') },
      { name: 'Tailwind CSS', image: dev('tailwindcss') },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', image: dev('spring') },
      { name: 'Spring Security (JWT)', icon: faShieldHalved, color: 'text-green-400' },
      { name: 'Spring Data JPA / Hibernate', image: dev('hibernate') },
      { name: 'Node.js', image: dev('nodejs') },
      { name: 'Express.js', image: dev('express') },
      { name: 'RESTful APIs', icon: faPlug, color: 'text-orange-400' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', image: dev('mysql') },
      { name: 'MongoDB', image: dev('mongodb') },
    ],
  },
  {
    title: 'Maps & Geolocation',
    skills: [
      { name: 'Leaflet', icon: faLeaf, color: 'text-green-500' },
      { name: 'OpenStreetMap', icon: faMapLocationDot, color: 'text-lime-400' },
      { name: 'Nominatim (Geocoding)', icon: faMagnifyingGlassLocation, color: 'text-sky-400' },
      { name: 'OSRM (Routing)', icon: faRoute, color: 'text-amber-400' },
      { name: 'Browser Geolocation API', icon: faLocationCrosshairs, color: 'text-rose-400' },
    ],
  },
  {
    title: 'SEO & AEO',
    skills: [
      { name: 'Answer Engine Optimization', icon: faRobot, color: 'text-purple-400' },
      { name: 'Technical SEO', icon: faMagnifyingGlassChart, color: 'text-cyan-400' },
      { name: 'Schema Markup (JSON-LD)', icon: faCode, color: 'text-yellow-400' },
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'Git', image: dev('git') },
      { name: 'GitHub', image: dev('github'), invert: true },
      { name: 'VS Code', image: dev('vscode') },
      { name: 'Maven', image: dev('maven') },
      { name: 'Docker', image: dev('docker') },
      { name: 'Vercel', image: dev('vercel'), invert: true },
      { name: 'Render', icon: faCloud, color: 'text-teal-300' },
      { name: 'Netlify', image: dev('netlify') },
      { name: 'Aiven', icon: faDatabase, color: 'text-orange-300' },
      { name: 'Cloudinary', icon: faImage, color: 'text-blue-400' },
    ],
  },
];

const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#2C2C2C] hover:shadow-[0_0_15px_4px_rgba(255,165,0,0.3)] transition duration-300 group">
    {skill.icon ? (
      <FontAwesomeIcon
        icon={skill.icon}
        className={`text-4xl mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
      />
    ) : (
      <img
        src={skill.image}
        alt={skill.name}
        loading="lazy"
        className={`w-10 h-10 mb-2 object-contain group-hover:scale-110 transition-transform duration-300 ${
          skill.invert ? 'bg-white/90 rounded-full p-1' : ''
        }`}
      />
    )}
    <p className="text-sm font-semibold text-gray-300 group-hover:text-orange-400 text-center">
      {skill.name}
    </p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12 text-orange-600 text-center">
          <FontAwesomeIcon icon={faLaptopCode} className="text-amber-200" /> My Skills
        </h2>

        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg sm:text-xl font-bold text-amber-300 mb-5 pl-3 border-l-4 border-orange-500 text-left">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
