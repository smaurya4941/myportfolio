import React from 'react'
import bg from '../../assets/bgchanger.png'
import bmi from '../../assets/bmi.jpg'
import pg from '../../assets/pgg.jpg'
import todo from '../../assets/todo.jpg'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-6 justify-evenly'>
            <ProjectCard image={pg} title="Password Generator " main="Genereate random Strong Password as per your preferences and copy it "  tech="React.js and Tailwind css" demolink="https://password-generator-red-ten-64.vercel.app/" sourcelink="https://github.com/smaurya4941/passwordGenerator"/>

            <ProjectCard image={bmi} title="BMI Calculator" main="Calculator BMI of person by taking height and weight as input "  tech="HTML, CSS, JS" demolink="https://bmi-cyan-two.vercel.app/" sourcelink="https://github.com/smaurya4941/BMI"/>
            
            <ProjectCard image={bg} title="Background Changer" main="Change background color of whole window " tech="HTML, CSS, JS" demolink="https://bgchanger49.vercel.app/" sourcelink="https://github.com/smaurya4941/BackgroundChanger"/>

            <ProjectCard image={todo} title="Daily Dash" main="App to manage your tasks " tech="HTML, CSS, JS, Django, bootstrap" demolink="https://sachinportfolio-one.vercel.app/" sourcelink="https://github.com/smaurya4941/BackgroundChanger"/>
            

        </div>
        
    </div>
  )
}

export default Projects