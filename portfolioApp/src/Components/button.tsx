import React from 'react'


type buttonProps ={
    title:string
}

function Button(props:buttonProps) {
  return (
    <div>Button
        <button className='text-black border-2 border-blue-700 p-2.5 rounded-xl'>{props.title}</button>
    </div>
  )
}

export default Button