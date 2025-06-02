import React from "react";
import portfolio from "../assets/portfolio.webp";
import taskManager from "../assets/ToDo.webp";
import agritech from "../assets/agritech.webp";
import snakeGame from "../assets/snakeGame.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = () => {
  const projects = [
    {
      name: "Portfolio",
      desc: "My portfolio website built with React and Tailwind CSS, showcasing projects with clean design and smooth interactions.",
      image: portfolio,
      category: "react",
      techStack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Vite",
          icon: "https://vitejs.dev/logo.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
      ],
      links: {
        view: "https://rameshbandari.com",
        code: "https://github.com/yourusername/portfolio",
      },
    },

    {
      name: "Agritech",
      desc: "Agritech connects farmers and buyers, enabling secure trade, crop listing, contracts, payments, and seamless communication.",
      image: agritech,
      category: "webtechnologies",
      links: {
        view: "#",
        code: "https://github.com/RameshBandari26/Assured-Contract-Farming-System",
      },
      techStack: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "JSP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        // {
        //   name: "Java",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        // },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },
      ],
    },

    {
      name: "Snake Game",
      desc: "A fun and interactive Snake Game where players control the snake, eat food, and avoid collisions.",
      image: snakeGame,
      category: "javascript",
      links: {
        view: "https://snake-game-old-version-123.netlify.app/",
        code: "https://github.com/RameshBandari26/Snake-Game",
      },
      techStack: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
    },

    {
      name: "Task Manager",
      desc: "A simple To-Do List app to add, complete, and delete tasks, with persistent storage using browser LocalStorage across sessions.",
      image: taskManager,
      category: "mern",
      links: {
        view: "https://to-do-list-using-localstorage.netlify.app/",
        code: "https://github.com/RameshBandari26/LocalStorage-To-Do-List",
      },
      techStack: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "LocalStorage",
          icon: "https://img.icons8.com/fluency/48/database.png",
        },
      ],
    },
  ];

  return (
    <section className=" py-16" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-400 text-center mb-12">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="mr-2 text-amber-200"
          />
          My <span className="text-orange-400 font-extrabold"> Projects</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-[0_0_15px_6px_rgba(255,50,0,0.3)]  transition duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
                draggable="false"
              />

              <div className="p-6 flex flex-col ">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 flex-grow">{project.desc}</p>

                {/* Tech stack icons */}
                <div className="flex mt-4">
                  {project.techStack?.map((tech, i) => (
                    <img
                      key={i}
                      src={tech.icon}
                      alt={tech.name}
                      title={tech.name}
                      className="w-5 h-5 object-contain rounded-full"
                    />
                  ))}
                </div>

                <div className="mt-4 flex justify-between items-center gap-4 ">
                  <a
                    href={project.links.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center border-2 border-orange-400 px-4 py-1 gap-2
    text-orange-400 rounded-lg text-sm font-bold
    transition-all duration-300 ease-in-out
    hover:bg-orange-400 hover:text-white
    hover:scale-105 hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-orange-400
    active:scale-95 "
                  >
                    <FontAwesomeIcon icon={faEye} />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    flex items-center border-2 border-gray-400 px-6 py-1 gap-2
    text-gray-400 rounded-lg text-sm font-bold
    transition-all duration-300 ease-in-out
    hover:bg-amber-50 hover:text-black
    hover:scale-105 hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-amber-400
    active:scale-95
  "
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2 text-lg" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
