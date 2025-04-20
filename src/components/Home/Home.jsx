import React from 'react'
import TextChanger from '../../TextChanger'
import pic from '../../assets/sachin.jpg'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20 md:flex md:flex-row '>
        <div className=' w-2/3 md:w-2/4 md:pt-10 '>
            <h1 className='text-3xl md:text-6xl font-bold text-[#eee367] leading-normal tracking-tighter'> <TextChanger/> </h1>
            <p className='text-sm md:text-2xl tracking-tight'>Aspiring software developer with strong foundation in Django, SQL and full-stack web
development and also quick learner with a proactive approach to problem solving.</p>

            <button className='mt-5 md:m-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact me </button>
        </div>
        <div className=' w-1/3' ><img className='  rounded-full' src={pic}  alt=""  /></div>
    </div>
  )
}

export default Home