import React from 'react'
import ProfilePhoto from '../assets/images/RobertMe.jpg'
import '../styles/Profile.css'

function Avatar({person, size}) {
  return (
        <img 
            className='avatar'
            src={ProfilePhoto} 
            alt={person.name}
            width={size}
            height={size} 
        />
    
  )
}

export default Avatar