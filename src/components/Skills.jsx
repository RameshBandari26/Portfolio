import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faPython,
  faJava,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faCogs,
  faBrain,
  faLaptopCode,
  faTerminal,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons';

const skills = [
  // Frontend
  { name: 'HTML5', icon: faHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: faCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: faJs, color: 'text-yellow-400' },
  { name: 'ReactJS', icon: faReact, color: 'text-cyan-400' },
  { name: 'React Native', icon: faReact, color: 'text-blue-400' },
  {
  name: 'Tailwind CSS',
  image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
},
{
  name: 'Bootstrap',
  image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
},


  // Backend & DevOps
  { name: 'Node.js', image: "https://img.icons8.com/color/48/000000/nodejs.png", },
  { name: 'MySQL', image: "https://img.icons8.com/color/48/000000/mysql-logo.png" },
  {
  name: 'Express.js',
  image: "https://img.icons8.com/fluency/48/000000/node-js.png",
},
{
        name: "MongoDB",
        image: "https://img.icons8.com/color/48/000000/mongodb.png"
    },

  { name: 'DevOps', icon: faTerminal, color: 'text-orange-400' },

  // Languages
  { name: 'Python', icon: faPython, color: 'text-yellow-300' },
  { name: 'Java', icon: faJava, color: 'text-red-500' },
  {
  name: 'C Programming',
  image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
},

  { name: 'LaTeX', icon: faFileCode, color: 'text-indigo-400' },

  // Concepts
  { name: 'DSA', icon: faLaptopCode, color: 'text-lime-400' },
  { name: 'OOPs', icon: faCogs, color: 'text-yellow-500' },
  { name: 'Machine Learning', icon: faBrain, color: 'text-purple-400' },

  // Tools
  { name: 'Git', icon: faGitAlt, color: 'text-red-500' },
  { name: 'GitHub', icon: faGithub, color: 'text-white' },
  {
        name: "Netlify",
        image: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
    },
  { name: 'npm', icon: faNpm, color: 'text-red-600' },
  { name: 'VS Code', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
];

const Skills = () => {
  return (
    <section id="skills" className=" py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-10 text-orange-600"><FontAwesomeIcon icon={faLaptopCode} className='text-amber-200 '/> My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
  <div
    key={skill.name}
    className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#2C2C2C] hover:shadow-[0_0_15px_4px_rgba(255,165,0,0.3)] transition duration-300 group"
  >
    {skill.icon ? (
      <FontAwesomeIcon
        icon={skill.icon}
        className={`text-4xl mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
      />
    ) : (
      <img
        src={skill.image}
        alt={skill.name}
        className="w-10 h-10 mb-2 object-contain group-hover:scale-110 transition-transform duration-300"
      />
    )}
    <p className="text-sm font-semibold text-gray-300 group-hover:text-orange-400 text-center">{skill.name}</p>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
