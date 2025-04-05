import React from 'react'
import completePython from '../../assets/CompletePython.png'
import pythonAndDjango from '../../assets/Python_Django.png'
import spi from '../../assets/softpro.png'
import CertificateCard from './CertificateCard'

function Certifications() {
    return (
        <div id='projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Certifications</h1>
        <div className='py-12 px-8 flex flex-wrap gap-6 justify-evenly'>
             <CertificateCard name={"Python with Django"} image={spi} link={"https://drive.google.com/file/d/1M0nP0zGmuwH5uXRAcYZBG4FPO3BVqlOA/view?usp=sharing"}/>
             <CertificateCard name={"Python&Django Framework"} image={pythonAndDjango} link={"https://drive.google.com/file/d/1HBWb6UPtZmk8h-LQohr7vV0qkc-cnhpW/view?usp=sharing"}/>
             <CertificateCard name={"Complete Python"} image={completePython} link={"https://drive.google.com/file/d/1qUM_oPm4p6nmPUbjceeOoUCFGGgTDmV0/view?usp=sharing"}/>
        </div>
        
    </div>
        
    )
}

export default Certifications
