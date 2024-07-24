import React from 'react'

export default function (props) {
  return (
    <div className='teammember'>
       
        <img src={props.timg}></img>
        <h1>{props.tname}</h1>
        <h3>{props.design}</h3>
    </div>
  )
}
