import React from 'react'
import { FaCss3, FaHtml5, FaReact, FaJs, FaDatabase, FaGoogle, FaJava ,FaPython } from 'react-icons/fa'
import { SiMongodb ,SiDjango ,SiTailwindcss , SiBootstrap} from 'react-icons/si'
import softpro from '../../assets/softpro.png'
const Experience = () => {
    return (
        <div id='experience' className='text-white md:flex overflow-hidden bg-[#afad66] items-center md:flex-wrap md:justify-center shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 mt-2 '>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
            <div className='flex flex-wrap items-center justify-around   mt-2'>
                <div className='flex flex-wrap md:w-2/6 gap-10 md:p-12 py-10 '>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaHtml5 color='#E34F26' size={50} className=' text-4xl' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaCss3 color='#1572B6' size={50} className=' text-4xl' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaReact color='#61DAFB' size={50} className=' text-4xl' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaJava color='#5382A1' size={50} className=' text-4xl' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaJs color='#F7DF1E' size={50} className=' text-4xl' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaDatabase color='#4C6A92' size={50} className=' text-4xl' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaPython color='#FFD43B' size={50} className=' text-4xl' />
                    </span>

                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiBootstrap color='#7952B3' size={50} className=' text-4xl' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiDjango color='green' size={50} className=' text-4xl' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiTailwindcss color='#38BDF8' size={50} className=' text-4xl' />
                    </span>

                </div>
                <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                    {/* <FaGoogle color='#4285F4' size={50} className=' text-4xl' /> */}
                    <img src={softpro} className='max-h-30 min-h-10' alt="" />
                    <span className='text-white'>
                        <h2 className='leading-tight text-wrap text-2xl text-[#d0d013]'>Summer Training,SoftPro India</h2>
                        <p className='text-sm leading-tight font-thin m-1'>july 2024-sept-2024</p>
                        <ul>
                            <li>Works on School Management System Project</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Experience