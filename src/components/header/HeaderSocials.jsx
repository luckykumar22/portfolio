import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/luck22y/" target='blank'><BsLinkedin /></a>
        <a href="https://github.com/luckykumar22/" target='blank'><BsGithub /></a>
        <a href="https://www.instagram.com/luck22y/" target='blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials;
