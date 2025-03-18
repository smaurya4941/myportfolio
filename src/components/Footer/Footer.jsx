import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
const Footer = () => {
  return (
    <div id='Footer' className='flex justify-center bg-black text-[#fff] p-10 md:p-12 items-center'>
      <div>
        <h1 className='text-2xl md:text-3xl font-bold   mb-3       text-[#cbd129]'>CONTACT ME</h1>
        <h3 className='text-sm md:text-xl font-normal '>Feel free to reach out</h3>
        <ul className='text-sm md:text-xl '>
          <li className='flex gap-1 items-center m-1 '><MdOutlineEmail size={20}/> sachinmaurya4941@gmail.com  </li>
          <li className='flex gap-1 items-center m-1  '><FaGithub/> <a target='_blank' href="https://github.com/smaurya4941">github.com/smaurya4941</a> </li>
          <li className='flex gap-1 items-center m-1 pt-1 '><FaLinkedin/> <a href="https://www.linkedin.com/in/smaurya4941/" target='_blank'>linkedin.com/in/smaurya4941/</a> </li>
          
          
        </ul>
      </div>
    </div>
  )
}

export default Footer