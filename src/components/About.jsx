import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import me from '../assets/me.webp'

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl text-blue-400 mb-4 font-extrabold"><FontAwesomeIcon icon={faUserLarge} className='text-2xl text-amber-200 mb-1 '/> About <span className='text-orange-600 font-extrabold'>Me</span></h2>
       <div className="flex flex-col md:flex-row w-full justify-center items-center p-4 mt-10">
  {/* Image container */}
  <div className="w-32 h-32 md:w-64 md:h-64 bg-[#1b1b1b] rounded-tl-full rounded-tr-full flex justify-center items-center mt-6 md:mt-0 md:ml-10">
    <img
      src={me}
      alt="Ramesh Bandari"
      className="w-40 h-40 md:w-80 md:h-80 object-cover shadow-lg -mt-10"
    />
  </div>

  {/* Text container */}
  <div className="flex md:w-1/2 flex-col justify-start items-start w-full md:ml-30 mt-6 ">
  <p className="text-left text-gray-500 dark:text-gray-300">
    I'm a web developer with a strong foundation in MERN stack and real-time applications. I build modern, responsive, and scalable web apps using React, Node.js, Express, MongoDB, and TailwindCSS.
    <br /><br />
    I’m also passionate about competitive programming, which sharpens my problem-solving skills and coding precision. I constantly explore new technologies to deliver efficient solutions and add value to every project I work on.
    <br /><br />
    Feel free to check out my portfolio or reach out to discuss collaborations, challenges, or ideas.
  </p>

  <div className="mt-6 flex space-x-4">

  <a
  href="https://drive.google.com/file/d/1UJwg-pOcNuwvMgCYv0K0nBs7smWKrDa3/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-2 rounded-lg bg-orange-100 text-orange-800 font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(251,146,60,0.6)] dark:bg-orange-900 dark:text-white dark:hover:shadow-[0_0_15px_rgba(251,146,60,0.8)]"
>
  View Resume
</a>
<a
  href="https://drive.google.com/uc?export=download&id=1UJwg-pOcNuwvMgCYv0K0nBs7smWKrDa3"
  className="px-5 py-2 rounded-lg bg-orange-600 text-white font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_rgba(234,88,12,0.8)]"
>
  Download Resume
</a>



    
  </div>
</div>

</div>

      </div>
    </section>
  )
}

export default About
