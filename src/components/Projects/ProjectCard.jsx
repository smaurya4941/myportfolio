import React from 'react'
import project1 from '../../assets/project1.avif'
const ProjectCard = ({title ,main,tech,demolink,sourcelink,image}) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#75ab42] shadow-xl shadow-slate-900 rounded-2xl '>
        <img className='p-4 max-h-40' src={image}  alt="pimg" />
        <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal bg-[#0e25a6]'>{title}</h3>
        <p className='px-4 text-sm md:text-md leading-tight py-1 '>{main}</p>
        <p className='px-4 text-sm md:text-md leading-tight py-1'><span className='font-bold'>Technology Used: </span>{tech}</p>
        
        <div className='mt-0 p-2 md:p-4 flex gap-2 md:gap-4'>
           <a href={demolink}  target="_blank"> <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465696]'>Demo</button></a>

           <a href={sourcelink}  target="_blank"> <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465696]'>Source Code</button></a>
        </div>
    </div>
  )
}

export default ProjectCard