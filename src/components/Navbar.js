import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick =()=>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="logo" className='w-[50px] sm:w-[100px]'/>
        </div>
        
            <ul className='hidden md:flex'>
                <li><Link  to="home" smooth={true}  duration={500}>Home</Link></li>
                <li><Link  to="about" smooth={true}  duration={500}>About</Link></li>
                <li><Link  to="skills" smooth={true}  duration={500}>Skills</Link></li>
                <li><Link  to="project" smooth={true}  duration={500}>Projects</Link></li>
                <li><Link  to="contact" smooth={true}  duration={500}>Contact</Link></li>
            </ul>
       
        <div className='md:hidden z-10' onClick={handleClick}> 
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to="home" smooth={true}  duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to="about" smooth={true}  duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to="skills" smooth={true}  duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to="project" smooth={true}  duration={500}>Projects</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to="contact" smooth={true}  duration={500}>Contact</Link></li>
        </ul>

        
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-16px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="https://www.linkedin.com/in/saravana-kumaran-80b47b259/" className='flex justify-between items-center w-full text-gray-300 py-3' target='_blank' rel="noreferrer">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-16px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]' >
                    <a href="https://github.com/Saravanakumaran08011995" className='flex justify-between items-center w-full text-gray-300 py-3'target='_blank' rel="noreferrer">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-16px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300 py-3'>
                    <Link  to="contact" smooth={true}  duration={500}>Email</Link> <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-16px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a href="https://drive.google.com/file/d/1jq6uki5y5ED9GoPYZIBB7DoOGG9agzuL/view?usp=share_link" className='flex justify-between items-center w-full text-gray-300 py-3'target='_blank' rel="noreferrer">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>

  )
}
