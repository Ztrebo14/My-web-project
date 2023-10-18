import React from 'react'

function Clock({color, time}) {
  return (
    <div>
        <h1 style={{ color: color }}>
            {time}
        </h1>
    </div>
  )
}

export default Clock