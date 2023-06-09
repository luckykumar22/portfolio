import React from 'react'
import CV from '../../assets/Lucky Kumar Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' download>Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA