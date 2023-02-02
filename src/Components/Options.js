import React from 'react'

export default function Options() {
    const options = []

    for (let i = 0; i<= 10; i++){
      options.push(i)  
    }

  return (
   options.map (option => {
    return <option value={option}>{option}</option>
   })

  )
}