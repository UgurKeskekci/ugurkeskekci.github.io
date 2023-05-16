import React, {useState}from 'react'
import {FaBars, FaTimes,FaGithub,FaLinkedin, FaYoutube} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import {BsFillPersonLines} from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import Logo1 from'../assets/ugurlogo2.png'

import {Link} from 'react-scroll'


function Navbar() {

  const[nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className=' w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
        <div>
            <img src={Logo1} alt="Logo Image" style={{width:'200px'}}></img>
        </div>

        {/*menu */}
        
          <ul className='hidden md:flex'>
            <li> 
            <Link to="home" smooth={true} duration={500}>
            Anasayfa
            </Link>
            </li>
            <li> 
            <Link to="about" smooth={true} duration={500}>
            Hakkımda
            </Link>
            </li>
            <li> 
            <Link to="skills" smooth={true} duration={500}>
            Yetenekler
            </Link>
            </li>
            <li> 
            <Link to="work" smooth={true} duration={500}>
            Çalışmalar
            </Link>
            </li>
            <li> 
            <Link to="contact" smooth={true} duration={500}>
            İletişim
            </Link>
            </li>
          </ul>
        

        {/* Hamburger Menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'> 
            <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
            Anasayfa
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Hakkımda
            </Link></li>
          <li className='py-6 text-4xl'> 
            <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
            Yetenekler
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
            Çalışmalar
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link  onClick={handleClick} to="contact" smooth={true} duration={500}>
            İletişim
            </Link></li>
        </ul>


        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-50'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
              <a className='flex justify-between items-center w-full text-gray-300 '
              href='/'>
                  LinkedIn <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
              <a className='flex justify-between items-center w-full text-gray-300 '
              href='/'>
                  GitHub <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700'>
              <a className='flex justify-between items-center w-full text-gray-300 '
              href='/'>
                  Email <HiMail size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700'>
              <a className='flex justify-between items-center w-full text-gray-300 '
              href='/'>
                  YouTube <FaYoutube size={30}/>
              </a>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar