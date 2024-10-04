import React from 'react'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/facebook'
import 'react-social-icons/twitch'
import 'react-social-icons/youtube'
import 'react-social-icons/instagram'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center box-border items-center bg-grey px-[30] pt-[60px] pb-[20px] gap-5'>
        <div className='flex flex-row items-center gap-[10px]'>
            <Link to="/">
                <img src='src\assets\react.svg' className='w-[60px] h-[60px]'></img>
            </Link>
            <h2 className='font-New-Amsterdam text-light-blue text-3xl'> Lorem Ipsum Master </h2>  
        </div>
        <div>
            <p className='text-light-orange text-xl font-New-Amsterdam'>Dont forget to be acquainted with the one and only Lorem Ipsum Master</p>
        </div>
        <div className='flex flex-row gap-[10px]'>
            <SocialIcon url='https://www.facebook.com/'></SocialIcon>
            <SocialIcon url='https://www.twitch.tv/'></SocialIcon>
            <SocialIcon url='https://www.youtube.com/'></SocialIcon>
            <SocialIcon url='https://www.instagram.com'></SocialIcon>
        </div>
        <div className='text-xs font-Rhodium-Libre text-light-orange'>
            <p>All rights reserved to: ME, Timothy!!!</p>
        </div>
    </div>
  )
}

export default Footer