import React from 'react'
import './styles.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header:React.FC = () => {
  return (
    <header className='Header'>
        <Link to="/">
          <img src='src\assets\react.svg' className='Logo'></img>
        </Link>
        <Navbar/>
    </header>
  )
}

export default Header