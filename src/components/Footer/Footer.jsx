import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import ContactForm from "../ContactForm/ContactForm"
const Footer = () => {
  return (
    <div
  id='Footer'
  className='text-white bg-[#103a5a] bg-opacity-30 shadow-xl mx-0 md:mx-20 rounded-lg p-6 md:p-12 mt-2 mb-10 overflow-hidden'
>
  <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
    
    {/* Contact Form Section */}
    <div className='w-full md:w-1/2'>
      <ContactForm />
    </div>

    {/* Contact Info Section */}
    <div className='w-full md:w-1/2 text-center md:text-left'>
      <h3 className='text-2xl md:text-4xl font-bold mb-5 text-[#f2eeee]'>
        Feel free to reach out
      </h3>

      <ul className='text-lg md:text-2xl flex flex-col gap-3'>
        <li className='flex items-center gap-3 text-[#0f0e0e]'>
          <MdOutlineEmail size={30} className="text-red-500 hover:text-red-700 transition duration-300" />
          sachinmaurya4941@gmail.com
        </li>

        <li className='flex items-center gap-3 text-[#0f0e0e]'>
          <FaGithub size={30} className="text-gray-800 hover:text-black transition duration-300" />
          <a target='_blank' href="https://github.com/smaurya4941" className="hover:underline">
            github.com/smaurya4941
          </a>
        </li>

        <li className='flex items-center gap-3 text-[#0f0e0e]'>
          <FaLinkedin size={30} className="text-blue-600 hover:text-blue-800 transition duration-300" />
          <a target='_blank' href="https://www.linkedin.com/in/smaurya4941/" className="hover:underline">
            linkedin.com/in/smaurya4941/
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Footer