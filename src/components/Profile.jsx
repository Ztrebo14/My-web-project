import React from 'react'
import GetImageLocal from './GetImageLocal'
import '../styles/Profile.css'

function Profile() {
  let person = {
    name: 'Robert',
    age: 24,
  }

function Card({children}) {
  return (
    <div className='card'>
      {children}
    </div>
  )
}


  return (
    <>
      <div className='profile'>
      <h3>My mentors</h3>
        <Card>
          <GetImageLocal size={40}/>
          <h3>{person.name}</h3>
          <p>{person.age}</p>
         
            <p>Allan Bernardo</p>
            <p>Carl Anthony Unadia</p>
          
        </Card>
        <GetImageLocal thumbnailSize={100}/>
      </div>
    </>
  )
}

export default Profile