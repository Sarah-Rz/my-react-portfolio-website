import React from 'react'
import './header.css'
import CTA from './CTA'
import {IoIosBicycle} from 'react-icons/io'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Welcome To My Journey! <IoIosBicycle/></h1>
        <h2 className="text-light">Ich bin Sara</h2>
        <h3 className="text-light">Frontend Web Entwicklerin</h3>
        <CTA />
      </div>
    </header>
  )
}

export default Header
