import React from 'react'
import about from '../../assets/about.png'
import { IoArrowForward } from 'react-icons/io5'
const About = () => {
    return (
        <div  id='about' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-transparent shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
            <div>
                <h2 className='text-2xl md:text-4xl font-bold '>About</h2>
                <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                        <img className='md:h-80' src={about} alt="about img" />
                 
                    <ul>
                        <div className='flex gap-3 py-4 '>
                            <IoArrowForward size={30} className='mt-1'/>
                            <span className='w-96 '>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal text-[#39FF14]'>Frontend Developer</h1>
                                <p className='text-small md:text-md leading-tight'>
                                Creative frontend developer with a strong command of modern web technologies. Proficient in building responsive and user-friendly interfaces using HTML, CSS, JavaScript, and frameworks like React, Bootstrap and Tailwind CSS.
                                </p>
                            </span>
                        </div>

                        <div className='flex gap-3 py-4 '>
                            <IoArrowForward size={30} className='mt-1'/>
                            <span className='w-96 '>
                                <h1 className='text-2xl md:text-2xl font-semibold leading-normal  text-[#39FF14]'>Backend Developer</h1>
                                <p className='text-small md:text-md leading-tight'>
                                Backend developer skilled in Python and Django, with a passion for building scalable and efficient web applications.

                                </p>
                            </span>
                        </div>

                        {/* <div className='flex gap-3 py-4 '>
                            <IoArrowForward size={30} className='mt-1'/>
                            <span className='w-96 '>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database Developer</h1>
                                <p className='text-small md:text-md leading-tight'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, ab eos deleniti recusandae nam cupiditate totam sit labore delectus cum?
                                </p>
                            </span>
                        </div> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About