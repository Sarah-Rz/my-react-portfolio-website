import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {useState} from 'react';



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
      <nav>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</a>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : '' }>Portfolio</a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
      </nav>
    )
}

export default Nav