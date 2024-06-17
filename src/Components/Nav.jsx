import React from 'react'
import{ headerLogo } from '../assets/images'
import{hamburger} from'../assets/icons'
import{navLinks} from '../Constant'

const Nav = () => {
  return (
    <header className='w-full padding-x py-8 absolute z-10'>
        <nav className='flex justify-between items-center max-container'>
            <a href="./">
                <img src={headerLogo} alt="logo" width={130} height={29} />
            </a>
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          
          {navLinks.map((link)=>(
            <li key={link.label}>
                <a href={link.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:[color:tomato]'>
                    {link.label}
                </a>
            </li>
          ))}
        </ul>
        
        <button className='capitalize bg-[tomato] text-white rounded-md px-6 py-2 max-lg:hidden'>login</button>
        <img src={hamburger} alt="menu" width={20} height={20} className='hidden max-lg:block' />
        </nav>

        
    </header>
  )
}

export default Nav
