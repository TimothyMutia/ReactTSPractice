import React from 'react'
import './styles.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Theme_Button from './Theme_Button'

const Header:React.FC = () => {
  return (
    <header className='Header'>
        <Link to="/">
          <img src='src\assets\react.svg' className='Logo'></img>
        </Link>
        <Navbar/>
        <Theme_Button></Theme_Button>
    </header>
  )
}

export default Header