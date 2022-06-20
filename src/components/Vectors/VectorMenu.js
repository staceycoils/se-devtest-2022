import React from 'react'

export default function VectorMenu() {
  return (
    <svg version="1.1" 
      baseProfile="full"
      width="25" height="23"
      xmlns="http://www.w3.org/2000/svg">
          <circle cx='16' cy='6' r='5' transform='rotate(-45,19,6) scale(1.2,1)' fill='aqua'/>
          <rect width='25' height='3' x='2' y='20' rx='2' transform='rotate(-45,2,20)' fill='aqua' />
          <rect width='14' height='3' x='15' y='20' rx='2' transform='rotate(-135,18,20)' fill='aqua' />
          <rect width='4' height='5' transform='rotate(45,0,0) translate(10,-1.5)' fill='aqua' />
          <rect width='10' height='5' rx='4' transform='rotate(45,0,0) translate(3,-1.5)' fill='aqua' />
          <rect width='10' height='3' rx='2' transform='rotate(45,0,0) translate(3,-1.5)' fill='aqua' />
    </svg>
  )
}
