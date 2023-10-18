import React from 'react'
import { useState } from 'react'


const Message = () => {
    let [isNameShow, setIsNameShow] = useState(false)
    let [count, setCount] = useState(0)

    let ToggleNameShow = () => {
        setIsNameShow(!isNameShow)
    }

    let handleClickIncrease = () => {
        setCount(count + 1)
    }
    
    let handleClickDecrease = () => {
        setCount(count - 1)
    }

  return (
    <>
    <button onClick={() => {
        console.log("Is the name outputed?")
        }}><h3>Click me to show in Console</h3>
    </button>
    <h1>Count: {count}</h1>
    <button onClick={handleClickIncrease}><h3>Increase +</h3></button>
    <button onClick={handleClickDecrease}><h3>Decrease -</h3></button>
    <button onClick={ToggleNameShow}><h3>{ isNameShow ? "is now ON" : "is now OFF"}</h3></button>
    </>
  )
}

export default Message