import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Welcome To My Journey!</h1>
        <h2>I'm Sara Rezaei</h2>
        <h5 className="text-bg-variant">Frontend Web Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header
