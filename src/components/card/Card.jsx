import React from 'react'
import './card.css'
function card({emoji,heading,detail}) {
  return (
    <div className='card'>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="button c-button">Learn more</button>
    </div>
  )
}

export default card