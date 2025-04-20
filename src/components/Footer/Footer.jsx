import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import ContactForm from "../ContactForm/ContactForm"
const Footer = () => {
  return (
    <div id='Footer' className='font-bold flex  justify-center md:flex-wrap md:justify-center   sm:flex-wrap sm:justify-center bg-[#021315e3] text-[#f2eeee] p-10 md:p-12 items-center'>
      <ContactForm />
      <div className='ms-20'>
        
        <h3 className='text-lg font-bold mb-5 md:text-3xl  '>Feel free to reach out</h3>
        <ul className='text-lg md:text-2xl '>
          <li className='flex gap-3 items-center m-1 '><MdOutlineEmail size={30}/> sachinmaurya4941@gmail.com  </li>
          <li className='flex gap-1 items-center m-1  '><FaGithub size={30} /> <a target='_blank' href="https://github.com/smaurya4941">github.com/smaurya4941</a> </li>
          <li className='flex gap-1 items-center m-1 pt-1 '><FaLinkedin size={30}/> <a href="https://www.linkedin.com/in/smaurya4941/" target='_blank'>linkedin.com/in/smaurya4941/</a> </li>
          
          
        </ul>
      </div>
    </div>
  )
}

export default Footer