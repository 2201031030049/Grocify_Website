import React ,{ useEffect, useState } from 'react'
import { GoHeartFill } from 'react-icons/go'
import { HiShoppingBag } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'
import { TbMenu2, TbMenu3 } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => {
      setShowMenu(!showMenu)
    }

    useEffect(() => {

      const handleScroll = () => {

        setIsScrolled(window.scrollY > 10)

      }

      window.addEventListener('scroll', handleScroll);

      return () => 
        window.removeEventListener('scroll', handleScroll);

    }, [])

  return (
    <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'shadow-lg' : ''} transition-shadow duration-300`}>
      <nav className='flex justify-between max-w-350 mx-auto px-10 md:h-[14vh] h-[12vh] items-center'>
          {/* Logo */}
        <Link to="/" className='text-3xl font-bold'>
          Gr<span className='text-orange-500 uppercase'>o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className='md:flex items-center gap-x-15 hidden'>
          <li><Link to="/" className='font-semibold tracking-wider text-orange-500'>Home</Link></li>
          <li><Link to="/about" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About us</Link></li>
          <li><Link to="/process" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</Link></li>
          <li><Link to="/contact" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact us</Link></li>
        </ul>

        {/* Nav Action */}
        <div className='flex items-center gap-5'>

            {/* Input field for search can be added here in future */}
            <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
              <input
                type="text"
                placeholder="Search products..." name="text" id="text" autoComplete='off'
                className='flex-1 h-[5vh] focus:outline-none'/>
                <button className='bg-linear-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                  <IoSearch/>
                </button>
            </div>
          <a href="#" className='text-zinc-800 text-2xl hover:text-orange-500'>
            <GoHeartFill />
          </a>
           <a href="#" className='text-zinc-800 text-2xl hover:text-orange-500'>
            <HiShoppingBag />
          </a>

          {/* Hamburger */}
          <a href="#" onClick={toggleMenu} className='text-zinc-800 text-3xl md:hidden'>
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>

        {/* Mobile Menu */}
        <ul className={`flex flex-col gap-y-12 bg-orange-500/20 backdrop-blur-xl rounded-xl shadow-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : '-left-full'}`}>
          <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About us</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact us</a></li>

          <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
              <input
                type="text"
                placeholder="Search products..." name="text" id="text" autoComplete='off'
                className='flex-1 h-[5vh] focus:outline-none'/>
                <button className='bg-linear-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                  <IoSearch/>
                </button>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
