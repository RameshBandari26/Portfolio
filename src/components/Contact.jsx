import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhoneAlt,
  faCommentDots,
  faPaperPlane,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import contactImg from '../assets/contact.webp'


const Contact = () => {
  return (
    <section id="contact me" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-3xl text-yellow-500 mb-4 font-extrabold"><FontAwesomeIcon icon={faHeadset} className='text-amber-200'/> Get in <span className='text-orange-600 font-extrabold'>Touch</span></h2>
        <p className="mb-6 text-gray-500 dark:text-gray-300">Feel free to reach out for collaborations or just a friendly hello!</p>
        <div className='flex flex-col  md:flex-row w-full bg-[#1E1E1E] mx-auto p-6 rounded shadow-[0_0_6px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_15px_4px_rgba(255,165,0,0.3)] transition duration-300 group'> <div className='md:w-1/2'>
        <form
      id="contact-form"
      action="https://api.web3forms.com/submit"
      method="POST"
      className="max-w-lg mx-auto p-4 bg-[#1E1E1E] rounded shadow"
    >
      <input type="hidden" name="access_key" value="93ef86da-f425-4fa7-945b-9f54801adb49" />

      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full pl-10 pr-3 py-2 text-gray-200 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400"
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full pl-10 pr-3 py-2 border text-gray-200 border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full pl-10 pr-3 py-2 border border-gray-400 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400"
          />
        </div>

        <div className="relative">
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full pl-10 pr-3 py-2 border border-gray-400 text-gray-200 rounded resize-none h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <FontAwesomeIcon
            icon={faCommentDots}
            className="absolute left-3 top-3 text-orange-400"
          />
        </div>
      </div>

      <div className="mt-6 text-right">
        <button
          type="submit"
          id="submit-button"
          className="inline-flex w-full justify-center md:w-35  items-center gap-2 bg-indigo-500 text-white px-6 py-2 rounded 
             hover:bg-indigo-600 transition 
             shadow-md hover:shadow-[0_0_20px_rgba(99,102,241,0.8)]"
        >
          Submit <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </form></div>
    <div className='md:w-1/2 flex justify-center items-center ml-5'>
      <img src={contactImg} alt="Contact"  />
    </div></div>
      </div>
    </section>
  )
}

export default Contact
