import React from 'react'
import '../styles/Header.css'
import Clock from './Clock'

function Header() {
  return (
    <>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li> 
            <li><a href='/aboutMe'>About Me</a></li>
        </ul>
        <Clock />
    </>
  )
}

export default Header