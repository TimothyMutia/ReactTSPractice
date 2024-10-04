import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Theme_Button from './Theme_Button'

const Header:React.FC = () => {
  return (
    <header className="bg-grey flex flex-row w-screen h-full justify-between gap-10 z-50 px-5 py-2 itmes-center sticky top-0">
        <Link to="/">
          <img src='src\assets\react.svg' className='max-h-full min-w-full'></img>
        </Link>
        <Navbar/>
        <Theme_Button></Theme_Button>
    </header>
  )
}

export default Header