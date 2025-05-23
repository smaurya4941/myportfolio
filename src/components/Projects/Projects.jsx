import React from 'react'
import bg from '../../assets/bgchanger.png'
import bmi from '../../assets/bmi.jpg'
import pg from '../../assets/pgg.jpg'
import todo from '../../assets/todo.jpg'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='text-white md:flex overflow-hidden items-center bg-[#951ec4] md:flex-wrap md:justify-center  shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 mt-2  '>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='flex flex-wrap items-center justify-around   mt-2'>
          <div className='py-12 px-8 flex flex-wrap gap-6 justify-evenly  rounded-lg opacity-90'>
              <ProjectCard image={pg} title="Password Generator " main="Genereate random Strong Password as per your preferences and copy it "  tech="React.js and Tailwind css" demolink="https://password-generator-red-ten-64.vercel.app/" sourcelink="https://github.com/smaurya4941/passwordGenerator"/>

              <ProjectCard image={bmi} title="BMI Calculator" main="Calculator BMI of person by taking height and weight as input "  tech="HTML, CSS, JS" demolink="https://bmi-cyan-two.vercel.app/" sourcelink="https://github.com/smaurya4941/BMI"/>
              
              <ProjectCard image={bg} title="Background Changer" main="Change background color of whole window " tech="HTML, CSS, JS" demolink="https://bgchanger49.vercel.app/" sourcelink="https://github.com/smaurya4941/BackgroundChanger"/>

              <ProjectCard image={todo} title="Daily Dash" main="App to manage your tasks " tech="HTML, CSS, JS, Django, bootstrap" demolink="https://daily-dash-gm54.vercel.app/" sourcelink="https://github.com/smaurya4941/dailyDash"/>
              

          </div>
        </div>
        
    </div>
  )
}

export default Projects