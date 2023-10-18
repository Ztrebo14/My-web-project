import React from 'react'
import Avatar from './Avatar'

function Card({children}) {
  return (
    <div className='card'>
      {children}
    </div>
  )
}

function Content() {
  return (
    <Card>
    <Avatar size={100} person={{ name: 'Robert Abon' }} />
    <h3>Content here</h3>
    <p>Another more content put here</p>
    </Card>
  )
}

export default Content