import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#fdf5f3] banner-heading'>Hey there! my name </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] banner-par'>Saravana Kumaran</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] banner-par'>I'm a Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] banner-par'>Specializing in building web applications. Currently I enjoy learning new skills and implementing them!</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 banner-par'> <Link to="project" smooth={true}  duration={500}>View Work</Link>
                    <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3 hover:'/></span>   
                </button>
            </div>
        </div>
    </div>
  )
}
