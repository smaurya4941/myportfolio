import { RiCloseLine, RiMenu2Line } from '@remixicon/react'
import React, { useState } from 'react'

const NavBar = () => {
    const [menu,openMenu]=useState(false)
    const [showmenu,setshowmenu]=useState(true)
    return (
        <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20'>
            <span className='text-4xl font-bold tracking-wide'>Portfolio</span>
            <ul className={` ${menu?"block":"hidden"}        mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 text-2xl`}>
                <a href="#about"><li className='text-md transition-all duration-300 p-1 md:p-0'>About</li></a>
                <a href="#experience">  <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li></a>
                <a href="#projects"> <li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li> </a>
                <a href="#Footer"> <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li></a>
            </ul>
            {showmenu?(
                <RiMenu2Line size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' onClick={()=>{
                    openMenu(!menu) 
                    setshowmenu(!showmenu);}
                } />
                
            ):<RiCloseLine size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300'/>}
            
        </nav>
    )
}

export default NavBar