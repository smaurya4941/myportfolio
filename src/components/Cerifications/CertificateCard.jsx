import React from 'react'

function CertificateCard({ name ,image,link}) {
    return (
        <div className='p-3 py-0 md:p-6 flex flex-col w-80 bg-[#75ab42] shadow-xl shadow-slate-900 rounded-2xl '>
            <img className='p-4 max-h-40' src={image} alt="pimg" />
            <p className='px-4 text-lg md:text-md leading-tight py-1 font-bold text-black '>{name}</p>
            <div className='mt-0 p-0 md:p-4 flex gap-2 md:gap-4'>
                <a href={link} target="_blank"> <button className='ms-9  md:mt-4 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465696]'>View Certificate</button></a>
            </div>


        </div>
    )
}

export default CertificateCard
