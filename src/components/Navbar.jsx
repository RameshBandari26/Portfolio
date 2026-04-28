import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/1727549378646.webp'
import AnimatedToggle from './AnimatedToggle';



const Navbar = () => {


  return (
    <nav className="w-full mt-6">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
        <img src={logo} alt="LOGO" className="w-10 h-10 rounded-full object-cover" />
        <h1 className="text-lg sm:text-2xl  font-bold bg-gradient-to-r from-[#fab700] to-[#e60000] bg-clip-text text-transparent">
          Ramesh Bandari
        </h1></div>
        <div className="hidden sm:block">
        <ul className="flex gap-6 font-semibold items-center">
          {['home', 'skills', 'about', 'projects', 'contact me'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer capitalize text-gray-400 hover:text-orange-500"
              >
                {section}
              </Link>
            </li>
          ))}

        </ul></div>
        <div className="scale-[0.2] sm:scale-[0.2] md:scale-[0.3] lg:scale-[0.4] ml-10 mr-10 ">
          <AnimatedToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
