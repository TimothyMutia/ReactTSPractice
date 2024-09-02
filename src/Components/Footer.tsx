import React from 'react'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/facebook'
import 'react-social-icons/twitch'
import 'react-social-icons/youtube'
import 'react-social-icons/instagram'

const Footer = () => {
  return (
    <div className='Footer'>
        <div>
            <img src='src\assets\react.svg' className='Logo'></img>
            <h2> Lorem Ipsum Master </h2>  
        </div>
        <div>
            <p className='Footer_Text'>Dont forget to be acquainted with the one and only Lorem Ipsum Master</p>
        </div>
        <div className='Footer_Socials'>
            <SocialIcon url='https://www.facebook.com/'></SocialIcon>
            <SocialIcon url='https://www.twitch.tv/'></SocialIcon>
            <SocialIcon url='https://www.youtube.com/'></SocialIcon>
            <SocialIcon url='https://www.instagram.com'></SocialIcon>
        </div>
        <div className='Copyright'>
            <p>All rights reserved to: ME, Timothy!!!</p>
        </div>
    </div>
  )
}

export default Footer