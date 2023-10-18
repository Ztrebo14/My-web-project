import React from 'react'
import { useState } from 'react'
import { friendsList } from './data'

const Friend = () => {
    let [index, setIndex] = useState(0)
    let [showDetails, setShowDetails] = useState(false)
    
    function clickNext() {
      setIndex(index + 1)
    }

    function clickPrev() {
      setIndex(index - 1)
    }

    function handleShowMore() {
      setShowDetails(!showDetails)
    }

    let gradPic = friendsList[index]

  return (
    <>
        <button onClick={clickPrev}>Prev</button>
        <button onClick={clickNext}>Next</button>
        
        <h2>{gradPic.name}</h2>
        <img src={gradPic.img} width={'100px'} height={'120px'} alt="Graduation Pic" />
        <h2>Age: {showDetails && <h2>{gradPic.age}</h2>}</h2>
        <h2>Date of Birth: {showDetails && <h2>{gradPic.dob}</h2>}</h2>
        <button onClick={handleShowMore}>{showDetails ? 'Show' : 'Hide'} details</button>
        <h3>{index + 1} of {friendsList.length}</h3>
    </>
  )
}

export default Friend