import React from 'react'
import { useState } from 'react'



function Update() {
    const [color, setColor] = useState("yellow" )


  return (
    <>
        <div className='updateState' style={{ backgroundColor: 'teal'}}>
            <h4>This is component use React Hooks</h4>
            <p>Lemme update this color {color}</p>
            <p>Press this to update color</p>
            <button type='button' onClick={() => setColor('Grey')}>Grey</button>
        </div>
        <select>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </select>
    </>
  )
}

export default Update