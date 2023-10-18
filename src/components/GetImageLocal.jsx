import React from 'react'
import ProfilePhoto from '../assets/images/RobertMe.jpg'

function GetImageLocal(props) {
  
  return (
    <>
    <img 
        className='getimagelocal' 
        src={ProfilePhoto}
        width={props.size}
        height={props.size}
    />
    
    
    
    </>
  )
}

export default GetImageLocal