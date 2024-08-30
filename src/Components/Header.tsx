import React from 'react'
import './styles.css'
import Navbar from './Navbar'

const Header:React.FC = () => {
  return (
    <header className='Header'>
        <img src='src\assets\react.svg' className='Logo'></img>
        <Navbar/>
    </header>
  )
}

export default Header