import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
<section id="footer">
  <footer>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/sara-rezaei-73301b23a/" target= "_blank"><BsLinkedin/></a>
      <a href="https://github.com/Sarah-Rz" target= "_blank"><BsGithub/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; 2022 All rights reserved. Sarah_RZ</small>
    </div>
  </footer>
</section>  
)
}

export default Footer